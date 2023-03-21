import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Movie } from '../../models/movie.model';

export const CollectionActions = createActionGroup({
  source: 'Collection',
  events: {
    'Add To Collection': props<{ movie: Movie }>(),
    'Remove From Collection': props<{ movieId: string }>(),
    'Load Collection': emptyProps(),
    'Load Collection Success': props<{ movie: Movie[] }>(),
    'Load Collection Error': props<{ errorMessage: string }>(),
  },
});
