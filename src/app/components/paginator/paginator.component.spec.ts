import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.pagesNumber = [1, 2, 3, 4, 5];
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assert the currentPage prop is 0 by default', () => {
    expect(component.currentPage).toEqual(0);
  })

  it('should test setPagination setting the currentPage property', () => {
    const result = component.setPagination(2);

    expect(component.currentPage).toEqual(2);
  })
  
  it('should test setPagination setting the currentPage property', () => {
    const emittedValue = 12;
    const setPageSpy = spyOn(component.setPage, 'emit');

    component.setPagination(emittedValue);

    expect(setPageSpy).toHaveBeenCalledWith(emittedValue);
    expect(setPageSpy).toHaveBeenCalledTimes(1);
  })

  it('should test trackByLoop returning a number', () => {
    const result = component.trackByLoop(1, 10);

    expect(result).toEqual(10);
  })
});
