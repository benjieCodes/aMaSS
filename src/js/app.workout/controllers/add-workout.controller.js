function AddWorkoutController (WorkoutService, ExerciseService, $state) {

  let vm = this;

  vm.addWorkout = addWorkout;

  function addWorkout (workout) {
    WorkoutService.add(workout).then( (res) => {
      let workoutId = res.data.__metadata.id;
      workout.exercises.forEach( (exerciseId) => {
        WorkoutService.attachExercise(exerciseId, workoutId);
      });
    $state.go('root.home')
    });

  }
}

AddWorkoutController.$inject = ['WorkoutService', 'ExerciseService', '$state'];
export { AddWorkoutController };
