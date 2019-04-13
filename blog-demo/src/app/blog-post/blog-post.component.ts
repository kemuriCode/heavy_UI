import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app-blog-post',
  template: `
    <h1>
    Tytuł
    </h1>
    <h2>
    data dodania
    </h2>
    <span>
    treść
    </span>
    `,
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

=======
import { BlogPost } from './blog-post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  isInEditMode = false;

  post = new BlogPost(
    'New Post',
    new Date(),
    'some content',
    ['comment 1', 'comment 2']
    );

  toggleEditMode(): void {
    this.isInEditMode = !this.isInEditMode;
    }
>>>>>>> deed1138baf961d3061b5df94672ece3786f49eb
  constructor() { }

  ngOnInit() {
  }

}
