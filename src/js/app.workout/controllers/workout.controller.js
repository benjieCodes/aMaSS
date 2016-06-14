function WorkoutController (WorkoutService, $state) {

  let vm = this;

  initialize();

  function initialize() {
    WorkoutService.getUserWorkouts().then( (res) => {
      vm.myWorkouts = res.data.data;
    });

  }

}

WorkoutController.$inject = ['WorkoutService', '$state'];
export { WorkoutController };
