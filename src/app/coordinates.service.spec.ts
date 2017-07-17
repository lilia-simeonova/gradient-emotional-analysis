import { TestBed, inject } from '@angular/core/testing';

import { CoordinatesService } from './coordinates.service';

describe('CoordinatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoordinatesService]
    });
  });

  it('should be created', inject([CoordinatesService], (service: CoordinatesService) => {
    expect(service).toBeTruthy();
  }));
});
