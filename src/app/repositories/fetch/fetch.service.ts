import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from 'src/app/entities/post.interface';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { ProductPricingService } from 'src/app/services/product-pricing/product-pricing.service';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private readonly url = 'https://jsonplaceholder.typicode.com';
  
  constructor(
    private readonly http: HttpClient,
    private readonly pagination: PaginationService,
    private readonly pricing: ProductPricingService,
  ) {
    this.pagination.setParams();
  }

  getPosts(page: number): Observable<Post[]> {
    this.pagination.setParams(page);

    const params = this.pagination.getHttpParams();

    return this.http.get<Post[]>(`${this.url}/posts`, { params })
      .pipe(map((products: Post[]) => (
        products.map(product => (
          {...product, price: this.pricing.getProductPrice(product)}
        ))
      )));
  }
}
