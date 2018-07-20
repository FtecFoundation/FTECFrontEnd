import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {RegistrationValidators} from '../registration/registration.validators';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-set-new-password',
    templateUrl: './set-new-password.component.html',
    styleUrls: ['../auth.scss']
})
export class SetNewPasswordComponent implements OnInit {

    restoreForm: FormGroup;
    hash: string;
    submitted = false;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.hash = this.activatedRoute.snapshot.paramMap.get('hash');
            }
        });
    }

    ngOnInit() {
        this.createForm();
        // this.fetchHash();
    }
    //
    // fetchHash() {
    //
    // }

    createForm() {
        this.restoreForm = this.formBuilder.group({
            restoreCode: this.formBuilder.control({value: '', disabled: true},[Validators.required]),
            passwordGroup: this.formBuilder.group({
                password: ['', [Validators.required,  Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$')]],
                confirmPassword: ['', Validators.required]
            }, {validator: RegistrationValidators.checkConfirmedPassword})
        });
        this.restoreForm = new FormGroup(this.restoreForm.controls, { updateOn: 'blur' });
    }

    onSubmit(form: NgForm) {
    }

    get password() {
        // console.log('In password getter');
        return this.restoreForm.get('passwordGroup').get('password');
    }

    get passwordGroup() { return this.restoreForm.get('passwordGroup'); }

    get confirmPassword() { return this.restoreForm.get('passwordGroup').get('confirmPassword'); }
}
