import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { collectionReducer } from './state/collection/collecton.reducer';
import { AppState } from './state/app.state';
import { movieReducer } from './state/movie/movie.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './state/movie/movie.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot<AppState>({
      collection: collectionReducer,
      movies: movieReducer,
    }),
    EffectsModule.forRoot([MovieEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
