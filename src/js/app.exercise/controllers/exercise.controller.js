function ExerciseController (ExerciseService, $state) {

  let vm = this;
  vm.goToAddExercisePage = goToAddExercisePage;

  function goToAddExercisePage() {
    $state.go('root.add-exercise')
  }
  
}

ExerciseController.$inject = ['ExerciseService', '$state'];
export { ExerciseController };
