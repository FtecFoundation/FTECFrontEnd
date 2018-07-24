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
    protectedAuth: RegExp = new RegExp('(\\/modules)|(\\/account)');
    constructor(private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .map(resp => {
                if (resp instanceof HttpResponse) {
                    return resp;
                }
            }).catch(err => {
                if (err instanceof HttpErrorResponse) {
                    switch (err.status) {
                        case 423:
                            this.router.navigate(['/banned']);
                            break;
                        case 403:
                            const isProtected = this.protectedAuth.exec(this.router.url);
                            if (isProtected && isProtected.length > 0) { this.router.navigate(['/auth']); }
                            break;
                    }
                }
                return Observable.throw(err);
            });
    }
}
