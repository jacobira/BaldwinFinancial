import { TestBed, inject } from '@angular/core/testing';

import { LabelsService } from './labels.service';

describe('LabelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabelsService]
    });
  });

  it('should be created', inject([LabelsService], (service: LabelsService) => {
    expect(service).toBeTruthy();
  }));
});
