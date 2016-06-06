function WorkoutService ($state) {

  this.exercisePage = exercisePage;
  this.add = add;

  function add (workout) {

  }

  function exercisePage () {
    $state.go('root.exercise')
  }

}

WorkoutService.$inject = ['$state'];
export { WorkoutService };
