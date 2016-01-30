//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {Service} from './service';

bootstrap(App, [
  HTTP_PROVIDERS,
  Service
])
.catch(err => console.error(err));
