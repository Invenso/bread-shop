import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {filter, first, flatMap, map, share, takeUntil, takeWhile} from 'rxjs/operators';
import {Flow, FlowExecution, FlowExecutionProgress, FlowExecutionStatus} from './models';

const json2xml = require('json2xml');

@Injectable({
    providedIn: 'root'
})
export class SmartflowsService {

    private apiUrl = 'https://tenant7.xperido.com/api/v1';

    constructor(private http: HttpClient) {
    }

    getFlows() {
        return this.http.get<Flow[]>(this.apiUrl + '/flows');
    }

    startFlow(flowId: string, data: any): Observable<FlowExecutionProgress> {
        const body = json2xml({EmployeeTag: data});
        return this.http.post<FlowExecutionProgress>(this.apiUrl + '/flows/executions?flowId=' + flowId, body).pipe(
            flatMap(progress =>
                interval(1000).pipe(
                    flatMap(() => this.pollStatus(progress.id)),
                    takeWhile(pg => pg.status !== FlowExecutionStatus.Success && pg.status !== FlowExecutionStatus.Error, true),
                    share())
            )
        );
    }

    getDocument(id: string, type): Observable<any> {
        return this.http.get<string>(this.apiUrl + '/documents/' + id + '/content', {responseType: type});
    }

    getFlowExecutionOutput(executionId: string): Observable<FlowExecution> {
        return this.http.get(this.apiUrl + '/flows/executions/' + executionId + '/status').pipe(share());
    }

    pollStatus(executionId: string): Observable<FlowExecutionProgress> {
        return this.http.get<FlowExecutionProgress>(this.apiUrl + '/flows/executions/' + executionId + '/progress').pipe(share());
    }

    getResult(executionId: string): Observable<any> {
        return this.http.get(this.apiUrl + '/flows/executions/' + executionId + '/status').pipe(share());
    }

    getDocumentContent(id: string): Observable<Blob> {
        return this.http.get(this.apiUrl + '/documents/' + id + '/content', {responseType: 'blob'}).pipe(share());
    }
}
