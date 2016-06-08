function ExerciseController (ExerciseService, $state) {

  let vm = this;
  vm.goToAddExercisePage = goToAddExercisePage;

  function goToAddExercisePage() {
    $state.go('root.add-exercise')
  }

  ExerciseService.getAllExercises().then( (res) => {
    console.log(res.data.data);
  })

}

ExerciseController.$inject = ['ExerciseService', '$state'];
export { ExerciseController };
