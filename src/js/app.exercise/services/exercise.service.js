function ExerciseService ($http, serverConstant, $cookies) {

  this.add = add;
  this.getAllExercises = getAllExercises;
  this.getSingleExercise = getSingleExercise;

  function add(exercise) {
    let user = $cookies.getObject('user');
    return $http.post(serverConstant.crudURL + '/exercises', exercise);
  }

  function getAllExercises() {
    return $http.get(serverConstant.exerciseURL)
  }

  function getSingleExercise(exerciseId) {
    return $http.get(serverConstant.crudURL + '/exercises/' + exerciseId)
  }
}

ExerciseService.$inject = ['$http', 'serverConstant', '$cookies'];
export { ExerciseService };
