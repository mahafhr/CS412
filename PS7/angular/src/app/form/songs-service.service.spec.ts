import { TestBed } from '@angular/core/testing';

import { SongsServiceService } from './songs-service.service';

describe('SongsServicecService', () => {
  let service: SongsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
