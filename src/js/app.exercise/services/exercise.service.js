function ExerciseService ($http, serverConstant, $cookies, $state) {

  this.add = add;
  this.getAllExercises = getAllExercises;

  function add(exercise) {
    let user = $cookies.getObject('user');
    exercise.id = user.id

    $http.post(serverConstant.crudURL + '/exercises', exercise);
    $state.go('root.home');
  }

  function getAllExercises() {
    return $http.get(serverConstant.exerciseURL)
  }
}

ExerciseService.$inject = ['$http', 'serverConstant', '$cookies', '$state'];
export { ExerciseService };
