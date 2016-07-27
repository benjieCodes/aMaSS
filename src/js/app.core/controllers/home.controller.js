function HomeController (WorkoutService, ExerciseService) {

  let vm = this;

  initialize()

  function initialize() {
    WorkoutService.getUserWorkouts().then( (res) => {
      vm.myWorkout = res.data.data;
    });
    ExerciseService.getAllExercises().then( (res) => {
    })
  }
}

HomeController.$inject = ['WorkoutService', 'ExerciseService'];
export { HomeController };
