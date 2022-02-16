import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getMovieDescription } from '../services/videoAPI';
import { List, ListItem, Image } from './MovieDetailsPage.style';

const MovieDetailsPage = () => {
  const SINGLE_MOVIE_KEY = 'SINGLE_MOVIE_KEY';

  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getSingleVideo = async (id) => {
      setMovie(await getMovieDescription(id));
    };

    getSingleVideo(movieId);
    console.log(movie);
  }, [movieId]);

  return (
    <div>
      {movie && (
        <div>
          <List>
            <ListItem>
              <Image src='' alt='image-of-film'></Image>
            </ListItem>
            <ListItem>
              <h3>{movie.original_title}</h3>
              <p></p>
              <h4>Overview</h4>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p></p>
            </ListItem>
          </List>
        </div>
      )}
    </div>
  );
};

MovieDetailsPage.propTypes = {};

export default MovieDetailsPage;
