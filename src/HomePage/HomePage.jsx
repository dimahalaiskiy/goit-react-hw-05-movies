import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getTrending } from '../services/videoAPI';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const fetchVideos = async (videoApi, setState) => {
      setState(await videoApi());
    };

    fetchVideos(getTrending, setTrendingFilms);
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trendingFilms.map((el) => {
          return (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`} state={location.pathname}>
                {el.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
