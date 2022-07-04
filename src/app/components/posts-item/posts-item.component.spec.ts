import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post } from 'src/app/entities/post.interface';
import { products } from 'src/stubs/products.stub';

import { PostsItemComponent } from './posts-item.component';

describe('PostsItemComponent', () => {
  let component: PostsItemComponent;
  let fixture: ComponentFixture<PostsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.post = products[0];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
