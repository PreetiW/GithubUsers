import { TestBed } from '@angular/core/testing';

import { ReposSearchService } from './repos-search.service';

describe('ReposSearchService', () => {
  let service: ReposSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
