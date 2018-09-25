import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorsService } from '../../core/services/errors-handling/errors.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../auth.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;
    errorResponse: string = null;
    enabled2FA: boolean = false;

    constructor(private _accountService: AccountService,
                private formBuilder: FormBuilder,
                private _errorsService: ErrorsService,
                private router: Router) {
    }

    ngOnInit() {
        this.errorResponse = this._errorsService.currentError;
        this.createForm();

    }

    createForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            code: ['']
        });
    }

    submitForm() {
        this.submitted = true;
        if (this.loginForm.valid) {
            this._accountService.loginUser(this.loginForm.value).subscribe(() => {
                this.router.navigate(['/account']);
                this._errorsService.currentError = null;
            }, error1 => {
                if (error1.error.status === 2 && !this.enabled2FA) this.enabled2FA = true;
                else {
                    this._errorsService.currentError = null;
                    this.errorResponse = this._errorsService.parseResponseMessage(error1);
                }
            });
        }
    }

    hasFieldError(fieldName: string): boolean {
        return this.loginForm.controls[fieldName].invalid && (this.submitted || this.loginForm.controls[fieldName].touched);
    }
}
