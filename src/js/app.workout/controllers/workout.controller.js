function WorkoutController (WorkoutService) {

  let vm = this;

  vm.addWorkout = addWorkout;
  vm.goToExercisePage = goToExercisePage;

  function addWorkout (workout) {
    WorkoutService.add(workout);
  }

  function goToExercisePage () {
    WorkoutService.exercisePage();
  }

}

WorkoutController.$inject = ['WorkoutService'];
export { WorkoutController };
