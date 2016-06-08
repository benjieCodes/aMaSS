function WorkoutController (WorkoutService) {

  let vm = this;

  vm.goToAddWorkoutPage = goToAddWorkoutPage;

  function goToAddWorkoutPage () {
    WorkoutService.addWorkoutPage();
  }

}

WorkoutController.$inject = ['WorkoutService'];
export { WorkoutController };
