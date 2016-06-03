import angular from 'angular';

import 'angular-ui-router';
import 'angular-cookies';
import './backand/backand.min';

import { config } from './config';

import './app.user/index';

angular
  .module('app.core', ['ui.router', 'ngCookies', 'backand', 'app.user'])
  .config(config)
;
