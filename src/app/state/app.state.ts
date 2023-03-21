import { Movie } from '../models/movie.model';

export interface AppState {
  movies: MoviesState;
  collection: Movie[];
}

export interface MoviesState {
  list: Movie[];
  errorMessage?: string;
}
