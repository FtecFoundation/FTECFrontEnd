export enum notifyTypes {
    warning = 'warning',
    error = 'error',
    success = 'success'
}

export class Notify {
    title: string;
    description: string;
    type: string;

    constructor(title: string, descr: string, type: string) {
        this.title = title;
        this.description = descr;
        this.type = type;
    }
}