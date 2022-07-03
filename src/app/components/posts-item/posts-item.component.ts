import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../entities/post.interface';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss']
})
export class PostsItemComponent implements OnInit {
  @Input() post!: Post;

  constructor() {
  }
  
  ngOnInit(): void {
    console.log('post item');
  }

}
