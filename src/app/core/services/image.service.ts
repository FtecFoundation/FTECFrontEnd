import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

enum ImageApiUrls {
    getProfileImage = 'cabinet/image/',
    setProfileImage = 'cabinet/image/'
}

@Injectable()
export class ImageService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService){
        super(_http, _cookieService);
    }
    // getImage(): Observable<Blob> {
    //     return this.getBlob(ImageApiUrls.getProfileImage).pipe(
    //         catchError(e => this.handleError(e)));
    // }

    setImage(image: any, type: string): Observable<string> {
        return this.put(ImageApiUrls.setProfileImage, image, type).pipe(
            map(resp => resp.response.imagePath),
            catchError(e => this.handleError(e)));
    }

}
