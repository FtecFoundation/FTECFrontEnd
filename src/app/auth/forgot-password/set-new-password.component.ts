import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {RegistrationValidators} from '../registration/registration.validators';

@Component({
    selector: 'app-set-new-password',
    templateUrl: './set-new-password.component.html',
    styleUrls: ['../auth.scss']
})
export class SetNewPasswordComponent implements OnInit {

    restoreForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,
                private _accountService: AccountService) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.restoreForm = this.formBuilder.group({
            restoreCode: ['', Validators.required],
            passwordGroup: this.formBuilder.group({
                password: ['', [Validators.required,  Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$')]],
                confirmPassword: ['', Validators.required]
            }, {validator: RegistrationValidators.checkConfirmedPassword})
        });
        this.restoreForm = new FormGroup(this.restoreForm.controls, { updateOn: 'blur' });
    }

    onSubmit(form: NgForm) {
    }

    get password() { return this.restoreForm.get('passwordGroup').get('password'); }

    get passwordGroup() { return this.restoreForm.get('passwordGroup'); }

    get confirmPassword() { return this.restoreForm.get('passwordGroup').get('confirmPassword'); }
}
