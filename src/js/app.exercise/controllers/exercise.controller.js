function ExerciseController (ExerciseService, $state) {

  let vm = this;
  vm.goToAddExercisePage = goToAddExercisePage;

  initialize()

  function goToAddExercisePage() {
    $state.go('root.add-exercise')
  }

  function initialize() {
    ExerciseService.getAllExercises().then( (res) => {
      vm.getExerciseLibrary = res.data.data;
    });
  }

}

ExerciseController.$inject = ['ExerciseService', '$state'];
export { ExerciseController };
