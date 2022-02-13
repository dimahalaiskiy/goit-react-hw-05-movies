import axios from 'axios';

const KEY = '6311d899216a28be1ef88ed4d0fcda78';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: KEY,
	},
});

const getTrending = async () => {
	try {
		const { data } = await api.get('trending/movie/day');
		return data.results;
	} catch (error) {
		throw new Error('Something get wrong', error);
	}
};

const getMovie = async (query) => {
	try {
		const { data } = await api.get('/search/movie', {
			params: {
				query,
			},
		});
		return data;
	} catch (error) {
		throw new Error('Something get wrong', error);
	}
};

const getMovieDescription = async (id) => {
	try {
		const { data } = await api.get(`/movie/${id}`);
		return data;
	} catch (error) {
		throw new Error('Something get wrong', error);
	}
};

const getMovieCredits = async (id) => {
	try {
		const { data } = await api.get(`/movie/${id}/credits`);
		return data;
	} catch (error) {
		throw new Error('Something get wrong', error);
	}
};

const getMovieReviews = async (id) => {
	try {
		const { data } = await api.get(`/movie/${id}/reviews`);
		return data;
	} catch (error) {
		throw new Error('Something get wrong', error);
	}
};

export {
	getTrending,
	getMovie,
	getMovieDescription,
	getMovieCredits,
	getMovieReviews,
};
