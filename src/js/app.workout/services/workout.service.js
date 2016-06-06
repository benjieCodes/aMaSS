function WorkoutService ($state, $http, serverConstant, $cookies) {

  this.exercisePage = exercisePage;
  this.add = add;

  function add (workout) {
    let user = $cookies.getObject('user');
    workout.id = user.id; // allows signed id to post added workout
  
    $http.post(serverConstant.crudURL + '/workouts', workout)
  }

  function exercisePage () {
    $state.go('root.exercise')
  }

}

WorkoutService.$inject = ['$state', '$http', 'serverConstant', '$cookies'];
export { WorkoutService };
