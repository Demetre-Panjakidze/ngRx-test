import { createReducer, on } from '@ngrx/store';
import { MoviesState } from '../app.state';
import { loadMovies } from './movie.action';

const initialState: MoviesState = {
  list: [],
  errorMessage: '',
}; //initial state

export const movieReducer = createReducer(
  initialState,
  on(loadMovies.loadMoviesSuccess, (_, { movies }) => ({ list: movies })),
  on(loadMovies.loadMoviesFail, (_) => ({
    list: [],
    errorMessage: 'An error accurred!',
  }))
);
