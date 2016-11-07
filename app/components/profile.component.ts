import { Component } from '@angular/core';
import {GithubApi} from '../api/github.api';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: `profile.component.html`
})
export class ProfileComponent {
  user:any[];
  repos:any[];

  constructor (private _githubApi: GithubApi) {
    this._githubApi.getUser().subscribe(user => {
      this.user = user;
    });

    this._githubApi.getRepos().subscribe(repos => {
      this.repos = repos;
    });


  }
}
