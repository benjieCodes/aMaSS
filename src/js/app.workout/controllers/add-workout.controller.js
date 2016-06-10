function AddWorkoutController (WorkoutService, ExerciseService) {

  let vm = this;

  vm.addWorkout = addWorkout;
  vm.addExerciseToWorkout = addExerciseToWorkout;

  initialize()

  function addWorkout (workout) {
    console.log(workout);
    WorkoutService.add(workout);
  }

  function initialize() {
    ExerciseService.getAllExercises().then( (res) => {
      vm.getExerciseLibrary = res.data.data;
    });
  }

  function addExerciseToWorkout(exercise) {
    console.log(exercise);
  }
}

AddWorkoutController.$inject = ['WorkoutService', 'ExerciseService'];
export { AddWorkoutController };
