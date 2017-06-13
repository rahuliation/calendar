import { TestBed, inject } from '@angular/core/testing';

import { CalanderService } from './calander.service';

describe('CalanderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalanderService]
    });
  });

  it('should be created', inject([CalanderService], (service: CalanderService) => {
    expect(service).toBeTruthy();
  }));
});
