function AddWorkoutController (WorkoutService, ExerciseService, $state) {

  let vm = this;

  vm.addWorkout = addWorkout;

  initialize()

  function addWorkout (workout) {
    WorkoutService.add(workout).then( (res) => {
      let workoutId = res.data.__metadata.id;
      workout.exercises.forEach( (exerciseId) => {
        WorkoutService.attachExercise(exerciseId, workoutId);
      });
    $state.go('root.home')
    });

  }

  function initialize() {
    ExerciseService.getAllExercises().then( (res) => {
      vm.getExerciseLibrary = res.data.data;
    });
  }
}

AddWorkoutController.$inject = ['WorkoutService', 'ExerciseService', '$state'];
export { AddWorkoutController };
