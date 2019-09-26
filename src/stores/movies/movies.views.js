export const movieStoreViews = self => ({
  get allMovies() {
    return self.movies;
  },
  movieDetail() {
    return self.movie;
  }
});
