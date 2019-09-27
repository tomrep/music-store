import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import SearchInput from '../components/search/Search';
import MoviesTable from '../components/movie/MoviesTable';

const SearchPage = ({ getAllMoviesByName }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movieName, setMovieName] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      if (movieName !== '')
        getAllMoviesByName(movieName.toLowerCase(), currentPage);
    };
    getMovies();
  }, [movieName, currentPage, getAllMoviesByName]);

  const searchMovies = async name => {
    setMovieName(name);
  };
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <SearchInput handleSearch={searchMovies} />
      <MoviesTable
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

SearchPage.propTypes = {
  getAllMoviesByName: PropTypes.func
};

SearchPage.defaultProps = {
  getAllMoviesByName: () => null
};
const mapStoreToProps = ({ movies }) => ({
  getAllMoviesByName: movies.getAllMoviesByName
});

export default inject(mapStoreToProps)(observer(SearchPage));
