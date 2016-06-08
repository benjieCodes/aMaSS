function ExerciseService ($http, serverConstant, $cookies, $state) {

  this.add = add;

  function add(exercise) {
    let user = $cookies.getObject('user');
    exercise.id = user.id

    $http.post(serverConstant.crudURL + '/exercises', exercise);
    $state.go('root.home');
  }
}

ExerciseService.$inject = ['$http', 'serverConstant', '$cookies', '$state'];
export { ExerciseService };
