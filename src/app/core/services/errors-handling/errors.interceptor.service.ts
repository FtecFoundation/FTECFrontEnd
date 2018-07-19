import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import 'rxjs/add/observable/of';

@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor {

    constructor(private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .map(resp => {
                if (resp instanceof HttpResponse) {
                    return resp;
                }
            }).catch(err => {
                console.log(err);
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 423) {
                        this.router.navigate(['/banned']);
                    } if (err.status === 403) {
                        this.router.navigate(['/auth']);
                    }
                    
                }
                return Observable.of(err);
            }) as any;
    }
}
