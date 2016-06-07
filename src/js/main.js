import angular from 'angular';

import './app.core/index';
import './app.user/index';
import './app.workout/index';
import './app.exercise/index';

angular
  .module('app', ['app.core', 'app.user', 'app.workout', 'app.exercise'])
;
