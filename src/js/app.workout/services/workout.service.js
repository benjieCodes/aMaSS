function WorkoutService ($state) {

  this.gotoExercisePage = gotoExercisePage;

  function gotoExercisePage () {
    $state.go('root.exercise')
  }

}

WorkoutService.$inject = ['$state'];
export { WorkoutService };
