import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ConnectService } from './connect.service';

describe('ConnectService', () => {
  let service: ConnectService;
  let httpSpy: HttpClient;

  beforeEach(() => {
      httpSpy = jasmine.createSpyObj('http', ['get']);
      service = new ConnectService(httpSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the headers', () =>{
    service.setHeaders();
    expect(service.headers.get('Accept')).toBe('application/vnd.github.v3+json');
  })

  it('should get the data from api', ()=>{
    httpSpy.get = jasmine.createSpy().and.returnValue(of('abcd'));
    service.get('endpoint').subscribe(
      (response) =>{
        expect(response).toBe('abcd');
      }
    )
  })

  it('should get the data from api for request with query params', ()=>{
    httpSpy.get = jasmine.createSpy().and.returnValue(of('1234'));
    service.getWithParam('endpoint', '?param=1').subscribe(
      (response) =>{
        expect(response).toBe('1234');
      }
    )
  })

});
