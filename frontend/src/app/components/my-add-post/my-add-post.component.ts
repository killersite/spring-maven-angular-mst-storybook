import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IPost } from '../../store/models';

@Component({
  selector: 'app-my-add-post',
  templateUrl: './my-add-post.component.html',
  styleUrls: ['./my-add-post.component.scss']
})
export class MyAddPostComponent {
  @Output()
  postAdded = new EventEmitter<IPost>();

  post = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  addPost() {
    this.postAdded.emit(this.post.value);
    this.post.reset();
  }
}
