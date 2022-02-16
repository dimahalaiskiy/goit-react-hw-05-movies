import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { getMovie } from '../services/videoAPI';

const MoviesPage = () => {
  const KEY_FOR_MOVIES = 'QUERY_MOVIES';

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem(KEY_FOR_MOVIES))
  );

  const getMovieOnQuery = async (query) => {
    setMovies(await getMovie(query));
  };

  useEffect(() => {
    localStorage.setItem(KEY_FOR_MOVIES, JSON.stringify(movies));
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
        Submit
      </Button>
      <ul>
        {movies.map((el) => {
          return (
            <li key={el.id}>
              <Link to={el.id}>{el.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MoviesPage.propTypes = {};

export default MoviesPage;
