import { Component, NgZone } from '@angular/core';
import { SearchUsersService } from '../services/seach-users/search-users.service';
import { User } from '../types/users-types';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  loading: boolean = false;
  usersList:  User[];
  searchInput = '';
  _timeout: any = null;

  constructor(private seachUsersSvc:SearchUsersService, public ngZone: NgZone) {}

  onUserSearchInput(){
    this.loading = true;
    if(this._timeout){ 
      window.clearTimeout(this._timeout);
    }
   
    this._timeout = window.setTimeout(() => {
      this._timeout = null;
      this.ngZone.run(() => {
        console.log("Seaching:", this.searchInput);
        if(this.searchInput !== ""){
            this.seachUsersSvc.searchUsers(this.searchInput).subscribe( (data) => {
              this.usersList = data;
              this.loading = false;
              console.log("User List:", this.usersList);
            });
        }else{
            this.loading = false;
            this.usersList.length = 0;
        }
      });
    },1000);
    
  }

}
