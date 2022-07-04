import { Injectable } from '@angular/core';
import { Post } from '../../entities/post.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductPricingService {

  constructor() { }

  getProductPrice(item: Post): string {
    const value = Math.round(Math.random() * 9999).toFixed(2);
    const rawPrice = (parseFloat(value) * 1);
    const price = this.formatCurrency(rawPrice);
    
    return price;
  }

  private formatCurrency(value = 0): string {
    const currencyFormated = new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    }).format(value);

    return currencyFormated;
  }
}
