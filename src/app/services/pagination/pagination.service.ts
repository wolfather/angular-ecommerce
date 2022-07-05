import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationAbs } from './pagination.abs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService extends PaginationAbs {
  private params: HttpParams = new HttpParams();
  
  constructor() {
    super();
  }

  
  public override setParams(start = 0): Observable<HttpParams> {
    const itemsPerPage = 5;
    const page = start === 0 ? 0 : start * itemsPerPage;

    this.params = this.params.set('_start', page).set('_limit', itemsPerPage);

    const obs = new Observable<HttpParams>(
      observer => observer.next(this.params)
    );

    return obs;
  }
  
  public override getHttpParams(): HttpParams {
    return this.params;
  }

  public override createPaginator(): number[] {
    let pagesNumber: number[] = [];

    for(let i = 0; i < Math.round(100 / 5); i++) {
      pagesNumber.push(i);
    }

    return pagesNumber;
  }

}
