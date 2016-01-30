import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS, Http, Request, RequestMethod} from 'angular2/http';

@Injectable()
export class Service {
  constructor(public http: Http) {

  }

  getMovies() {
    return this.http.request(
      new Request({
          method: RequestMethod.Get,
          url: './movies.json',
          search: 'api_key=test'
        })
    ).map((res) => res.json());
  }
}
