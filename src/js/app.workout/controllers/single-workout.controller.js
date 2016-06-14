function SingleWorkoutController (WorkoutService, $http) {

  let vm = this;

  initialize();

  function initialize() {
    // WorkoutService.getSingleWorkouts().then( (res) => {
    //   console.log(res);
    //   vm.detailedWorkout = res.data.data;
    // });

  }

}
SingleWorkoutController.$inject = ['WorkoutService', '$http'];
export { SingleWorkoutController };
