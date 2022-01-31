import { TestBed } from '@angular/core/testing';

import { SortingCallService } from './sorting-call.service';

describe('SortingCallService', () => {
  let service: SortingCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortingCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
