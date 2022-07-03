import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/entities/post.interface';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent {
  @Input() products !: Observable<Post[]>;

  constructor() {}

  public trackByPostId(index: number, post: Post): string {
    return post.title;
  }

}
