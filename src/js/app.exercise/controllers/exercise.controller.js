function ExerciseController (ExerciseService) {

  let vm = this;
  vm.goToAddExercisePage = goToAddExercisePage;

  function goToAddExercisePage() {
    ExerciseService.addExercisePage();
  }
}

ExerciseController.$inject = ['ExerciseService'];
export { ExerciseController };
