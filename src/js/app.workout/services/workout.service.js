function WorkoutService ($http, serverConstant, $cookies, $state) {

  this.add = add;
  this.getUserWorkouts = getUserWorkouts;

  function add (workout) {
    let user = $cookies.getObject('user');
    workout.id = user.id;

    $http.post(serverConstant.crudURL + '/workouts', workout)
    $state.go('root.home')
  }

  function getUserWorkouts() {
    let user = $cookies.getObject('user');
    return $http.get(serverConstant.crudURL + '/users/' + user.id + '/workouts');
  }

}

WorkoutService.$inject = ['$http', 'serverConstant', '$cookies', '$state'];
export { WorkoutService };
