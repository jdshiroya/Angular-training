import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  BASE_URL = 'https://angular-training-64ad4-default-rtdb.firebaseio.com/posts.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post(this.BASE_URL,postData).subscribe(res => console.log(res));
  }

  onFetchPosts() {
    // Send Http request
    this.http.get(this.BASE_URL).subscribe((data) => {
      console.log(data);
      
    });
  }

  onClearPosts() {
    // Send Http request
  }
}
