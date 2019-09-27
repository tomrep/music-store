export const movieStoreViews = self => ({
  get allMovies() {
    return self.movies;
  },
  get totalCount() {
    return self.moviesCount;
  },
  get movieDetail() {
    return self.movie;
  },
  get allFavorites() {
    return self.favorites;
  },
  isFavorite(id) {
    return self.favorites.some(movie => movie.id === id);
  }
});
