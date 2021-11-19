import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarwarsMoviesComponent } from './starwars-movies/starwars-movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarwarsMoviesComponent,
    EditMovieComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
