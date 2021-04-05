import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { SearchUsersService } from 'src/app/services/seach-users/search-users.service';

import { SearchUserPage } from './search-user.page';

describe('SearchUserPage', () => {
  let component: SearchUserPage;
  let fixture: ComponentFixture<SearchUserPage>;
  let searchUserSvcSpy: SearchUsersService;
  let routerSpy: Router;

  beforeEach(waitForAsync(() => {

    searchUserSvcSpy = jasmine.createSpyObj('seachUsersSvc', { searchUsers: of()});
    routerSpy = jasmine.createSpyObj('router', {navigate: Promise.resolve()});

    TestBed.configureTestingModule({
      declarations: [ SearchUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot()],
      providers: [
        {provide: SearchUsersService, useValue: searchUserSvcSpy},
        {provide: Router, useValue: routerSpy},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create SearchUserPage', () => {
    expect(component).toBeTruthy();
  });
});
