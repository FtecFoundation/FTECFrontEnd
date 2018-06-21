import {Component, Input, OnInit} from '@angular/core';
import {ShowModalService} from '../../not-active/show-modal.service';
import {SocialService} from '../../../core/services/social.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmbeddedTweetOptions} from './embedded-tweet-options';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['../insertions.scss', './social.component.scss']
})
export class SocialComponent implements OnInit {

    dictionary: string[];
    socialForm: FormGroup;
    submitted = false;
    wordExists = true;
    recommendedWords: string[] = ['hardfork', 'list', 'fork', 'partner', 'core', 'update', 'pump', 'burn', 'delist'];
    @Input() tweetIds: string[] = ['1009714790476832768', '1009714045237235712'];
    @Input() options: EmbeddedTweetOptions = new EmbeddedTweetOptions();

    constructor(private _showModalService: ShowModalService,
                private _socialService: SocialService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this._socialService.getDictionary().subscribe(data => {
            this.dictionary = data;
        });
        this.createForm();
    }

    createForm() {
        this.socialForm = this.formBuilder.group({
            word: ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    showModal() {
        this._showModalService.showModal = true;
    }

    deleteWord(word: string) {
        this._socialService.deleteWord({'word': word}).subscribe(() => {
            this.dictionary = this.dictionary.filter(wordInDict => wordInDict !== word);
        });
    }

    addWord() {
        this.submitted = true;
        this.wordExists = false;
        if (this.socialForm.valid && (this.dictionary && this.dictionary.indexOf(this.word.value) === -1)) {
            this._socialService.addWord(this.socialForm.value).subscribe(() => {
                this.dictionary.push(this.word.value);
            });
        } else if (this.dictionary.indexOf(this.word.value) !== -1) {
            this.wordExists = true;
        }
    }

    addRecommendedWord(word: string) {
        this.wordExists = false;
        if (this.dictionary && this.dictionary.indexOf(word) === -1) {
            this._socialService.addWord({'word': word}).subscribe(() => {
                this.dictionary.push(word);
            });
        } else {
            this.wordExists = true;
        }
    }

    renewSubscription() {
        this._socialService.renewSubscription().subscribe(() => {

        });
    }

    get word() { return this.socialForm.get('word'); }

}
