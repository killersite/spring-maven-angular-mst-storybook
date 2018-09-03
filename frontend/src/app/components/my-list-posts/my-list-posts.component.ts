import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../store/models';

@Component({
  selector: 'app-my-list-posts',
  templateUrl: './my-list-posts.component.html',
  styleUrls: ['./my-list-posts.component.scss']
})
export class MyListPostsComponent implements OnInit {
  @Input()
  counter: number;
  @Input()
  posts: IPost[];

  constructor() {}

  ngOnInit() {}
}
