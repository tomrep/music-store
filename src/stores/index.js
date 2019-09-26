// import { types } from 'mobx-state-tree';
import MovieStore from './movies/movies.store';

// eslint-disable-next-line import/no-mutable-exports
export let store;

export function createStore() {
  return MovieStore.create();
  // const RootStore = types.model('RootStore', {
  //   movies: MovieStore
  // });

  // store = RootStore.create();
  // return store;
}
