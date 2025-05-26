import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Post } from './post.model';
import { catchError, map } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  BASE_URL =
    'https://angular-training-64ad4-default-rtdb.firebaseio.com/posts.json';

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http.post<{ name: String }>(this.BASE_URL, postData).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        this.error.next(error.message);
      }
    );
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>(this.BASE_URL).pipe(
      map((responseData) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );
  }

  deletePosts() {
    this.http.delete(this.BASE_URL).subscribe((response) => {
      console.log(response);
    });
  }
}
