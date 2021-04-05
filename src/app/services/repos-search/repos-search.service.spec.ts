import { of } from 'rxjs';
import { Repo } from 'src/app/types/repo-types';
import { User } from 'src/app/types/users-types';
import { ConnectService } from '../connect/connect.service';

import { ReposSearchService } from './repos-search.service';

describe('ReposSearchService', () => {
  let service: ReposSearchService;
  let connectServiceSpy: ConnectService;

  let mockData = [
    { 
      name: 'Preeti',
      description: 'Sample repo',
      stargazers_count: 4,
      open_issues: 10,
      watchers: 6,
      owner:{
        login:'preetiw',
        avatar_url: 'sample_url'
      }
    }
  ]

  beforeEach(() => {
    connectServiceSpy = jasmine.createSpyObj('connectSvc', { get: of(), getWithParams: of()});
    service = new ReposSearchService(connectServiceSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve the user repos from API', () =>{
    connectServiceSpy.get = jasmine.createSpy().and.returnValue(of(mockData));
    
    const sampleRepo = new Repo('Preeti', 'Sample repo', 4, 10, 6, new User('preetiw', 'sample_url'));
    const expectedData = [sampleRepo];
    
    let actualData = service.getUserRepos('preetiw');
 
    actualData.subscribe((reposData)=>{
      expect(reposData).toEqual(expectedData)
    })
  })

});
