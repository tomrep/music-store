import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Icon } from 'antd';

const MovieCard = ({
  id,
  title,
  year,
  country,
  runtime,
  favorite,
  handleFavoriteChange
}) => {
  const handleClick = async () => handleFavoriteChange(id);

  return (
    <Card size="small">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`/movie/${id}`}>{title}</Link>
        <Button onClick={handleClick} size="small" type="deafult">
          <Icon theme={favorite ? 'filled' : 'outlined'} type="star" />
        </Button>
      </div>
      <div style={{ display: 'inline-block' }}>
        <p>
          <strong>Year: </strong>
          {year}
        </p>
        <p>
          <strong>Country: </strong>
          {country}
        </p>
        <p>
          <strong>Runtime: </strong>
          {runtime}
        </p>
      </div>
    </Card>
  );
};

MovieCard.propTypes = {
  country: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  handleFavoriteChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default MovieCard;
