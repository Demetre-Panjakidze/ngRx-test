import { createReducer, on } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { MoviesState } from './app.state';
import { loadMoviesFail, loadMoviesSuccess } from './movie.action';

const initialState: MoviesState = {
  list: [],
  errorMessage: '',
}; //initial state

export const movieReducer = createReducer(
  initialState,
  on(loadMoviesSuccess, (_, { movies }) => ({ list: movies })),
  on(loadMoviesFail, (_) => ({ list: [], errorMessage: 'An error accurred!' }))
);
