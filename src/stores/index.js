import { types } from 'mobx-state-tree';
import { MovieStore } from './movies/movies.store';

// eslint-disable-next-line import/no-mutable-exports
export let store;

export function createStore() {
  const RootStore = types.model('RootStore', {
    movies: types.optional(MovieStore, {})
  });

  store = RootStore.create();
  return store;
}
