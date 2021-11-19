import { Route } from '@angular/router';
import { JediComponent } from './jedi/jedi.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { StarwarsMoviesComponent } from './movies/starwars-movies/starwars-movies.component';

export const routes: Route[] = [
  { path: 'jedis', component: JediComponent },
  { path: 'movies', children: [
    { path: '', component: StarwarsMoviesComponent },
    { path: ':id', component: EditMovieComponent },

  ]},
  { path: '', redirectTo: 'jedis', pathMatch: 'full' },
];
