import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/entities/post.interface';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private readonly url = 'https://jsonplaceholder.typicode.com';
  
  constructor(
    private readonly http: HttpClient,
    private readonly pagination: PaginationService,
  ) {
    this.pagination.setParams();
  }

  getPosts(params: HttpParams): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`, { params });
  }
}
