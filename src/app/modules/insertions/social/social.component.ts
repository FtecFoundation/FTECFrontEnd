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

    @Input() tweetIds: string[] = ['1011179887426703360', '1011559832841801729', '1011595431439159296',
     '1011536835544113153', '1009399880006152192', '1011595387080265729'];
    @Input() options: EmbeddedTweetOptions = new EmbeddedTweetOptions();
    preloader = false;
    dictionary: string[];
    socialForm: FormGroup;
    submitted = false;
    wordExists = true;
    recommendedWords: string[] = ['hardfork', 'list', 'fork', 'partner', 'core', 'update', 'pump', 'burn', 'delist'];
    addedRecommendedWords: string[] = [];
    leftHeight = 0;
    rightHeight = 0;
    leftTweets = [];
    rightTweets = [];


    constructor(private _showModalService: ShowModalService,
        private _socialService: SocialService,
        private formBuilder: FormBuilder) {
    }

    ngAfterViewInit() {
        this.getTweets();
        const c = 0;
        window['social'] = this;
        if (!window['binded_to_twttr']) {
            window['twttr'].ready(function (twttr) {
                window['binded_to_twttr'] = true;
                twttr.events.bind('rendered', function (event) {
                    const service = window['social'];
                    if (service.leftTweets.indexOf(event.target.getAttribute('data-tweet-id')) !== -1) {
                        service.leftHeight += event.target.clientHeight;
                    } else {
                        service.rightHeight += event.target.clientHeight;
                    }
                    document.getElementById(event.target.getAttribute('data-tweet-id')).children[0].classList.add('is-active');
                    window['social'].getTweets();

                });
            });
        }
    }

    getTweets() {
        const id = this.tweetIds.pop();
        if (this.leftHeight <= this.rightHeight) {
            this.leftTweets.push(id);
        } else {
            this.rightTweets.push(id);
        }
    }


    ngOnInit() {
        this._socialService.getDictionary().subscribe(data => {
            this.dictionary = data;
            console.log(this.dictionary);
            this.getRecommendationsWords();
        });
        this.createForm();
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
