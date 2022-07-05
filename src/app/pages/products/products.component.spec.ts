import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";
import { ListPostsComponent } from "src/app/components/list-posts/list-posts.component";
import { PaginatorComponent } from "src/app/components/paginator/paginator.component";
import { IncrementValuePipe } from "src/app/pipes/incrementvalue/increment-value.pipe";
import { FetchService } from "src/app/repositories/fetch/fetch.service";
import { PaginationAbs } from "src/app/services/pagination/pagination.abs";
import { PaginationService } from "src/app/services/pagination/pagination.service";
import { Product } from "./products.component";

class PaginationStub extends PaginationAbs {
    constructor() {
        super();
    }
    override setParams(start = 0): Observable<any> { return of({})}
    override getHttpParams(): void {}
    override createPaginator(): void { }
}
class FetchStub {
    getPosts(): any {}
}

describe('Products', () => {
    let paginationServiceSpy: jasmine.SpyObj<PaginationService>;
    let fetchDataSpy: jasmine.SpyObj<FetchService>;

    let component: Product;

    beforeEach(async () => {
        paginationServiceSpy = jasmine.createSpyObj('PaginationService', ['createPaginator', 'setParams', 'getHttpParams']);
        fetchDataSpy = jasmine.createSpyObj('FetchService', ['getPosts']);

        component = new Product(fetchDataSpy, paginationServiceSpy);
    });

    it('should be defined', () => {
        expect(component).toBeTruthy();
    })

    it('should test ngOnInit()', () => {
        component.ngOnInit();

        expect(paginationServiceSpy.createPaginator).toHaveBeenCalledTimes(1);
    })

    it('should test changePage()', () => {
        component.changePage(2);

        expect(paginationServiceSpy.setParams).toHaveBeenCalledOnceWith(2);
    })
})