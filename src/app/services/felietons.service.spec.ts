import { TestBed } from '@angular/core/testing';

import { FelietonsService } from './felietons.service';

describe('FelietonsService', () => {
  let service: FelietonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FelietonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
