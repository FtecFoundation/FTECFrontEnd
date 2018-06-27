import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AccountService} from '../../core/services/account.service';
import {RegistrationValidators} from './registration.validators';
import {RegistrationData} from '../../core/models/user';
import {Router} from '@angular/router';
import {LanguageService} from '../../core/services/language.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registrastion.component.html',
    styleUrls: ['../auth.scss'],
    providers: [{
        provide: 'https://www.google.com/recaptcha/api.js',
        useValue: 'http://localhost:3000/validate_captcha'
    }]

})
export class RegistrationComponent implements OnInit {

    registrationForm: FormGroup;
    submitted = false;

    constructor(private _accountService: AccountService,
                private formBuilder: FormBuilder,
                private router: Router,
                private _languageService: LanguageService) {
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.registrationForm = this.formBuilder.group({
            username: ['', Validators.required, RegistrationValidators.checkUsernameNotTaken(this._accountService)],
            email: ['', [Validators.required, Validators.email], RegistrationValidators.checkEmailNotTaken(this._accountService)],
            passwordGroup: this.formBuilder.group({
                password: ['', [Validators.required,
                    Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|\'<>.^*()%!_\\-]).{8,}$')]],
                confirmPassword: ['', Validators.required]
            }, {validator: RegistrationValidators.checkConfirmedPassword}),
            terms: [false, Validators.requiredTrue],
            subscribeForEmail: [false]
        });
        this.registrationForm = new FormGroup(this.registrationForm.controls, { updateOn: 'blur' });
    }

    submitForm() {
        this.submitted = true;
        if (this.registrationForm.valid) {
            this._accountService.registerUser(this.prepareData()).subscribe(() => {
                this.router.navigate(['/modules']);
            });
        }
    }

    prepareData(): RegistrationData {
        return new RegistrationData().deserialize(this.registrationForm.value, this._languageService.currentLanguage);
    }

    toggleCheckbox(field: AbstractControl) {
        field.value === true ? field.setValue(false) : field.setValue(true);
        console.log(field.value);
    }

    get username() { return this.registrationForm.get('username'); }

    get email() { return this.registrationForm.get('email'); }

    get terms() { return this.registrationForm.get('terms'); }

    get password() { return this.registrationForm.get('passwordGroup').get('password'); }

    get passwordGroup() { return this.registrationForm.get('passwordGroup'); }

    get confirmPassword() { return this.registrationForm.get('passwordGroup').get('confirmPassword'); }

    get subscribeForEmail() { return this.registrationForm.get('subscribeForEmail'); }
}
