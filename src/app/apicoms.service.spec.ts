import { TestBed } from '@angular/core/testing';

import { APIcomsService } from './apicoms.service';

describe('APIcomsService', () => {
  let service: APIcomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIcomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
