export const movieStoreViews = self => ({
  get allMovies() {
    return self.movies;
  },
  get movieDetail() {
    return self.movie;
  },
  get allFavorites() {
    return self.favorites;
  }
});
