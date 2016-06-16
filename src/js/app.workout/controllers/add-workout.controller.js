function AddWorkoutController (WorkoutService, ExerciseService, $state) {

  let vm = this;

  vm.addWorkout = addWorkout;

  function addWorkout (workout) {
    WorkoutService.add(workout).then( (res) => {
    });
  }
}

AddWorkoutController.$inject = ['WorkoutService', 'ExerciseService', '$state'];
export { AddWorkoutController };
