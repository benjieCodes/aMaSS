function SingleExerciseController ($stateParams, ExerciseService) {

  let vm = this;

  initialize();

  function initialize() {
    ExerciseService.getSingleExercise($stateParams.id).then( (res) => {
      console.log(res);
      vm.singleExercise = res.data;
    })
  }

}

SingleExerciseController.$inject = ['$stateParams', 'ExerciseService'];
export { SingleExerciseController };
