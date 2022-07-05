import { FetchService } from "src/app/repositories/fetch/fetch.service";
import { PaginationService } from "src/app/services/pagination/pagination.service";
import { Product } from "./products.component";

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
        const fetchSpy = spyOn<any>(component, 'fetchData').and.callThrough();
        component.changePage(2);

        //expect(paginationServiceSpy.setParams).toHaveBeenCalledOnceWith(2);
        expect(fetchSpy).toHaveBeenCalledTimes(1);
    })
})