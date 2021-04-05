import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { ConnectService } from '../connect/connect.service';
import { Repo } from 'src/app/types/repo-types';
import { User } from 'src/app/types/users-types';

@Injectable({
  providedIn: 'root'
})
export class ReposSearchService {

  constructor(private connectSvc: ConnectService) { }

  getUserRepos(userName: string): Observable<Repo[]>{
    const  endpoint = `/users/${userName}/repos`;

    return this.connectSvc.get(endpoint)
      .pipe(
        map((res: any) => {
          return res.map(item =>{
            return new Repo(item.name, item.description, item.stargazers_count,
               item.open_issues, item.watchers, new User(item.owner.login, item.owner.avatar_url));
          })
        })
      );

  }
}
