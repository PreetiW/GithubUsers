import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { User } from 'src/app/types/users-types';
import { Observable } from 'rxjs';
import { ConnectService } from '../connect/connect.service';

@Injectable({
  providedIn: 'root'
})
export class SearchUsersService {

  constructor(private connect: ConnectService) { }

  searchUsers(seachQuery:string): Observable<User[]> {
    const  endpoint = '/search/users';
    let queryParams = `?q=${seachQuery}`

    return this.connect.getWithParam(endpoint, queryParams)
      .pipe(
        map((res: any) => {
          return res.items.map(item =>{
            return new User(item.login, item.avatar_url);
          })
        })
      );
  }
}
