import { AppErrorHandler } from './../common/app-error-handler';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import {Post } from '../Post';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {

  }

  ngOnInit() {
    this.postService.getConfig()
      .subscribe(posts => this.posts = (posts as Post[]));
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    this.posts.splice(0, 0, post as Post);

    input.value = '';

    this.postService.postConfig(post)
      .subscribe(
        response => {
          post.id = (response as Post).id;
        },
        (error: AppErrorHandler) => {
          this.posts.splice(0, 1);
        });
  }

  updatePost(input) {
    this.postService.putConfig(input)
      .subscribe( response => {
        console.log(response);
      });
  }

  deletePost(input) {
    const index = this.posts.indexOf(input);
    this.posts.splice(index, 1);

    this.postService.deleteConfig(input.id)
      .subscribe( response => {

      },
       (error: AppError) => {
          this.posts.splice(index, 0, input);
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted');
          } else {
            throw error;
          }
      });
  }

}
