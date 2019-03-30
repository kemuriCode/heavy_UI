import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
