function ExerciseService ($state) {

  this.addExercisePage = addExercisePage;

  function addExercisePage() {
    $state.go('root.add-exercise')
  }

}

ExerciseService.$inject = ['$state'];
export { ExerciseService };
