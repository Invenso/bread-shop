import {Component, OnDestroy} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {filter, first, map, switchMap} from 'rxjs/operators';
import {SmartflowsService} from '../smartflows/smartflows.service';
import * as Filesaver from 'file-saver';

@Component({
    selector: 'app-download',
    template: `
        <button class="btn btn-primary align-self-center px-4" (click)="download()">Download</button>
        <div *ngIf="url$ | async" class="flex-auto" [innerHTML]="url$ | async"></div>`,
    styles: [':host {display: flex; flex: auto; flex-direction: column}']
})
export class DownloadComponent implements OnDestroy {
    private sub: Subscription;

    url$: Observable<SafeHtml>;
    private signedDocumentId: any;

    constructor(route: ActivatedRoute, private smartflows: SmartflowsService, sanitizer: DomSanitizer) {
        this.sub = route.queryParams.pipe(
            filter(params => !!params['signed'] && !!params['html'])
        ).subscribe(params => {
            this.signedDocumentId = params['signed'];
            const htmlDocumentId = params['html'];

            this.url$ = smartflows.getDocument(htmlDocumentId, "text/html").pipe(first(), map((html: string) => sanitizer.bypassSecurityTrustHtml(html)));
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    download() {
        this.smartflows.getDocument(this.signedDocumentId, "blob").pipe(first())
            .subscribe(blob => Filesaver.saveAs(blob, 'Employee tag.pdf'));
    }

}
