import { IPost } from './../store/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<IPost[]>('/api/posts');
  }

  addPost(post: IPost) {
    return this.http.post('/api/posts', post);
  }

  deletePost(postId: number) {
    return this.http.delete(`/api/posts/${postId}`);
  }
}
