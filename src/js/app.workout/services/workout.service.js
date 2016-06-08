function WorkoutService ($http, serverConstant, $cookies) {

  this.add = add;
  this.getWorkout = getWorkout;

  function add (workout) {
    let user = $cookies.getObject('user');
    workout.id = user.id;

    $http.post(serverConstant.crudURL + '/workouts', workout)
  }

  function getWorkout () {
    let user = $cookies.getObject('user');
    return $http.get(serverConstant.crudURL + '/users/' + user.id + '/workouts');
  }

}

WorkoutService.$inject = ['$http', 'serverConstant', '$cookies'];
export { WorkoutService };
