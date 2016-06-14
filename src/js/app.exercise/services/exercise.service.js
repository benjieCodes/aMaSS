function ExerciseService ($http, serverConstant, $cookies) {

  this.add = add;
  this.getAllExercises = getAllExercises;

  function add(exercise) {
    let user = $cookies.getObject('user');
    $http.post(serverConstant.crudURL + '/exercises', exercise);
  }

  function getAllExercises() {
    return $http.get(serverConstant.exerciseURL)
  }
}

ExerciseService.$inject = ['$http', 'serverConstant', '$cookies'];
export { ExerciseService };
