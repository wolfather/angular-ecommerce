import { Component, Input } from '@angular/core';
import { Post } from '../../entities/post.interface';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss']
})
export class PostsItemComponent {
  @Input() post!: Post;

  constructor() {
  }
}
