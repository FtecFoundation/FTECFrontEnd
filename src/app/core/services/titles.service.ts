import {Injectable} from '@angular/core';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

const APP_TITLE = '';
const SEPARATOR = ' | ';
const FTEC_TITLE = 'FTEC - First Trading Ecosystem';

@Injectable()
export class TitlesService {
    currentTitle: string;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
    ) {
    }

    init() {
        this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .map(() => {
                let route = this.activatedRoute;
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            })
            .filter((route) => route.outlet === 'primary')
            .mergeMap((route) => route.data)
            .map((data) => {
                if (data.title) {
                    this.currentTitle = data.title;
                    return data.title + SEPARATOR + FTEC_TITLE;
                } else {
                    return this.router.url.split('/').reduce((acc, frag) => {
                        if (acc && frag) {
                            acc += SEPARATOR;
                        }
                        return acc + this.ucFirst(frag);
                    });
                }
            })
            .subscribe((pathString) => this.titleService.setTitle(`${APP_TITLE} ${pathString}`));
    }

    ucFirst(string) {
        if (!string) {
            return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
