import angular from 'angular';

import 'checklist-model';

// Controllers
import { ExerciseController } from './controllers/exercise.controller';
import { AddExerciseController } from './controllers/add-exercise.controller';
import { SingleExerciseController } from './controllers/single-exercise.controller';

// Service
import { ExerciseService } from './services/exercise.service';

angular
  .module('app.exercise', ['checklist-model'])
  .controller('ExerciseController', ExerciseController)
  .controller('AddExerciseController', AddExerciseController)
  .controller('SingleExerciseController', SingleExerciseController)
  .service('ExerciseService', ExerciseService)
;
