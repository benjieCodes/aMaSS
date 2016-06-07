import angular from 'angular';

import 'angular-ui-router';
import 'angular-cookies';
import './backand/backand.min';

import { config } from './config';
import { run } from './run';

import { NavController} from './controllers/nav.controller';
import { HomeController } from './controllers/home.controller';

import { serverConstant } from './constants/server.constant';

angular
  .module('app.core', ['ui.router', 'ngCookies', 'backand'])
  .config(config)
  .run(run)
  .controller('NavController', NavController)
  .controller('HomeController', HomeController)
  .constant('serverConstant', serverConstant)
;