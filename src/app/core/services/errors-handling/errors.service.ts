import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {CustomException, UnauthenticatedException} from '../../models/exceptions';

export const errorMessages = {
    '1': 'Invalid username or password',
    '2': 'Invalid 2FA code',
    '3': 'This login is already taken',
    '4': 'This e-mail is already taken',
    '5': 'Something went wrong while authenticating user. Please, try again',
    '6': 'Wrong data',
    '7': 'Unexpected error',
    '8': 'Something went wrong while authenticating user. Please, try again',
    '9': 'Weak password',
    '10': 'Invalid hash',
    '11': 'User with this e-mail or login wasn\'n found',
    '12': 'User doesn\'t exist',
    '13': 'Invalid file extension',
    '14': 'Uploaded file is empty',
    '15': 'Session was expired. Please, log in to continue',
    '16': 'Not enough credits',
    '17': 'Subscription expired',
    '18': 'Error while processing ticket',
    '19': 'Forbidden',
    '20': 'File not found',
    '21': 'Tutorial is completed',
    '22': 'Module id disabled'
};

@Injectable()
export class ErrorsService {

    currentError: string = null;

    constructor() { }



    public parseResponseMessage(error: HttpErrorResponse): string {
        return errorMessages[this.getStatusCode(error)];
    }

    public getStatusCode(error: HttpErrorResponse): string {
        return error.error.status;
    }
    public handleCustomException(ex: CustomException): boolean {
        if (ex instanceof UnauthenticatedException) { return false; }
        return true;


    }
}
