import { TestBed } from '@angular/core/testing';

import { MatierService } from './matier.service';

describe('MatierService', () => {
  let service: MatierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
