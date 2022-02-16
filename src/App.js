import './App.css';
import React from 'react';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Header from './Header/Header';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='movies' element={<MoviesPage />}></Route>
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='/movies/:movieId/cast' element={<Cast />}></Route>
            <Route
              path='/movies/:movieId/reviews'
              element={<Reviews />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
