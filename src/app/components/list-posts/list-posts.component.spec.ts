import { ComponentFixture, TestBed } from '@angular/core/testing';
import { products } from 'src/stubs/products.stub';

import { ListPostsComponent } from './list-posts.component';

describe('ListPostsComponent', () => {
  let component: ListPostsComponent;
  let fixture: ComponentFixture<ListPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test trackByPostId returning product.title', () => {
    const result = component.trackByPostId(1, products[0]);

    expect(result).not.toBeUndefined();
  });
});
