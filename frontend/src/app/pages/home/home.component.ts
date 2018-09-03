import { Component, OnInit } from '@angular/core';
import { StoreService, IStoreService } from '../../store/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'My App';
  public postsStore: IStoreService;

  constructor(private store: StoreService) {
    this.postsStore = store as IStoreService;
  }

  ngOnInit() {}
}
