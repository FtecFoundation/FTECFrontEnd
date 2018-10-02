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
    '22': 'Module id disabled',
    '23': 'This thicket doesn\'t exist',
    '24': 'This thicket isn\'t updatable',
    '25': 'Authorization failed',
    '26': 'Image that you\'re trying to send is invalid',
    '27': 'This test doesn\'t exist',
    '28': 'Telegram Assistant is not connected',
    '29': 'Telegram Assistant has already been connected',
    '30': 'User\'s identifier wasn\'t found',
    '31': 'Your IP address has been banned',
    '32': 'You can send only 1 confirmation message per 1 hour',
    '33': 'You have no access to this service',
    '34': 'Wrong exchange API keys! Check it and try again',
    '35': 'There are no exchanges were chosen',
    '36': 'Confirm your email to continue',
    '37': 'Not enough ETH to continue',
    '38': 'This page doesn\'t exist',
    '39': 'This address doesn\'t exist',
    '40': 'This pair doesn\'t exist on this exchange',
    '41': 'Select at least one notification type to continue',
    '42': 'You ran out of notifications limit',
    '43': 'Volume Analyzer is already activated',
    '44': 'Volume Analyzer is already deactivated',
    '45': 'Volume Analyzer is not configures. Please, select and save preferences to continue',
    '46': 'Exchange is not connected'
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
