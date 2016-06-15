function SingleWorkoutController (WorkoutService, ExerciseService, $http, $stateParams) {

  let vm = this;


  initialize();

  function initialize() {
    WorkoutService.getSingleWorkout($stateParams.workoutId).then( (res) => {
      console.log(res.data);
      vm.detailedWorkout = res.data;
    });
  }

}
SingleWorkoutController.$inject = ['WorkoutService', 'ExerciseService', '$http', '$stateParams'];
export { SingleWorkoutController };
