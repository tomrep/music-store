import { types } from 'mobx-state-tree';

import { movieStoreActions } from './movies.actions';
import { movieStoreViews } from './movies.views';

const Rating = types.model('Rating', {
  source: types.maybe(types.string),
  value: types.maybe(types.string)
});

const Movie = types.model('Movie', {
  id: types.maybe(types.string),
  title: types.maybe(types.string),
  year: types.maybe(types.string),
  rated: types.maybe(types.string),
  released: types.maybe(types.string),
  runtime: types.maybe(types.string),
  genre: types.maybe(types.string),
  director: types.maybe(types.string),
  writer: types.maybe(types.string),
  actors: types.maybe(types.string),
  plot: types.maybe(types.string),
  language: types.maybe(types.string),
  country: types.maybe(types.string),
  awards: types.maybe(types.string),
  ratings: types.optional(types.array(Rating), [])
});

export const MovieStore = types
  .model('MovieStore', {
    movies: types.optional(types.array(Movie), []),
    moviesCount: types.optional(types.number, 0),
    movie: types.optional(Movie, {}),
    favorites: types.optional(types.array(Movie), [])
  })
  .actions(movieStoreActions)
  .views(movieStoreViews);
