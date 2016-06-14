function SingleWorkoutController (WorkoutService, $http, $stateParams) {

  let vm = this;

  initialize();

  function initialize() {
    WorkoutService.getSingleWorkout($stateParams.workoutId).then( (res) => {
      console.log(res.data);
      vm.detailedWorkout = res.data;
    });
  }

}
SingleWorkoutController.$inject = ['WorkoutService', '$http', '$stateParams'];
export { SingleWorkoutController };
