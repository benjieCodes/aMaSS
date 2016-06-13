function WorkoutController (WorkoutService, $state) {

  let vm = this;

  vm.goToAddWorkoutPage = goToAddWorkoutPage;
  vm.goToExercisePage = goToExercisePage;

  initialize()

  function goToAddWorkoutPage () {
    $state.go('root.add-workout');
  }

  function goToExercisePage() {
    $state.go('root.exercises');
  }

  function initialize() {
    WorkoutService.getUserWorkouts().then( (res) => {
      console.log(res);
      vm.myWorkouts = res.data.data;
    });

  }

}

WorkoutController.$inject = ['WorkoutService', '$state'];
export { WorkoutController };
