function AddWorkoutController (WorkoutService, ExerciseService) {

  let vm = this;

  vm.addWorkout = addWorkout;

  initialize()

  function addWorkout (workout) {
    WorkoutService.add(workout);
  }

  function initialize() {
    ExerciseService.getAllExercises().then( (res) => {
      vm.getExerciseLibrary = res.data.data;
    });
  }
}

AddWorkoutController.$inject = ['WorkoutService', 'ExerciseService'];
export { AddWorkoutController };
