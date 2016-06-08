function ExerciseService ($http, serverConstant, $cookies, $state) {

  this.add = add;
  this.getExercise = getExercise;

  function add(exercise) {
    let user = $cookies.getObject('user');
    exercise.id = user.id

    $http.post(serverConstant.crudURL + '/exercises', exercise);
    $state.go('root.home');
  }

  function getExercise() {
    let user = $cookies.getObject('user');
    return $http.get(serverConstant.crudURL + '/users/' + user.id + '/exercises')
  }
}

ExerciseService.$inject = ['$http', 'serverConstant', '$cookies', '$state'];
export { ExerciseService };
