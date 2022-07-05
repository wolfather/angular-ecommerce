import { HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";

export abstract class PaginationAbs {
    constructor() { }
  
    protected setParams(): void{}
    
    protected getHttpParams(): void {}
  
    protected createPaginator(): void {}
}
  