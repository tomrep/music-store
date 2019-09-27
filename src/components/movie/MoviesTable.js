import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

import { MOVIE_COLUMNS } from '../../utils/constants';

const MoviesTable = ({ movies, handlePageChange, currentPage, totalCount }) => {
  const movieData = movies.length
    ? movies.map(movie => {
        return {
          key: `movie-${movie.id}`,
          name: <Link to={`/movie/${movie.id}`}>{movie.title}</Link>,
          year: movie.year
        };
      })
    : null;

  const onPageChange = page => handlePageChange(page);

  return movieData ? (
    <Table
      columns={MOVIE_COLUMNS}
      dataSource={movieData}
      pagination={{
        current: currentPage,
        onChange: onPageChange,
        total: totalCount
      }}
    />
  ) : null;
};

MoviesTable.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  movies: PropTypes.array,
  totalCount: PropTypes.number
};

MoviesTable.defaultProps = {
  movies: [],
  totalCount: 0
};

const mapStoreToProps = ({ movies }) => ({
  movies: movies.allMovies,
  totalCount: movies.totalCount
});

export default inject(mapStoreToProps)(observer(MoviesTable));
