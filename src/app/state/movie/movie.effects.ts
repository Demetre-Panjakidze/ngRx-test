import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MovieApiService } from '../../services/movie-api.service';
import { loadMovies } from './movie.action';

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies.loadMovies),
      switchMap(() =>
        this.apiService.getMovies().pipe(
          map((movies) => loadMovies.loadMoviesSuccess({ movies })),
          catchError(() => of(loadMovies.loadMoviesFail()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: MovieApiService) {}
}
