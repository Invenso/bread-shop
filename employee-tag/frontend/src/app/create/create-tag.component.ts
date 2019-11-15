import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {filter, first, map, shareReplay, switchMap, take} from 'rxjs/operators';
import {Flow, FlowExecutionProgress, FlowExecutionStatus} from '../smartflows/models';
import {SmartflowsService} from '../smartflows/smartflows.service';
import * as Flatten from 'flat';

@Component({
    selector: 'app-create-tag',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="container">
            <div class="row">
                <div class="col">
                    <app-settings-form [settingsForm]="settingsForm" [flows]="flows$ | async"></app-settings-form>
                </div>
                <div class="col"></div>
            </div>

            <div class="row flex-auto" style="overflow-y: auto">
                <div class="col d-flex">
                    <app-camera (image)="updateImage($event)"></app-camera>
                </div>
                <div class="col d-flex flex-column">
                    <app-document-form [documentForm]="documentsForm" class="mb-3"></app-document-form>
                    <button class="btn btn-primary flex-auto" (click)="onSubmit()">
                        <span *ngIf="!(busy$ | async)">Submit</span>
                        <span *ngIf="busy$ | async">Rendering...</span>
                    </button>
                </div>
            </div>
            <div *ngIf="docusignUrl" class="row">
                <div class="col d-flex my-5 p-3 justify-content-center">
                    <button class="btn btn-primary" (click)="signDoc()">
                        <h3>Sign your new tag</h3>
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [`
		:host {
			display: flex;
			flex-direction: column;
		}
    `]
})
export class CreateTagComponent {

    form: FormGroup;
    docusignUrl: string;
    busy$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    error$: BehaviorSubject<string> = new BehaviorSubject(null);
    flows$: Observable<Flow[]>;

    constructor(private fb: FormBuilder, private smartflows: SmartflowsService, private router: Router) {
        this.form = this.fb.group({
            document: this.fb.group({
                Name: [null, Validators.required],
                Title: [null, Validators.required],
                Picture: [null, Validators.required],
                Surname: [null, Validators.required],
                Email: [null, Validators.required],
                IncludeSignature: [],
                Meta: {
                    RedirectUrl: [location.origin]
                }
            }),
            settings: this.fb.group({
                flowId: []
            })
        });

        this.flows$ = this.smartflows.getFlows();
    }

    removeError() {
        this.error$.next(null);
    }

    findValue(result, toFind: string): string {
        const flat: any = Flatten.flatten(result);
        const key = Object.keys(flat).find(k => k.endsWith(toFind));
        return flat[key];
    }

    get documentsForm() {
        return this.form.get('document');
    }

    get settingsForm() {
        return this.form.get('settings');
    }

    onSubmit() {
        this.removeError();
        if (this.documentsForm.valid) {
            this.busy$.next(true);
            const poller: Observable<FlowExecutionProgress> = this.smartflows.startFlow(this.settingsForm.value.flowId, this.documentsForm.value).pipe(
                // switchMap((progress) => this.smartflows.getResult(progress.id))
                map(result => {
                    if (result.status === FlowExecutionStatus.Error || result.status === FlowExecutionStatus.Warning) {
                        throw new Error(result.message);
                    }
                    return result;
                }),
                shareReplay()
            );


            poller.pipe(
                filter(result => result.status === FlowExecutionStatus.Waiting),
                map(result => this.findValue(result, 'urlsToEmbed.0.value')),
                first(url => !!url)
            ).subscribe((embedUrl: string) => {
                this.busy$.next(false);
                this.docusignUrl = embedUrl;
            }, (error) => {
                this.error$.next(error);
                this.busy$.next(false);
            });

            poller.pipe(filter(result => result.status === FlowExecutionStatus.Success),
                map(result => [this.findValue(result, 'signedDocument.id'), this.findValue(result, 'document.id')]),
                filter(urls => !!urls[0] && !!urls[1]),
                take(1)
            ).subscribe(documentIds => {
                this.router.navigate(['/download'], {queryParams: {'signed': documentIds[0], 'html': documentIds[1]}});
            });
        }
    }

    updateImage(image: string) {
        this.documentsForm.get('Picture').setValue(image);
    }

    signDoc() {
        window.open(this.docusignUrl);
    }
}
