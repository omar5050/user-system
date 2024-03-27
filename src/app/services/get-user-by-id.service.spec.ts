import { TestBed } from '@angular/core/testing';

import { GetUserByIDService } from './get-user-by-id.service';

describe('GetUserByIDService', () => {
  let service: GetUserByIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserByIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
