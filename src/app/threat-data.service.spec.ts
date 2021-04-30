import { TestBed, inject } from '@angular/core/testing';

import { ThreatDataService } from './threat-data.service';

describe('ThreatDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreatDataService]
    });
  });

  it('should be created', inject([ThreatDataService], (service: ThreatDataService) => {
    expect(service).toBeTruthy();
  }));
});
