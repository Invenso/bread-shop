import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {filter, first, flatMap, share} from 'rxjs/operators';
import {FlowExecutionProgress} from './models/flowExecutionProgress';
import {FlowExecutionStatus} from './models/flowExecutionStatus';

const json2xml = require('json2xml');

@Injectable({
    providedIn: 'root'
})
export class SmartflowsService {

    private apiUrl = 'https://spica.xperido.com/api/v1';
    private readonly flowId = '91aef0ad-1787-4fdf-b265-182b5afff3cf';

    constructor(private http: HttpClient) {
    }

    startFlow(data: any): Observable<FlowExecutionProgress> {
        const body = json2xml({EmployeeTag: data});
        return this.http.post<FlowExecutionProgress>(this.apiUrl + '/flows/executions?flowId=' + this.flowId, body).pipe(
            flatMap(progress =>
                interval(1000).pipe(
                    flatMap(() => this.pollStatus(progress.id)),
                    filter(pg => pg.status === FlowExecutionStatus.Success),
                    first(),
                    share())
            )
        );
    }

    pollStatus(executionId: string): Observable<FlowExecutionProgress> {
        return this.http.get<FlowExecutionProgress>(this.apiUrl + '/flows/executions/' + executionId).pipe(share());
    }

    getResult(executionId: string): Observable<any> {
        return this.http.get(this.apiUrl + '/flows/executions/' + executionId + '/status').pipe(share());
    }

    getDocumentContent(id: string): Observable<Blob> {
        return this.http.get(this.apiUrl + '/documents/' + id + '/content', {responseType: 'blob'}).pipe(share());
    }
}
