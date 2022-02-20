import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieReviews } from '../services/videoAPI';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async (id) => {
      setReviews(await getMovieReviews(id));
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <ul>
      {reviews.results &&
        reviews.results?.map((review) => {
          return (
            <li key={review.id}>
              <h4>Authon: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          );
        })}
    </ul>
  );
};

Reviews.propTypes = {};

export default Reviews;
