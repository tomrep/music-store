import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { observer, inject } from 'mobx-react';

import SearchInput from '../components/search/Search';

const SearchPage = ({ allMovies, getAllMoviesByName }) => {
  const searchMovies = async name => {
    console.log('this is hapenning');
    await getAllMoviesByName(name.toLowerCase());
  };

  console.log(allMovies);

  const results = allMovies.map(movie => <Card>{movie.id}</Card>);
  return (
    <div className="container">
      <SearchInput handleSearch={searchMovies} />
      {results}
    </div>
  );
};

SearchPage.propTypes = {
  allMovies: PropTypes.array,
  getAllMoviesByName: PropTypes.func
};

SearchPage.defaultProps = {
  allMovies: [],
  getAllMoviesByName: () => null
};
const mapStoreToProps = movies => {
  console.log(movies);
  return {
    allMovies: movies.allMovies,
    getAllMoviesByName: movies.getAllMoviesByName
  };
};

export default inject(mapStoreToProps)(observer(SearchPage));
