import './App.css';
import React, { useState, useEffect } from 'react';
import { getTrending, getMovie } from './services/videoAPI';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header';
import Searchbar from './SearchBar/SearchBar';

function App() {
	const [trendingFilms, setTrendingFilms] = useState([]);
	const [movie, setMovie] = useState([]);

	const getMovieOnQuery = async (query) => {
		setMovie(await getMovie(query));
	};

	useEffect(() => {
		const fetchVideos = async (videoApi, setState) => {
			setState(await videoApi());
		};

		fetchVideos(getTrending, setTrendingFilms);
	}, []);

	return (
		<>
			<Header />
			<Searchbar getQuery={getMovieOnQuery} />
			<HomePage trendingFilms={trendingFilms} />;
		</>
	);
}

export default App;
