import { TestBed } from '@angular/core/testing';

import { ConsumoApiService } from './consumoapi.service';

describe('ConsumoApiService', () => {
  let service: ConsumoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
