import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { PusherService } from './pusher.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
   declarations: [
      AppComponent,
      BlogPostComponent,
      PostCommentComponent,
      ChatComponent,
      AdminComponent,
      HomeComponent
   ],
   imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
   providers: [PusherService],
   bootstrap: [AppComponent]
})
export class AppModule { }
