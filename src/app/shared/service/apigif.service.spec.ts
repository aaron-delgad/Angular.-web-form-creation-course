import { TestBed } from '@angular/core/testing';

import { APIGIFService } from './apigif.service';

describe('APIGIFService', () => {
  let service: APIGIFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIGIFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
