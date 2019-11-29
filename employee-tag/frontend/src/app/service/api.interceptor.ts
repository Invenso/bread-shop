import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpInterceptor, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    private readonly token: string = 'IKnV2QZvTaypIDrS3ejVh67pd/wnUp6YJAchDM3WiN4=';

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {'X-API-Key': this.token}
        });
        return next.handle(request);
    }
}
