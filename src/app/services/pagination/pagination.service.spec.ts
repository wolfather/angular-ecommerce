import { TestBed } from '@angular/core/testing';

import { PaginationService } from './pagination.service';

describe('PaginationService', () => {
  let service: PaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test setParams() with default values', async () => {
    service.setParams().subscribe(response => {
      expect(response.keys()).toEqual(['_start', '_limit']);
      expect(response.get('_start')).toEqual('0')
      expect(response.get('_limit')).toEqual('5')
    });
  })

  it('should test setParams() with changed values', async () => {
    service.setParams(2).subscribe(response => {
      expect(response.keys()).toEqual(['_start', '_limit']);
      expect(response.get('_start')).toEqual('10')
      expect(response.get('_limit')).toEqual('5')
    });
  })

  it('should test createPaginator returning a numbers array', () => {
    const result = service.createPaginator();

    expect(result.length).toBeGreaterThan(5);
    expect(result).toContain(1|2|3);
  })
});
