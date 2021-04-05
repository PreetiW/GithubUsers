import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { ReposSearchService } from 'src/app/services/repos-search/repos-search.service';

import { RepoDetailsPage } from './repo-details.page';

describe('RepoDetailsPage', () => {
  let component: RepoDetailsPage;
  let fixture: ComponentFixture<RepoDetailsPage>;
  let repoSearchSvcSpy: ReposSearchService;

  beforeEach(waitForAsync(() => {

    repoSearchSvcSpy = jasmine.createSpyObj('repoSearchSvc', { getUserRepos: of()} );

    TestBed.configureTestingModule({
      declarations: [ RepoDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
             queryParams: of({ 'use-name': 'preetiw' })  
          }
        },
        {provide: ReposSearchService, useValue: repoSearchSvcSpy},
       
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RepoDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create RepoDetailsPage', () => {
    expect(component).toBeTruthy();
  });
});
