import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../core/services/account.service';
import {RegistrationValidators} from './registration.validators';
import {RegistrationData} from '../../core/models/user';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registrastion.component.html',
    styleUrls: ['../auth.scss']

})
export class RegistrationComponent implements OnInit {

    registrationForm: FormGroup;
    submitted = false;

    constructor(private _accountService: AccountService,
                private formBuilder: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.registrationForm = this.formBuilder.group({
            username: ['', Validators.required, RegistrationValidators.checkUsernameNotTaken(this._accountService)],
            email: ['', [Validators.required, Validators.email], RegistrationValidators.checkEmailNotTaken(this._accountService)],
            passwordGroup: this.formBuilder.group({
                password: ['', [Validators.required,  Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$')]],
                confirmPassword: ['', Validators.required]
            }, {validator: RegistrationValidators.checkConfirmedPassword}),
            terms: [false, Validators.requiredTrue],
            subscribeForEmail: [false]
        });
        this.registrationForm = new FormGroup(this.registrationForm.controls, { updateOn: 'blur' });
    }

    submitForm() {
        console.log(this.terms.value);
        this.submitted = true;
        if (this.registrationForm.valid) {
            this._accountService.registerUser(this.prepareData()).subscribe(() => {
                this.router.navigate(['/modules']);
            });
        }
    }

    prepareData(): RegistrationData {
        return new RegistrationData().deserialize(this.registrationForm.value);
    }

    toggleCheckbox() {
        this.terms.value === true ? this.terms.setValue(false) : this.terms.setValue(true);
        console.log(this.terms.value);
    }

    get username() { return this.registrationForm.get('username'); }

    get email() { return this.registrationForm.get('email'); }

    get terms() { return this.registrationForm.get('terms'); }

    get password() { return this.registrationForm.get('passwordGroup').get('password'); }

    get passwordGroup() { return this.registrationForm.get('passwordGroup'); }

    get confirmPassword() { return this.registrationForm.get('passwordGroup').get('confirmPassword'); }

}
