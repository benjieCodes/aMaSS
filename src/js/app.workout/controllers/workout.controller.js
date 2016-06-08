function WorkoutController (WorkoutService, $state) {

  let vm = this;

  vm.goToAddWorkoutPage = goToAddWorkoutPage;

  function goToAddWorkoutPage () {
    $state.go('root.add-workout')
  }

}

WorkoutController.$inject = ['WorkoutService' , '$state'];
export { WorkoutController };
