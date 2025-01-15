import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareMovies(movies, query) {
  if (query) {
    return movies.filter(
      movie =>
        movie.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        movie.description.toLowerCase().includes(query.trim().toLowerCase()),
    );
  }

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const movies = prepareMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
