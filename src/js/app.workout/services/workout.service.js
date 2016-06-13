function WorkoutService ($http, serverConstant, $cookies) {

  this.add = add;
  this.getUserWorkouts = getUserWorkouts;
  this.attachExercise = attachExercise;

  function add (workout) {
    let user = $cookies.getObject('user');
    workout.user = user.id;
    return $http.post(serverConstant.crudURL + '/workouts', workout)
  }

  function getUserWorkouts() {
    let user = $cookies.getObject('user');
    return $http.get(serverConstant.crudURL + '/users/' + user.id + '/workouts');
  }

  function attachExercise(exerciseId, workoutId) {
    return $http.post(serverConstant.crudURL + '/workoutExercises', { exercise: exerciseId, workout: workoutId });
  }

}

WorkoutService.$inject = ['$http', 'serverConstant', '$cookies'];
export { WorkoutService };
