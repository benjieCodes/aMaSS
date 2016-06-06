import angular from 'angular';

import './app.core/index'
import './app.user/index';
import './app.workout/index';

angular
  .module('app', ['app.core', 'app.user', 'app.workout'])
;
