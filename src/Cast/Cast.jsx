import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../services/videoAPI';
import { List } from './Cast.style';

const Cast = () => {
  const { movieId } = useParams();
  const [{ cast }, setCast] = useState([]);

  useEffect(() => {
    const getInfoCast = async (id) => {
      setCast(await getMovieCredits(id));
    };

    getInfoCast(movieId);
  }, [movieId]);

  return (
    <List>
      {cast &&
        cast?.map((actor) => {
          return (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  width='70px'
                  height='100px'
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={'actor_photo'}></img>
              ) : null}
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          );
        })}
    </List>
  );
};

Cast.propTypes = {};

export default Cast;
