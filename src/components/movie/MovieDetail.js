import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Card, Icon } from 'antd';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

const MovieDetail = ({
  movie,
  id,
  getMovieById,
  isFavorite,
  makeFavorite,
  deleteFavorite
}) => {
  const [favorite, setFavorite] = useState(isFavorite(id));
  useEffect(() => {
    const getMovie = async () => getMovieById(id);
    getMovie();
  });

  const handleClick = async () => {
    if (favorite) {
      await deleteFavorite(id);
      setFavorite(false);
    } else {
      await makeFavorite(movie);
      setFavorite(true);
    }
  };
  const {
    title,
    year,
    rated,
    release,
    runtime,
    genre,
    director,
    writer,
    actors,
    plot,
    language,
    country,
    awards,
    ratings
  } = movie;

  return id ? (
    <Card
      size="small"
      style={{ zIndex: '9000' }}
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {title}
          <Button onClick={handleClick} size="small" type="deafult">
            <Icon theme={favorite ? 'filled' : 'outlined'} type="star" />
          </Button>
        </div>
      }
    >
      <div>
        <p>
          <strong>Year: </strong>
          {year}
        </p>
        <p>
          <strong>Rated: </strong>
          {rated}
        </p>
        <p>
          <strong>Release: </strong>
          {release}
        </p>
        <p>
          <strong>Runtime: </strong>
          {runtime}
        </p>
        <p>
          <strong>Genre: </strong>
          {genre}
        </p>
        <p>
          <strong>Director: </strong>
          {director}
        </p>
        <p>
          <strong>Writer: </strong>
          {writer}
        </p>
        <p>
          <strong>Actors: </strong>
          {actors}
        </p>
        <p>
          <strong>Plot: </strong>
          {plot}
        </p>
        <p>
          <strong>Language: </strong>
          {language}
        </p>
        <p>
          <strong>Country: </strong>
          {country}
        </p>
        <p>
          <strong>Awards: </strong>
          {awards}
        </p>
        <p>
          <strong>Ratings: </strong>
          {ratings.map(rating => (
            <span
              key={`rating-${rating.source}`}
              style={{ marginLeft: '10px' }}
            >
              <strong>{rating.source}: </strong>
              {rating.value}
            </span>
          ))}
        </p>
      </div>
    </Card>
  ) : (
    <p>No movie Found</p>
  );
};

MovieDetail.propTypes = {
  deleteFavorite: PropTypes.func,
  getMovieById: PropTypes.func,
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.func,
  makeFavorite: PropTypes.func,
  movie: PropTypes.object
};

MovieDetail.defaultProps = {
  deleteFavorite: null,
  getMovieById: null,
  isFavorite: null,
  makeFavorite: null,
  movie: {}
};

const mapStoreToProps = ({ movies }) => ({
  movie: movies.movieDetail,
  getMovieById: movies.getMovieById,
  makeFavorite: movies.addFavorite,
  deleteFavorite: movies.deleteFavorite,
  isFavorite: movies.isFavorite
});

export default inject(mapStoreToProps)(observer(MovieDetail));
