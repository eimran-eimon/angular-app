import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Post} from './post.model';
import {map} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {
  }

  createPost(post: Post) {
    const postData = {title: post.title, content: post.content};
    this.http
      .post<{ name: string }>(
        'https://ng-tutiorial.firebaseio.com/post.json',
        postData,
        {
          observe: 'events' // could be body or data.
        }
      ).subscribe(value => {
          console.log(value);
    }, error => {
        this.error.next(error.message);
    });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.set('print', 'pretty');
    searchParams = searchParams.set('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-tutiorial.firebaseio.com/post.json',
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello'}),
          params: searchParams // multiple
          // for single param
          // params: new HttpParams().set('print', 'pretty')
        }
      )
      .pipe(
        map(responseData => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({...responseData[key], id: key});
            }
          }
          return postArray;
        }));
  }


}
