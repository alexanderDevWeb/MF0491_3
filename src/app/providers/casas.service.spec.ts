import { TestBed, inject } from '@angular/core/testing';

import { CasasService } from './casas.service';

describe('CasasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CasasService]
    });
  });

  it('should be created', inject([CasasService], (service: CasasService) => {
    expect(service).toBeTruthy();
  }));
});
