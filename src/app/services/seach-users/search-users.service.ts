import { Injectable } from '@angular/core';
import { ConnectService } from '../connect/connect.service';
import { map, catchError } from 'rxjs/operators'
import { User, SearchResponse } from 'src/app/types/users-types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchUsersService {

  public apiRoot = `https://api.github.com`;
  public headers = new HttpHeaders();
  private token = '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';

  constructor(public http: HttpClient) { }

  public setHeaders(){
    this.headers = this.headers.set('Accept', 'application/vnd.github.v3+json');
    this.headers = this.headers.set('Authorization', `token ${this.token}`);
  }

  users:User[];

  searchUsers(seachQuery:string): Observable<User[]> {
    console.log("searching users:", seachQuery);

    this.setHeaders();
    let apiURL = `${this.apiRoot}/search/users?q=${seachQuery}`;

    return this.http
    .get(apiURL, {headers: this.headers})
    .pipe(
      map((res: any) => {
        return res.items.map(item =>{
          return new User(item.login, item.avatar_url);
        })
      })
    )    
  }
}
