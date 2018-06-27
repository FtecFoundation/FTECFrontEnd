import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RestService} from './rest.service';
import {tap} from 'rxjs/operators/tap';
import {catchError} from 'rxjs/operators/catchError';

enum ImageApiUrls {
    getProfileImage = 'cabinet/image/',
    setProfileImage = 'cabinet/image/'
}

@Injectable()
export class ImageService extends RestService {

    getImage(): Observable<Blob> {
        return this.getBlob(ImageApiUrls.getProfileImage).pipe(
            tap(resp => console.log(resp)),
            catchError(e => this.handleError(e)));
    }

    setImage(image: any): Observable<any> {
        return this.put(ImageApiUrls.setProfileImage, image, 'image/*').pipe(
            tap(resp => console.log(resp)),
            catchError(e => this.handleError(e)));
    }

}
