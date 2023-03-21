import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from './models/movie.model';
import { AppState } from './state/app.state';
import { CollectionActions } from './state/collection/collection.actions';
import { selectCollection } from './state/collection/collection.selectors';
import { loadMovies } from './state/movie/movie.action';
import { selectMovies } from './state/movie/movie.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  movies$ = this.store.select(selectMovies);
  collection$ = this.store.select(selectCollection);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadMovies.loadMovies());
  }

  addToCollection(movie: Movie) {
    this.store.dispatch(CollectionActions.addToCollection({ movie }));
  }

  removeFromCollection(movieId: string) {
    this.store.dispatch(CollectionActions.removeFromCollection({ movieId }));
  }
}
