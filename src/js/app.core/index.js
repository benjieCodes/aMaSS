import angular from 'angular';

import 'angular-ui-router';
import 'angular-cookies';
import './backand/backand.min';

import { config } from './config';

import { NavController} from './controllers/nav.controller';

angular
  .module('app.core', ['ui.router', 'ngCookies', 'backand'])
  .config(config)
  .controller('NavController', NavController)
;
