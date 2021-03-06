import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AccountService} from '../../core/services/account.service';
import {RegistrationValidators} from './registration.validators';
import {RegistrationData} from '../../core/models/user';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguageService} from '../../core/services/language.service';
import {CaptchaService} from '../../core/services/captcha.service';

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
    refId: number = 0;

    constructor(private _accountService: AccountService,
                private formBuilder: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private _languageService: LanguageService,
                private cdr: ChangeDetectorRef,
                private _captchaService: CaptchaService) {
    }

    ngOnInit() {
        const referrer = this.activatedRoute.snapshot.paramMap.get('refId');
        referrer ? this.refId = Number.parseInt(referrer) : 0;

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
        this.registrationForm = new FormGroup(this.registrationForm.controls, {updateOn: 'blur'});
    }

    submitForm(captchaResponse: string, captcha: any) {
        this.submitted = true;
        this._captchaService.submitCaptcha({'g-recaptcha-response': captchaResponse}).subscribe(data => {

            if (this.registrationForm.valid && data.responseCode === 0) {

                this._accountService.registerUser(this.prepareData()).subscribe(() => {
                    this.router.navigate(['/modules']);
                });

            }
            captcha.reset();
        });
    }

    prepareData(): RegistrationData {
        return new RegistrationData().deserialize(this.registrationForm.value, this._languageService.currentLanguage, this.refId);
    }

    toggleCheckbox(field: AbstractControl) {
        field.value === true ? field.setValue(false) : field.setValue(true);
    }

    get username() {
        return this.registrationForm.get('username');
    }

    get email() {
        return this.registrationForm.get('email');
    }

    get terms() {
        return this.registrationForm.get('terms');
    }

    get password() {
        return this.registrationForm.get('passwordGroup').get('password');
    }

    get passwordGroup() {
        return this.registrationForm.get('passwordGroup');
    }

    get confirmPassword() {
        return this.registrationForm.get('passwordGroup').get('confirmPassword');
    }

    get subscribeForEmail() {
        return this.registrationForm.get('subscribeForEmail');
    }
}
