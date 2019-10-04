import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Observable, Subject} from 'rxjs';

@Component({
    selector: 'app-camera',
    template: `
        <div class="position-relative">
            <webcam [height]="800" [width]="600" [trigger]="triggerObservable" (imageCapture)="handleImage($event)" *ngIf="showWebcam"
                    [allowCameraSwitch]="allowCameraSwitch" [switchCamera]="nextWebcamObservable"
                    [videoOptions]="videoOptions" (click)="triggerSnapshot();"
                    (cameraSwitched)="cameraWasSwitched($event)"
                    (initError)="handleInitError($event)">
            </webcam>
            <div class="snapshot" *ngIf="webcamImage" (click)="enableWebcam();">
                <img [src]="webcamImage.imageAsDataUrl"/>
            </div>
            <div class="position-absolute px-2 info">
                <span *ngIf="!webcamImage">Press to take a photo</span>
                <span *ngIf="webcamImage">Press to enable camera</span>
            </div>
        </div>

    `,
    styles: [`
		:host {
			display: flex;
			flex-direction: column;
		}

		.snapshot {
			text-align: center;
		}

		.snapshot img {
			max-width: 500px;
			max-height: 500px;
		}

		.info {
			background: rgba(255, 255, 255, 0.5);

			top: 10%;
			left: 50%;
			transform: translateX(-50%)
		}
    `]
})
export class CameraComponent implements OnInit {

    @Output() image = new EventEmitter();

    // toggle webcam on/off
    showWebcam = true;
    allowCameraSwitch = true;
    multipleWebcamsAvailable = false;
    deviceId: string;
    videoOptions: MediaTrackConstraints = {};
    errors: WebcamInitError[] = [];

    // latest snapshot
    webcamImage: WebcamImage = null;

    // webcam snapshot trigger
    private trigger: Subject<void> = new Subject<void>();
    // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
    private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

    public ngOnInit(): void {
        WebcamUtil.getAvailableVideoInputs()
            .then((mediaDevices: MediaDeviceInfo[]) => {
                this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
            });
    }

    public triggerSnapshot(): void {
        this.trigger.next();
    }

    public enableWebcam(): void {
        this.showWebcam = true;
        this.webcamImage = null;
    }

    public handleInitError(error: WebcamInitError): void {
        this.errors.push(error);
    }

    public showNextWebcam(directionOrDeviceId: boolean | string): void {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    }

    public handleImage(webcamImage: WebcamImage): void {
        this.webcamImage = webcamImage;
        this.image.emit(this.webcamImage.imageAsBase64);
        this.showWebcam = false;
    }

    public cameraWasSwitched(deviceId: string): void {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    }

    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }

    public get nextWebcamObservable(): Observable<boolean | string> {
        return this.nextWebcam.asObservable();
    }
}
