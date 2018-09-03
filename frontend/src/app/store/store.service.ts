import { Injectable } from '@angular/core';
import makeInspectable from 'mobx-devtools-mst';
import { connectReduxDevtools } from 'mst-middlewares';
import * as _remotedev from 'remotedev';
import { DataService } from './../services/data.service';
import { IStore, Store } from './models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(dataService: DataService) {
    // can be initialized from server or localstorage
    const myStore = Store.create({ posts: [], counter: 0 }, { dataService });

    // use MobX devtools chrome extension
    // if(!environment.production) {
    const store$ = makeInspectable(myStore);

    // use REDUX devtools
    connectReduxDevtools(_remotedev, store$);

    return store$;
  }
}

export type IStoreService = IStore;
