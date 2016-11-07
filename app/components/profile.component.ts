import { Component } from '@angular/core';
import {GithubApi} from '../api/github.api';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: `profile.component.html`
})
export class ProfileComponent {
  constructor (private _githubApi: GithubApi) {
    this._githubApi.getUser().subscribe(user => {
      console.log(user);
    });
  }
}
