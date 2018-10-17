import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {RestService} from './rest.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

enum ImageApiUrls {
    profileImage = 'cabinet/image/',
    usersImages = 'cabinet/image/users'
}

@Injectable()
export class ImageService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    setImage(image: any, type: string): Observable<string> {
        return this.put(ImageApiUrls.profileImage, image, type).pipe(
            map(resp => resp.response.imagePath),
            catchError(e => this.handleError(e)));
    }

    deleteImage(): Observable<any> {
        return this.delete(ImageApiUrls.profileImage);
    }

    getUsersImages(authors: string): Observable<any> {
        const params = new HttpParams().set('id', authors);
        return this.get(ImageApiUrls.usersImages, params).pipe(map(resp => resp.response));
    }
}
