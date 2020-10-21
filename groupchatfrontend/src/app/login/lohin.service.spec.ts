import { TestBed } from '@angular/core/testing';

import { LohinService } from './lohin.service';

describe('LohinService', () => {
  let service: LohinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LohinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
