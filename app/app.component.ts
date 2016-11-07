import { Component } from '@angular/core';
import {GithubApi} from './api/github.api';

@Component({
    selector: 'my-app',
    template: `<profile></profile>`,
    providers: [GithubApi]
})
export class AppComponent { }
