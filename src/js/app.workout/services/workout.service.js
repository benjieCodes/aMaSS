function WorkoutService ($state, $http, serverConstant, $cookies) {

  this.add = add;
  this.exercisePage = exercisePage;
  this.getWorkout = getWorkout;

  function add (workout) {
    let user = $cookies.getObject('user');
    workout.id = user.id;

    $http.post(serverConstant.crudURL + '/workouts', workout)
  }

  function exercisePage () {
    $state.go('root.exercise');
  }

  function getWorkout () {
    let user = $cookies.getObject('user');
    return $http.get(serverConstant.crudURL + '/users/' + user.id + '/workouts');
  }

}

WorkoutService.$inject = ['$state', '$http', 'serverConstant', '$cookies'];
export { WorkoutService };
