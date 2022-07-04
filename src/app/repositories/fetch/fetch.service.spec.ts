import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { ProductPricingService } from 'src/app/services/product-pricing/product-pricing.service';
import { FetchService } from './fetch.service';

import { products } from '../../../stubs/products.stub';
import { of } from 'rxjs';
import { Post } from 'src/app/entities/post.interface';

describe('FetchService', () => {
  let service: FetchService;
  let httpSpy: jasmine.SpyObj<HttpClient>;
  let paginationSpy: jasmine.SpyObj<PaginationService>;
  let pricingSpy: jasmine.SpyObj<ProductPricingService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      ]
    });
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
    paginationSpy = jasmine.createSpyObj('PaginationService', ['setParams', 'getHttpParams']);
    pricingSpy = jasmine.createSpyObj('ProductPricingService', ['getProductPrice']);

    service = new FetchService(httpSpy, paginationSpy, pricingSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getPosts', async () => {
    const params = paginationSpy.getHttpParams();

    httpSpy.get.and.returnValue(of(products))


    service.getPosts(params).subscribe({
      next: (response) => {
        expect(response).not.toEqual(products);
      }
    });
  });
});
