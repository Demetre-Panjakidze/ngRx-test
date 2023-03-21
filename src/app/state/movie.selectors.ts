import { createFeatureSelector } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { MoviesState } from './app.state';

export const selectMovies = createFeatureSelector<MoviesState>('movies');
