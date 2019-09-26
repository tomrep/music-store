import { types } from 'mobx-state-tree';

import { movieStoreActions } from './movies.actions';
import { movieStoreViews } from './movies.views';

const Movie = types.model('Movie', {
  id: types.maybe(types.string)
});

const MovieStore = types
  .model('MovieStore', {
    movies: types.optional(types.array(Movie), []),
    movie: types.optional(Movie, {})
  })
  .actions(movieStoreActions)
  .views(movieStoreViews);

export default MovieStore;
