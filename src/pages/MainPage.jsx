import React, { useState } from 'react'
import api from '../api';
import Favorites from '../components/Favorites';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm'

const MainPage = () => {
  const [movies, setMovies] = useState([]);

  const onSearchHandle = async (e) => {
    e.preventDefault();
    const searchString = new FormData(e.target).get('search');

    try {
      const response = await api.searchMovies(searchString);
      setMovies(response.Search);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <SearchForm onSearch={onSearchHandle} />
          <MovieList movies={movies} />
        </div>
        <div className="col-4">
          <Favorites />
        </div>
      </div>
    </div>
  )
}

export default MainPage