import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileSaverService} from 'ngx-filesaver';
import {BehaviorSubject} from 'rxjs';
import {first} from 'rxjs/operators';
import {SmartflowsService} from './smartflows/smartflows.service';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html', styleUrls: ['./app.component.scss']
})
export class AppComponent {

    documentForm: FormGroup;
    docId: string;
    busy$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private fb: FormBuilder, private smartflows: SmartflowsService, private fileSaver: FileSaverService) {
        this.documentForm = this.fb.group({
            Name: [null, Validators.required],
            Title: [],
            Picture: [],
            Surname: [],
            Email: []
        });
    }

    onSubmit() {
        if (this.documentForm.valid) {
            this.busy$.next(true);
            this.smartflows.startFlow(this.documentForm.value).pipe(
                // switchMap((progress) => this.smartflows.getResult(progress.id))
            ).subscribe(result => {
                this.busy$.next(false);
                this.docId = result.state.output.model.B2b4eb394_5e5f_4ef5_929d_b2270eb5643c.document.id;
            }, () => this.busy$.next(false));
        }
    }

    updateImage(image: string) {
        this.documentForm.get('Picture').setValue(image);
    }

    downloadDoc() {
        this.smartflows.getDocumentContent(this.docId).pipe(first()).subscribe((res) =>
            this.fileSaver.save(res, 'card.pdf')
        );
    }
}
