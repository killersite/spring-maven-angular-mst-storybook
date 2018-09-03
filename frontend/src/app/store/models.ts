import { flow, getEnv, getParent, types } from 'mobx-state-tree';
import { environment } from '../../environments/environment';
import { reaction } from 'mobx';

export const Post = types
  .model('Post', {
    id: types.number,
    title: types.optional(types.string, ''),
    author: types.optional(types.string, '')
  })
  .actions(self => ({
    remove() {
      console.log('removing post');
      (getParent(self, 2) as IStore).remove(self as IPost);
    }
  }));

export type IPost = typeof Post.Type;

export const Store = types
  .model('Store', {
    posts: types.optional(types.array(Post), []),
    counter: types.number,
    loading: types.optional(types.boolean, false)
  })
  .actions(self => ({
    afterCreate: flow(function*() {
      // load store with fake data in DEV
      if (!environment.production) {
        self.loading = true;
        try {
          self.posts = yield getEnv(self)
            .dataService.getPosts()
            .toPromise();
        } finally {
          self.loading = false;
        }
      }

      // // show loading bar
      // reaction(
      //   () => self.loading,
      //   isLoading => {
      //     if (isLoading) {
      //       getEnv(self).loadingBarService.start();
      //     } else {
      //       getEnv(self).loadingBarService.complete();
      //     }
      //   }
      // );
    }),
    increment() {
      self.counter++;
    },
    decrement() {
      self.counter--;
    },
    remove: flow(function* addPost(post: IPost) {
      try {
        self.loading = true;
        const data = yield getEnv(self)
          .dataService.deletePost(post.id)
          .toPromise();
        self.posts.splice(self.posts.indexOf(post), 1);
      } catch (e) {
        // getEnv(self).toastService.error({
        //   title: e.name,
        //   msg: e.message
        // });
      } finally {
        self.loading = false;
      }
    }),
    add: flow(function* addPost(post: IPost) {
      self.loading = true;
      try {
        const data = yield getEnv(self)
          .dataService.addPost(post)
          .toPromise();
        self.posts.push(data);
      } catch (e) {
        // getEnv(self).toastService.error({
        //   title: e.name,
        //   msg: e.message
        // });
      } finally {
        self.loading = false;
      }
    })
  }));

export type IStore = typeof Store.Type;
