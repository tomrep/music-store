import { flow, getSnapshot } from 'mobx-state-tree';

import { getMoviesByName, getMovieById } from '../../utils/loader.utils';

export const movieStoreActions = self => ({
  getAllMoviesByName: flow(function*(name, page) {
    const allMovies = yield getMoviesByName(name, page);

    self.movies = allMovies.Search.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year
    }));
    self.moviesCount = parseInt(allMovies.totalResults, 10);
  }),
  getMovieById: flow(function*(id) {
    const movie = yield getMovieById(id);
    self.movie = {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      rated: movie.Rated,
      released: movie.Released,
      runtime: movie.Runtime,
      genre: movie.Genre,
      director: movie.Director,
      writer: movie.Writer,
      actors: movie.Actors,
      plot: movie.Plot,
      language: movie.Language,
      country: movie.Country,
      awards: movie.Awards,
      ratings: movie.Ratings.map(rating => ({
        source: rating.Source,
        value: rating.Value
      }))
    };
  }),
  addFavorite: movie => {
    self.favorites = [...self.favorites, getSnapshot(movie)];
  },
  deleteFavorite: id => {
    self.favorites = self.favorites.filter(movie => movie.id !== id);
  }
});
