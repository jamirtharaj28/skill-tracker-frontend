import { TestBed } from '@angular/core/testing';

import { MockSearchService } from './mock-search.service';

describe('MockSearchService', () => {
  let service: MockSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
