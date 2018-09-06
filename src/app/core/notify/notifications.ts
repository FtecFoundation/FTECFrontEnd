export enum notifyTypes {
    warning = 'warning',
    error = 'error',
    success = 'success'
}

export class Notify {
    id: number;
    title: string;
    description: string;
    type: string;

    constructor(id: number, title: string, descr: string, type: string) {
        this.id = id;
        this.title = title;
        this.description = descr;
        this.type = type;
    }
}