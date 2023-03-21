import { createActionGroup, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

// export const addToCollection = createAction(
//   '[Collection] Add to collection',
//   props<{ movie: Movie }>()
// );

// export const removeFromCollection = createAction(
//   '[Collection] Removing from collection',
//   props<{ movieId: string }>()
// );

export const CollectionActions = createActionGroup({
  source: 'Collection',
  events: {
    'Add To Collection': props<{ movie: Movie }>(),
    'Remove From Collection': props<{ movieId: string }>(),
  },
});
