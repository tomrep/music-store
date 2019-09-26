import { flow } from 'mobx-state-tree';

import { getMoviesByName, getMovieById } from '../../utils/loader.utils';

export const movieStoreActions = self => ({
  getAllMoviesByName: flow(function*(name) {
    console.log('ins action');
    const allMovies = yield getMoviesByName(name);
    self.byId = allMovies;
  }),
  getMovieById: flow(function*(id) {
    const movie = yield getMovieById(id);
    self.detail = movie;
  })
});
