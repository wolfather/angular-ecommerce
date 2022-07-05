import { TestBed } from '@angular/core/testing';

import { ProductPricingService } from './product-pricing.service';

describe('ProductPricingService', () => {
  let service: ProductPricingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPricingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getProductPrice()', () => {
    const result = service.getProductPrice();

    expect(result).toContain('R$')
    expect(result).toContain(',')
  })
});
