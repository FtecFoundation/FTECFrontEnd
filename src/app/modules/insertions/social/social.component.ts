import {Component, Input, OnInit} from '@angular/core';
import {ShowModalService} from '../../not-active/show-modal.service';
import {SocialService} from '../../../core/services/social.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmbeddedTweetOptions} from './embedded-tweet-options';
import {Router} from '@angular/router';
import {NotificationService} from '../../account/notification/notification.service';
import {CurrentUserService} from '../../../core/services/current-user.service';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['../insertions.scss', './social.component.scss']
})
export class SocialComponent implements OnInit {

    @Input() tweetIds: string[] = [];
    @Input() options: EmbeddedTweetOptions = new EmbeddedTweetOptions();
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
    daysLeft: any = 0;
    wordsLeft = 50;
    recWordClicked = false;
    howTo: string[] = ['User chooses group of accounts to follow (i.e. exchanges, project pages, pages of field leaders, crypto enthusiasts` pages).',
    'User chooses one of the vocabularies available of creates his own vocabulary (i.e. listing, delisting, hardfork…).',
    'User chooses notifications frequency.',
    'User chooses level of dynamics of signals increase for a certain keyword (at what rate the amount of keyword appearing in the search result increases).',
    'User receive notifications about new publications and makes trading decisions on fundamental basis.'];



    constructor(private _showModalService: ShowModalService,
                private _socialService: SocialService,
                private formBuilder: FormBuilder,
                private router: Router,
                public _currentUserService: CurrentUserService,
                private _notificationService: NotificationService) {
    }

    getTweets() {
        const id = this.tweetIds.pop();
        console.log(id);
        if (this.leftHeight <= this.rightHeight) {
            this.leftTweets.push(id);
        } else {
            this.rightTweets.push(id);
        }
    }

    ngOnInit() {
        this.getDaysLeft();

        this.createForm();
    }

    public updateNotificationStatus(type: string){
        this._currentUserService.notificationSettings[3][type] = !this._currentUserService.notificationSettings[3][type];
        const toChange = this._currentUserService.notificationSettings[3];
        toChange.notificationType=3;
        this._notificationService.updateNotification(toChange).subscribe(data => console.log(data));
    }



    renderTweets() {
        this._socialService.getTweets().subscribe(data => {
            this.tweetIds = data;

            this.getTweets();

            window['social'] = this;
            if (!window['binded_to_twttr']) {
                window['twttr'].ready(function (twttr) {
                    window['binded_to_twttr'] = true;
                    twttr.events.bind('rendered', function (event) {
                        console.log(event);
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
        });
    }

    setWordsLeft() {
        this.wordsLeft = 50 - this.dictionary.length;
    }

    getDaysLeft() {
        this._socialService.getExpirationDate().subscribe(data => {
            const today = new Date().getTime();
            const expirationDate = new Date(data).getTime();
            const difference = expirationDate - today;
            if (difference > 0) {
                this.daysLeft = Math.round(difference / (24 * 60 * 60 * 1000));
            } else {
                this.daysLeft = 0;
            }

            this._socialService.getDictionary().subscribe(data => {
                this.dictionary = data;
                this.wordsLeft = 50 - this.dictionary.length;
                this.getRecommendationsWords();
                this.wordsLeft = 50 - this.dictionary.length;

                this.renderTweets();
            });
        });
    }

    getRecommendationsWords() {
        if (this.dictionary) {
            for (const word of this.dictionary) {
                this.recommendedWords = this.recommendedWords.filter(r => {
                    if (r !== word) {
                        this.addedRecommendedWords.push(r);
                        return true;
                    } else {
                        return false;
                    }
                });
            }
        }
    }

    createForm() {
        this.socialForm = this.formBuilder.group({
            word: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
        });
    }

    showModal() {
        this._showModalService.showModal = true;
    }

    deleteWord(word: string) {
        this._socialService.deleteWord(word).subscribe(data => {
            this.dictionary = this.dictionary.filter(wordInDict => wordInDict !== word);
            this.wordsLeft = data;
            if (this.addedRecommendedWords.indexOf(word) !== -1) {
                this.recommendedWords.push(word);
            }
        });
    }

    addWord() {
        this.submitted = true;
        this.wordExists = false;
        if (this.wordsLeft > 0 && this.socialForm.valid && (this.dictionary && this.dictionary.indexOf(this.word.value) === -1)) {
            this._socialService.addWord(this.socialForm.value).subscribe(data => {
                this.dictionary.push(this.word.value);
                this.wordsLeft = data;
                this.word.setValue('');
                this.getRecommendationsWords();
                this.submitted = false;
            });
        } else if (this.dictionary.indexOf(this.word.value) !== -1) {
            this.wordExists = true;
        }
    }

    deleteAllWords() {
        this._socialService.deleteAllWords().subscribe(data => {
            this.dictionary = [];
            this.wordsLeft = data;
        });
    }

    addRecommendedWord(word: string) {
        this.recWordClicked = true;
        this.wordExists = false;
        if (this.wordsLeft > 0 && this.dictionary && this.dictionary.indexOf(word) === -1) {
            this._socialService.addWord({'word': word}).subscribe(data => {
                this.dictionary.push(word);
                this.wordsLeft = data;
                this.addedRecommendedWords.push(word);
                this.getRecommendationsWords();
            });
        } else {
            this.wordExists = true;
        }
    }

    renewSubscription() {
        this._socialService.renewSubscription().subscribe(() => {
            this.getDaysLeft();
            this.router.navigate(['/modules/social']);
        });
    }

    get word() {
        return this.socialForm.get('word');
    }

}
