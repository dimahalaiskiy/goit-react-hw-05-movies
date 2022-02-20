import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  useParams,
  useNavigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { getMovieDescription } from '../services/videoAPI';
import { List, ListItem, Image, Additional } from './MovieDetailsPage.style';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState('');
  const [img, setImg] = useState('');
  const [backLocation, setBackLocation] = useState(null);

  const navigation = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  console.log(location);

  // const { from } = location.state;
  // console.log(from);
  useEffect(() => {
    const getSingleVideo = async (id) => {
      setMovie(await getMovieDescription(id));
    };
    if (location.state !== '') {
      setBackLocation(location.state);
    }

    getSingleVideo(movieId);
  }, [movieId]);

  useEffect(() => {
    if (movie.length === 0) return;
    setImg(movie.poster_path);
  }, [movie]);

  const onGoBack = () => {
    navigation(backLocation);
  };

  return (
    <div>
      {movie && (
        <div>
          <button type='button' onClick={onGoBack}>
            назад
          </button>
          <List>
            <ListItem>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${img}`}
                alt='image-of-film'></Image>
            </ListItem>
            <ListItem>
              <h3>{movie.original_title}</h3>
              <p></p>
              <h4>Overview:</h4>
              <p>{movie.overview}</p>
              <h4>Genres:</h4>
              <List>
                <>
                  {movie.genres?.map((el) => (
                    <ListItem key={el.id}>{el.name}</ListItem>
                  ))}
                </>
              </List>
            </ListItem>
          </List>
        </div>
      )}
      <Additional>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </Additional>
      <Outlet />
    </div>
  );
};

MovieDetailsPage.propTypes = {};

export default MovieDetailsPage;
