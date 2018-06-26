import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ShowModalService } from '../../not-active/show-modal.service';
import { SocialService } from '../../../core/services/social.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmbeddedTweetOptions } from './embedded-tweet-options';
import { TwttrService } from 'ngx-twitter/src/app/twitter/twttr.service';
import { el } from '@angular/platform-browser/testing/src/browser_util';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['../insertions.scss', './social.component.scss']
})
export class SocialComponent implements OnInit, AfterViewInit {

    @Input() tweetIds: string[] = ['1009714790476832768', '1009714045237235712', '1010152424680706048', '1010143174382309377',
        '1009722961237069824', '1010069949916876800', '1009921272304885761', '1010150156547784705', '1010148629561081857'];
    @Input() options: EmbeddedTweetOptions = new EmbeddedTweetOptions();
    preloader = false;
    dictionary: string[];
    socialForm: FormGroup;
    submitted = false;
    wordExists = true;
    recommendedWords: string[] = ['hardfork', 'list', 'fork', 'partner', 'core', 'update', 'pump', 'burn', 'delist'];
    addedRecommendedWords: string[] = [];

    constructor(private _showModalService: ShowModalService,
        private _socialService: SocialService,
        private formBuilder: FormBuilder) {
    }

    ngAfterViewInit() {
        window['twttr'].ready(function (twttr) {
            twttr.events.bind('rendered', function (event) {
                let leftHeight = 0;
                let rightHeight = 0;

                const tweets = document.getElementById('tweets').children;

                for (let i = 0; i < tweets.length; i++) {

                    if (leftHeight <= rightHeight) {
                        tweets[i].classList.remove('tweeter--right');
                        tweets[i].classList.add('tweeter--left');
                        leftHeight += tweets[i].clientHeight;
                    } else {
                        tweets[i].classList.remove('tweeter--left');
                        tweets[i].classList.add('tweeter--right');
                        rightHeight += tweets[i].clientHeight;
                    }
                    tweets[i]['style'].opacity = 1;
                }
            });
        });
    }

    ngOnInit() {
        this._socialService.getDictionary().subscribe(data => {
            this.dictionary = data;
            console.log(this.dictionary);
            this.getRecommendationsWords();
        });
        this.createForm();
    }

    getTweets() {

    }

    getRecommendationsWords() {
        if (this.dictionary) {
            for (const word of this.dictionary) {
                this.recommendedWords = this.recommendedWords.filter(r => {
                    if (r !== word) {
                        this.addedRecommendedWords.push(r);
                        return true;
                    } else { return false; }
                });
            }
        }
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
        this._socialService.deleteWord({ 'word': word }).subscribe(() => {
            this.dictionary = this.dictionary.filter(wordInDict => wordInDict !== word);
            if (this.addedRecommendedWords.indexOf(word) !== -1) { this.recommendedWords.push(word); }
        });
    }

    addWord() {
        this.submitted = true;
        this.wordExists = false;
        if (this.socialForm.valid && (this.dictionary && this.dictionary.indexOf(this.word.value) === -1)) {
            this._socialService.addWord(this.socialForm.value).subscribe(() => {
                this.dictionary.push(this.word.value);
                this.getRecommendationsWords();
            });
        } else if (this.dictionary.indexOf(this.word.value) !== -1) {
            this.wordExists = true;
        }
    }

    addRecommendedWord(word: string) {
        this.wordExists = false;
        if (this.dictionary && this.dictionary.indexOf(word) === -1) {
            this._socialService.addWord({ 'word': word }).subscribe(() => {
                this.dictionary.push(word);
                this.addedRecommendedWords.push(word);
                this.getRecommendationsWords();
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
