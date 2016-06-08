function ExerciseService () {

  this.addExercisePage = addExercisePage;
  this.add = add;

  function addExercisePage() {
    $state.go('root.add-exercise')
  }

  function add() {
    console.log('added');
  }
}

ExerciseService.$inject = [];
export { ExerciseService };
