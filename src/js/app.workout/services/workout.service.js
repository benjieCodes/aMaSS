function WorkoutService ($http, serverConstant, $cookies) {

  this.add = add;
  this.getUserWorkouts = getUserWorkouts;
  this.getSingleWorkout = getSingleWorkout;
  this.attachExercise = attachExercise;
  this.postWorkoutExercise = postWorkoutExercise;

  function add (workout) {
    let user = $cookies.getObject('user');
    workout.user = user.id;
    return $http.post(serverConstant.crudURL + '/workouts', workout)
  }

  function getUserWorkouts() {
    let user = $cookies.getObject('user');
    return $http.get(serverConstant.crudURL + '/users/' + user.id + '/workouts');
  }

  function getSingleWorkout(workoutId) {
    let user = $cookies.getObject('user');
    return $http.get(serverConstant.crudURL + '/workouts/' + workoutId + '?deep=true');
  }

  function attachExercise(exerciseId, workoutId) {
    return $http.post(serverConstant.crudURL + '/workoutExercises', { exercise: exerciseId, workout: workoutId });
  }

  function postWorkoutExercise(exercises, workoutId) {

    let promises = [];

    exercises.forEach((exerciseId) => {
      let p = $http.post(serverConstant.crudURL + '/workoutExercises', { exercise: exerciseId, workout: workoutId });
      promises.push(p);
    });
    return Promise.all(promises);

  }

}

WorkoutService.$inject = ['$http', 'serverConstant', '$cookies'];
export { WorkoutService };
