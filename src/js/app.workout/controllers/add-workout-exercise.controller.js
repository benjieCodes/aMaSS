function AddWorkoutExerciseController (WorkoutService, ExerciseService, $stateParams) {

  let vm = this;
  vm.addWorkoutExercise = addWorkoutExercise;

  initialize();

  function initialize () {
    WorkoutService.getSingleWorkout($stateParams.workoutId).then( (res) => {
      vm.singleWorkout = res.data;
    });

    ExerciseService.getAllExercises().then ( (res) => {
      vm.exerciseLibrary = res.data.data;
    });
  }

  function addWorkoutExercise (exercises) {
    WorkoutService.postWorkoutExercise(exercises, $stateParams.workoutId).then( (res) => {
      // $state.go('root.')
    });
  }

}
AddWorkoutExerciseController.$inject = ['WorkoutService', 'ExerciseService', '$stateParams'];
export { AddWorkoutExerciseController };
