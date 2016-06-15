function SingleWorkoutController (WorkoutService, ExerciseService, $http, $stateParams) {

  let vm = this;


  initialize();

  function initialize() {
    WorkoutService.getSingleWorkout($stateParams.workoutId).then( (res) => {
      console.log(res.data.exercises);
      vm.detailedWorkout = res.data;
      vm.workoutExercises = res.data.exercises;
    });
  }

}
SingleWorkoutController.$inject = ['WorkoutService', 'ExerciseService', '$http', '$stateParams'];
export { SingleWorkoutController };
