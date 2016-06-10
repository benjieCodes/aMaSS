import angular from 'angular';

import 'checklist-model';

import { AddWorkoutController } from './controllers/add-workout.controller';
import { WorkoutController } from './controllers/workout.controller';
import { WorkoutService } from './services/workout.service';

angular
  .module('app.workout', ['checklist-model'])
  .controller('AddWorkoutController', AddWorkoutController)
  .controller('WorkoutController', WorkoutController)
  .service('WorkoutService', WorkoutService)

;
