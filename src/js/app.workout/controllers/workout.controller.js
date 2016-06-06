function WorkoutController (WorkoutService) {

  let vm = this;

  vm.exercisePage = exercisePage;

  function exercisePage () {
    WorkoutService.gotoExercisePage();
  }

}

WorkoutController.$inject = ['WorkoutService'];
export { WorkoutController };
