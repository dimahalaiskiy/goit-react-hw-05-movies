import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { getMovie } from '../services/videoAPI';

const MoviesPage = () => {
  const KEY_FOR_MOVIES = 'QUERY_MOVIES';
  const QUERY = 'QUERY';
  const nav = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState(JSON.parse(localStorage.getItem(QUERY)));
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem(KEY_FOR_MOVIES))
  );

  const getMovieOnQuery = async (query) => {
    if (!query) return;
    setMovies(await getMovie(query));
    nav(`/movies?query=${query}`, { state: `/movies?query=${query}` });
  };

  useEffect(() => {
    localStorage.setItem(KEY_FOR_MOVIES, JSON.stringify(movies));
    if (movies.length !== 0) {
      localStorage.setItem(QUERY, JSON.stringify(query));
      nav(`/movies?query=${query}`, { state: `/movies?query=${query}` });
    }
  }, [movies]);

  return (
    <div>
      <TextField
        sx={{
          marginTop: '15px',
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        id='outlined-basic'
        label='Search Film'
        variant='outlined'
        size='small'
      />
      <Button
        sx={{
          marginTop: '17px',
        }}
        onClick={() => getMovieOnQuery(query)}
        color='primary'
        variant='contained'>
        Search
      </Button>
      <ul>
        {movies.map((el) => {
          return (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`} state={location.pathname}>
                {el.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MoviesPage.propTypes = {};

export default MoviesPage;
