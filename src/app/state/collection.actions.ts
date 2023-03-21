import { createActionGroup, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const CollectionActions = createActionGroup({
  source: 'Collection',
  events: {
    'Add To Collection': props<{ movie: Movie }>(),
    'Remove From Collection': props<{ movieId: string }>(),
  },
});
