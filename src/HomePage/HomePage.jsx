import React from 'react';
import PropTypes from 'prop-types';

const HomePage = ({ trendingFilms }) => {
	return (
		<>
			<h2>Trending today</h2>
			<ul>
				{trendingFilms.map((el) => {
					return <li key={el.id}>{el.original_title}</li>;
				})}
			</ul>
		</>
	);
};

HomePage.propTypes = {};

export default HomePage;
