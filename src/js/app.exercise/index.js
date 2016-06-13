import angular from 'angular';

// Controllers
import { ExerciseController } from './controllers/exercise.controller';
import { AddExerciseController } from './controllers/add-exercise.controller';
import { SingleExerciseController } from './controllers/single-exercise.controller';

// Service
import { ExerciseService } from './services/exercise.service';

angular
  .module('app.exercise', [])
  .controller('ExerciseController', ExerciseController)
  .controller('AddExerciseController', AddExerciseController)
  .controller('SingleExerciseController', SingleExerciseController)
  .service('ExerciseService', ExerciseService)
;
