import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'sw-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent implements OnInit {
  editMovieForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl(''),
  });

  constructor(
    private activeRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    console.log('Create new edit movie component');
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      console.log(params);
      const movie = this.moviesService.movies.find(
        (movie) => parseInt(params.id) === movie.id
      );
      if (movie) {
        this.editMovieForm.setValue(movie);
      }
    });
  }
}
