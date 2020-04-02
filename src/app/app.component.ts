import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';
import {PostService} from './post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetch = false;
  errorMessage = '';
  errorSub: Subscription;

  constructor(private http: HttpClient,
              private postService: PostService) {
  }

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe((error) => {
      this.errorMessage  = error;
    });
    this.isFetch = true;
    this.postService.fetchPosts().subscribe((response) => {
      this.isFetch = false;
      this.loadedPosts = response;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createPost(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetch = true;
    this.postService.fetchPosts().subscribe((response) => {
      this.isFetch = false;
      this.loadedPosts = response;
    });
  }

  onClearPosts() {
    // Send Http request
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

}
