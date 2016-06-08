function AddWorkoutController (WorkoutService, ExerciseService) {

  let vm = this;

  vm.addWorkout = addWorkout;

  function addWorkout (workout) {
    WorkoutService.add(workout);
  }

  ExerciseService.getAllExercises().then( (res) => {
    console.log(res.data.data);
  })

}

AddWorkoutController.$inject = ['WorkoutService', 'ExerciseService'];
export { AddWorkoutController };
