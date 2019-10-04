import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-document-form',
    template: `
        <div class="flex-auto" [formGroup]="documentForm">
            <div class="form-group">
                <label class="form-control-label">Title</label>
                <input class="form-control" formControlName="Title"/>
            </div>
            <div class="form-group">
                <label class="form-control-label">Name</label>
                <input class="form-control" formControlName="Name"/>
            </div>
            <div class="form-group">
                <label class="form-control-label">Surname</label>
                <input class="form-control" formControlName="Surname"/>
            </div>
            <div class="form-group">
                <label class="form-control-label">Email</label>
                <input class="form-control" formControlName="Email"/>
            </div>
            <div class="form-check">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck" formControlName="IncludeSignature">
                    <label class="custom-control-label" for="customCheck">Include signature</label>
                </div>
            </div>
        </div>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentFormComponent {

    @Input() documentForm: FormGroup;

}
