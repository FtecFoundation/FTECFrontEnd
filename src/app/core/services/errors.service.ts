import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ErrorsService {

    currentError: string = null;

    constructor() { }

    public parseResponseMessage(error: HttpErrorResponse): string {
        return error.error.error;
    }
}
