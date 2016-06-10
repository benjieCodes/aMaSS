function WorkoutController (WorkoutService, $state) {

  let vm = this;

  vm.goToAddWorkoutPage = goToAddWorkoutPage;

  initialize()

  function goToAddWorkoutPage () {
    $state.go('root.add-workout')
  }

  function initialize() {
    WorkoutService.getUserWorkouts().then( (res) => {
      console.log(res);
      vm.myWorkouts = res.data.data;
    });
  }

}

WorkoutController.$inject = ['WorkoutService' , '$state'];
export { WorkoutController };
