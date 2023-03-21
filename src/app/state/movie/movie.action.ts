import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Movie } from '../../models/movie.model';

export const loadMovies = createActionGroup({
  source: 'Movies',
  events: {
    'Load Movies': emptyProps(),
    'Load Movies Success': props<{ movies: Movie[] }>(),
    'Load Movies Fail': emptyProps(),
  },
});
