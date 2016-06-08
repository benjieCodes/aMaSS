function HomeController (WorkoutService, ExerciseService) {

  let vm = this;

  initialize()

  function initialize() {
    WorkoutService.getWorkout().then( (res) => {
      vm.myWorkout = res.data.data;
    });

    ExerciseService.getExercise().then( (res) => {
      console.log(res);
    })
  }
}

HomeController.$inject = ['WorkoutService', 'ExerciseService'];
export { HomeController };
