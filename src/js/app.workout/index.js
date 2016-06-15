import angular from 'angular';

import 'checklist-model';

// Controllers
import { AddWorkoutController } from './controllers/add-workout.controller';
import { WorkoutController } from './controllers/workout.controller';
import { SingleWorkoutController } from './controllers/single-workout.controller';
import { AddWorkoutExerciseController } from './controllers/add-workout-exercise.controller';

// Service
import { WorkoutService } from './services/workout.service';

angular
  .module('app.workout', ['checklist-model'])
  .controller('AddWorkoutController', AddWorkoutController)
  .controller('WorkoutController', WorkoutController)
  .controller('SingleWorkoutController', SingleWorkoutController)
  .controller('AddWorkoutExerciseController', AddWorkoutExerciseController)
  .service('WorkoutService', WorkoutService)
;
