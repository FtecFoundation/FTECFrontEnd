import {Injectable} from '@angular/core';

@Injectable()
export class LanguageService {
    currentLanguage: string;

    constructor() {
    }

    initLanguage() {
        this.currentLanguage = navigator.language;
        console.log(this.currentLanguage);
    }

    set setLanguage(lang: string) {
        this.currentLanguage = lang;
    }

}
