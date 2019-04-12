import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import {FormsModule} from '@angular/forms';
import { ChatComponent } from './chat/chat.component';

@NgModule({
   declarations: [
      AppComponent,
      BlogPostComponent,
      PostCommentComponent,
      ChatComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
