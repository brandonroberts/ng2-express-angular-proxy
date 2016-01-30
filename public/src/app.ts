//our root app component
import {Component} from 'angular2/core';
import {Service} from './service';

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <div *ngFor="#movie of movies | async">
        {{ movie.participant.id }}<br>
        {{ movie.participant.name }}<br>
        {{ movie.participant.seed }}
      </div>
    </div>
  `,
  directives: []
})
export class App {
  constructor(public service: Service) {
    this.name = 'Angular2'
  }

  ngOnInit() {
    this.movies = this.service.getMovies();
  }
}
