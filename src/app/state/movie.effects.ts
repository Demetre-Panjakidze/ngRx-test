import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MovieApiService } from '../services/movie-api.service';
import { loadMoviesSuccess, loadMovies, loadMoviesFail } from './movie.action';

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      switchMap(() =>
        this.apiService.getMovies().pipe(
          map((movies) => loadMoviesSuccess({ movies })),
          catchError(() => of(loadMoviesFail()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: MovieApiService) {}
}
