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
});
