import angular from 'angular';

import { WorkoutController } from './controllers/workout.controller';

import { WorkoutService } from './services/workout.service';

angular
  .module('app.workout', [])
  .controller('WorkoutController', WorkoutController)
  .service('WorkoutService', WorkoutService)
;
