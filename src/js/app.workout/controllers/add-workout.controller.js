function AddWorkoutController (WorkoutService) {

  let vm = this;

  vm.addWorkout = addWorkout;

  function addWorkout (workout) {
    WorkoutService.add(workout);
  }

}

AddWorkoutController.$inject = ['WorkoutService'];
export { AddWorkoutController };
