import { of } from 'rxjs';
import { User } from 'src/app/types/users-types';
import { ConnectService } from '../connect/connect.service';

import { SearchUsersService } from './search-users.service';

describe('SearchUsersService', () => {
  let service: SearchUsersService;
  let connectServiceSpy: ConnectService;

  let mockData = {
    items: [
      {
        login: 'preetiw',
        avatar_url: 'sample_url'
      }
    ]
  }

  beforeEach(() => {
    connectServiceSpy = jasmine.createSpyObj('connectSvc', { get: of(), getWithParams: of()});
    service = new SearchUsersService(connectServiceSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve users from API based on search keyword', ()=>{
    connectServiceSpy.getWithParam = jasmine.createSpy().and.returnValue(of(mockData));
    
    const sampleUser = new User('preetiw', 'sample_url');
    const expectedData = [sampleUser];

    let actualData = service.searchUsers('pree');
    
    actualData.subscribe((userData) =>{
      expect(userData).toEqual(expectedData);
    })
  })

});
