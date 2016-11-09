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
  username:string;

  constructor (private _githubApi: GithubApi) {
    this.user = false;
  }

  searchUser() {
    this._githubApi.updateUser(this.username);

    this._githubApi.getUser().subscribe(user => {
      this.user = user;
    })

    this._githubApi.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }
}
