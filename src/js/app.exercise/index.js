import angular from 'angular';

import { ExerciseController } from './controllers/exercise.controller';

import { ExerciseService } from './services/exercise.service';

angular
  .module('app.exercise', [])
  .controller('ExerciseController', ExerciseController)
  .service('ExerciseService', ExerciseService)
;
