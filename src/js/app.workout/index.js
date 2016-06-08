import angular from 'angular';

import { AddWorkoutController } from './controllers/add-workout.controller';
import { WorkoutController } from './controllers/workout.controller';
import { WorkoutService } from './services/workout.service';

angular
  .module('app.workout', [])
  .controller('AddWorkoutController', AddWorkoutController)
  .controller('WorkoutController', WorkoutController)
  .service('WorkoutService', WorkoutService)

;
