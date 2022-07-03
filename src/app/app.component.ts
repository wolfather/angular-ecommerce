import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './entities/post.interface';
import { FetchService } from './repositories/fetch/fetch.service';
import { PaginationService } from './services/pagination/pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public products$ !: Observable<Post[]>;
  public pagesNumber: number[] = [];

  constructor(
    private readonly fetch: FetchService,
    private readonly pagination: PaginationService,
  ) {
    this.fetchData();
  }

  ngOnInit(): void {
    this.pagesNumber = this.pagination.createPaginator();
  }
  
  public changePage(page: number): void {
    this.pagination.setParams(page);
    
    this.fetchData();
  }

  private fetchData(): void {
    const paginationParams = this.pagination.getHttpParams();

    this.products$ = this.fetch.getPosts(paginationParams);
  }
}
