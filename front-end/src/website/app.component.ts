/*
 * vidiocommerce
 * version 3.0
 * http://www.vidiocommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
// component
import {Component} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Settings, AppSettings} from './app.settings';
// service
import { OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , AfterViewInit {
    loading = false;
    public settings: Settings;

    constructor(public appSettings: AppSettings,
                public router: Router,
                @Inject(PLATFORM_ID) private platformId: Object) {
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (isPlatformBrowser(this.platformId)) {
                    window.scrollTo(0, 0);
                }
            }
        });
    }
}
