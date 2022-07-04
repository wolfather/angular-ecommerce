import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FetchService } from './repositories/fetch/fetch.service';
import { PostsItemComponent } from './components/posts-item/posts-item.component';
import { PaginationService } from './services/pagination/pagination.service';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { IncrementValuePipe } from './pipes/incrementvalue/increment-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsItemComponent,
    PaginatorComponent,
    ListPostsComponent,
    IncrementValuePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    FetchService,
    PaginationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
