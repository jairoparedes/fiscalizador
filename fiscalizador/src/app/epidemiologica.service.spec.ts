import { TestBed } from '@angular/core/testing';

import { EpidemiologicaService } from './epidemiologica.service';

describe('EpidemiologicaService', () => {
  let service: EpidemiologicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpidemiologicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
