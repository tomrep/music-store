import React from 'react';

import PropTypes from 'prop-types';
import MovieDetail from '../components/movie/MovieDetail';

const MovieDetailPage = ({ match }) => {
  return (
    <div>
      <MovieDetail id={match.params.id} />
    </div>
  );
};

MovieDetailPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default MovieDetailPage;
