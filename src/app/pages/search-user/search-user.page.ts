import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchUsersService } from 'src/app/services/seach-users/search-users.service';
import { User } from 'src/app/types/users-types';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.page.html',
  styleUrls: ['./search-user.page.scss'],
})
export class SearchUserPage {

  loading: boolean = false;
  usersList:  User[];
  searchInput = '';
  _timeout: any = null;


  constructor(private seachUsersSvc:SearchUsersService, 
    public ngZone: NgZone, private router: Router) { }

  onUserSearchInput(){
    this.loading = true;
    if(this._timeout){ 
      window.clearTimeout(this._timeout);
    }
   
    this._timeout = window.setTimeout(() => {
      this._timeout = null;
      this.ngZone.run(() => {
        if(this.searchInput !== ""){
            this.seachUsersSvc.searchUsers(this.searchInput).subscribe( (data) => {
              this.usersList = data;
              this.loading = false;
            });
        }else{
            this.loading = false;
            this.usersList.length = 0;
        }
      });
    },500);
    
  }

  onUserSelect(userName:string){
    this.searchInput = '';
    this.router.navigate(['/repo-details'], { queryParams: { 'user-name': userName }});
  }  

}
