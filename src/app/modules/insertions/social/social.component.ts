import {Component, Input, OnInit} from '@angular/core';
import {ShowModalService} from '../../not-active/show-modal.service';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['../insertions.scss']
})
export class SocialComponent implements OnInit {

    dictionary: string[] = ['hardfork', 'partnership', 'airdrop', 'coinburn'];
    newWord = '';

    constructor(private _showModalService: ShowModalService) {
    }

    ngOnInit() {
    }

    showModal() {
        this._showModalService.showModal = true;
    }

    deleteWord(word: string) {
        this.dictionary = this.dictionary.filter(wordInDict => wordInDict !== word);
    }

    addWord() {
        if (this.dictionary.indexOf(this.newWord) === -1) {
            this.dictionary.push(this.newWord);
        }
    }

}
