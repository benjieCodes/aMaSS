function AddExerciseController (ExerciseService) {

  let vm = this;
  vm.addExercise = addExercise;

  function addExercise(exercise) {
    ExerciseService.add(exercise);
  }
}

AddExerciseController.$inject = ['ExerciseService'];
export { AddExerciseController };
