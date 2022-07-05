import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../../entities/post.interface";
import { FetchService } from "src/app/repositories/fetch/fetch.service";
import { PaginationService } from "src/app/services/pagination/pagination.service";

@Component({
    selector: 'app-product',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class Product implements OnInit {
    public products$ !: Observable<Post[]>;
    public pagesNumber: number[] = [];

    constructor(
        private readonly fetch: FetchService,
        private readonly pagination: PaginationService,
    ) {}
    
    ngOnInit(): void {
        this.fetchData();
        this.pagesNumber = this.pagination.createPaginator();
    }
    
    public changePage(page: number): void {
        this.fetchData(page);
    }

    protected fetchData(page = 0): void {
        this.products$ = this.fetch.getPosts(page);
    }
}