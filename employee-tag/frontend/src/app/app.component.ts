import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileSaverService} from 'ngx-filesaver';
import {BehaviorSubject, throwError} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {FlowExecutionStatus} from './smartflows/models/flowExecutionStatus';
import {SmartflowsService} from './smartflows/smartflows.service';

@Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './app.component.html', styleUrls: ['./app.component.scss']
})
export class AppComponent {

    documentForm: FormGroup;
    docusignUrl: string;
    busy$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    error$: BehaviorSubject<string> = new BehaviorSubject(null);

    constructor(private fb: FormBuilder, private smartflows: SmartflowsService, private fileSaver: FileSaverService) {
        this.documentForm = this.fb.group({
            Name: [null, Validators.required],
            Title: [],
            Picture: [],
            Surname: [],
            Email: [],
            Meta: {
                RedirectUrl: [location.origin]
            }
        });
    }

    removeError() {
        this.error$.next(null);
    }

    onSubmit() {
        this.removeError();
        if (this.documentForm.valid) {
            this.busy$.next(true);
            this.smartflows.startFlow({request: this.documentForm.value}).pipe(
                // switchMap((progress) => this.smartflows.getResult(progress.id))
                switchMap(result => {
                    if (result.status === FlowExecutionStatus.Error) {
                        return throwError(result.message);
                    }
                    return this.smartflows.getFlowExecutionOutput(result.id, 'output');
                }),
                map(execution => execution.outputs[0])
            ).subscribe(output => {
                this.busy$.next(false);
                this.docusignUrl = output.content['EmbedUrl'];
            }, (error) => {
                this.error$.next(error);
                this.busy$.next(false);
            });
        }
    }

    updateImage(image: string) {
        this.documentForm.get('Picture').setValue(image);
    }

    signDoc() {
        window.location.href = this.docusignUrl;
    }
}
