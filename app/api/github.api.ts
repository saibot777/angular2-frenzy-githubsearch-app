import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubApi {
  private username:string;
  private client_id = '4285ae9f1473eaf9ff38';
  private client_secret = '5df512a5be9256c87294e6e6764022e92ee18d59';

  constructor (private _http: Http) {
    console.log('Github API ready...');
    this.username = 'saibot777';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/'
    +this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
  }
  getRepos() {
    return this._http.get('http://api.github.com/users/'
    +this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
  }

  updateUser(username:string) {
    this.username = username;
  }
}
