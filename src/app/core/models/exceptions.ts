export class CustomException {
}

export class ModuleDisabledExceptions extends CustomException {
}

export class UnauthenticatedException extends CustomException {
}
export class StatusCodeError extends CustomException {
    status: number;

    constructor(status: number) {
        super();
        this.status = status;
    }
}
