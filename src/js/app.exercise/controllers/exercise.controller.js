function ExerciseController (ExerciseService, $state) {

  let vm = this;

  initialize();

  function initialize () {
    ExerciseService.getAllExercises().then( (res) => {
      vm.exerciseLibrary = res.data.data;
    });
  }

}

ExerciseController.$inject = ['ExerciseService', '$state'];
export { ExerciseController };
