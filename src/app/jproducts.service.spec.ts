import { TestBed } from '@angular/core/testing';

import { JproductsService } from './jproducts.service';

describe('JproductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JproductsService = TestBed.get(JproductsService);
    expect(service).toBeTruthy();
  });
});
