import { TestBed } from '@angular/core/testing';

import { DistanceCalculateService } from './distance-calculate.service';

describe('DistanceCalculateService', () => {
  let service: DistanceCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistanceCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
