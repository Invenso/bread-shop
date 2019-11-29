import {Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-settings-form',
    template: `
        <div *ngIf="flows && flows.length > 1" class="form-group" [formGroup]="settingsForm">
            <label class="form-control-label">Flows</label>
            <select class="form-control" formControlName="flowId">
                <option *ngFor="let flow of flows" [value]="flow.id">{{flow.displayName}}</option>
            </select>
        </div>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsFormComponent implements OnChanges {

    @Input() settingsForm: FormGroup;
    @Input() flows;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        if (this.flows && this.flows.length > 0) {
            this.settingsForm.get('flowId').setValue(this.flows[0].id);
        }
    }

}
