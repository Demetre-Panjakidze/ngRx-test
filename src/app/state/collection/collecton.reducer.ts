import { createReducer, on } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { CollectionActions } from './collection.actions';
const initialState: Movie[] = [];

export const collectionReducer = createReducer(
  initialState,
  on(CollectionActions.addToCollection, (state, { movie }) => {
    if (state.includes(movie)) {
      return state;
    }
    return [...state, movie];
  }),
  on(CollectionActions.removeFromCollection, (state, { movieId }) =>
    state.filter((movie) => movie.id !== movieId)
  )
);
