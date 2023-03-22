import { TestBed } from '@angular/core/testing';

import { CampainDataService } from './campain-data.service';

describe('CampainDataService', () => {
  let service: CampainDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampainDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
