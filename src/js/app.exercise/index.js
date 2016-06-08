import angular from 'angular';

import { ExerciseController } from './controllers/exercise.controller';
import { AddExerciseController } from './controllers/add-exercise.controller';

import { ExerciseService } from './services/exercise.service';

angular
  .module('app.exercise', [])
  .controller('ExerciseController', ExerciseController)
  .controller('AddExerciseController', AddExerciseController)
  .service('ExerciseService', ExerciseService)
;
