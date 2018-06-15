import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RestService} from './rest.service';
import {tap} from 'rxjs/operators/tap';
import {catchError} from 'rxjs/operators/catchError';

enum ImageApiUrls {
    getProfileImage = 'cabinet/images'
}

@Injectable()
export class ImageService extends RestService{

    public getImage(): Observable<Blob> {
        return this.getBlob(ImageApiUrls.getProfileImage).pipe(
            tap(resp => console.log(resp)),
            catchError(e => this.handleError(e)));
    }

}
