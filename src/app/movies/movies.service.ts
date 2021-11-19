import { Injectable } from "@angular/core";
import { Movie } from "./movie.model";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public movies: Movie[] = [
    { id: 1, title: 'A new hope'},
    { id: 2, title: 'The empire strikes back'},
    { id: 3, title: 'Return of the Jedi'},
  ];
}
