import { createFeatureSelector } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const selectCollection = createFeatureSelector<Movie[]>('collection');
