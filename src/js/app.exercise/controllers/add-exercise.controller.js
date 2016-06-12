function AddExerciseController (ExerciseService, $state) {

  let vm = this;
  vm.addExercise = addExercise;

  function addExercise(exercise) {
    ExerciseService.add(exercise);
    $state.go('root.home')
  }
}

AddExerciseController.$inject = ['ExerciseService', '$state'];
export { AddExerciseController };
