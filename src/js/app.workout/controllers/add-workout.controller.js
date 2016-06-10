function AddWorkoutController (WorkoutService, ExerciseService) {

  let vm = this;

  vm.addWorkout = addWorkout;

  initialize()

  function addWorkout (workout) {
    console.log(workout);
    WorkoutService.add(workout).then( (res) => {
      let workoutId = res.data.__metadata.id;
      workout.exercises.forEach( (exerciseId) => {
        WorkoutService.attachExercise(exerciseId, workoutId);
      });
    });
  }

  function initialize() {
    ExerciseService.getAllExercises().then( (res) => {
      vm.getExerciseLibrary = res.data.data;
    });
  }
}

AddWorkoutController.$inject = ['WorkoutService', 'ExerciseService'];
export { AddWorkoutController };
