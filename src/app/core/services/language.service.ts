import {Injectable} from '@angular/core';

@Injectable()
export class LanguageService {
    currentLanguage: string;

    constructor() {
    }

    initLanguage() {
        this.currentLanguage = navigator.language;
    }

    set setLanguage(lang: string) {
        this.currentLanguage = lang;
    }

}
