import { flow } from 'mobx-state-tree';

import { getMoviesByName, getMovieById } from '../../utils/loader.utils';

export const movieStoreActions = self => ({
  getAllMoviesByName: flow(function*(name) {
    console.log('ins action');
    const allMovies = yield getMoviesByName(name);

    self.movies = allMovies.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year
    }));
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
      ratings: movie.ratings.map(rating => ({
        source: rating.Source,
        value: rating.Value
      }))
    };
  }),
  addFavorite: id => {
    const newFavorite = self.movies.find(movie => movie.id === id);
    self.favorites = [...self.favorites, newFavorite];
  },
  deleteFavorite: id => {
    self.favorites = self.favorites.filter(movie => movie.id !== id);
  }
});
