import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

import { Row, Col } from 'antd';
import MovieCard from '../components/movie/MovieCard';

const FavoritesPage = ({
  movies,
  isFavorite,
  makeFavorite,
  deleteFavorite
}) => {
  const handleFavoriteChange = async id => {
    if (isFavorite(id)) {
      return deleteFavorite(id);
    }
    return makeFavorite(id);
  };
  return (
    <Row gutter={16}>
      {movies.length
        ? movies.map(movie => (
            <Col className="mb-1" key={`movie-col-${movie.id}`} xl={6}>
              <MovieCard
                country={movie.country}
                favorite={isFavorite(movie.id)}
                handleFavoriteChange={handleFavoriteChange}
                id={movie.id}
                runtime={movie.runtime}
                title={movie.title}
                year={movie.year}
              />
            </Col>
          ))
        : null}
    </Row>
  );
};

FavoritesPage.propTypes = {
  deleteFavorite: PropTypes.func,
  isFavorite: PropTypes.func,
  makeFavorite: PropTypes.func,
  movies: PropTypes.array
};

FavoritesPage.defaultProps = {
  deleteFavorite: null,

  isFavorite: null,
  makeFavorite: null,
  movies: []
};
const mapStoreToProps = ({ movies }) => ({
  movies: movies.allFavorites,
  isFavorite: movies.isFavorite,
  makeFavorite: movies.addFavorite,
  deleteFavorite: movies.deleteFavorite
});

export default inject(mapStoreToProps)(observer(FavoritesPage));
