function SingleExerciseController ($stateParams, ExerciseService) {

  let vm = this;

  initialize();

  function initialize() {
    ExerciseService.getSingleExercise($stateParams.id).then( (res) => {
      vm.singleExercise = res.data;

      if (vm.singleExercise.image.substring(0,4) === 'http' || vm.singleExercise.image.substring(-4) === 'jpeg' || vm.singleExercise.image.substring(-3) === 'png') {
        vm.singleExercise.image = vm.singleExercise.image
      } else {
        vm.singleExercise.image = 'http://placehold.it/500x500';
      }
    });
  }

}

SingleExerciseController.$inject = ['$stateParams', 'ExerciseService'];
export { SingleExerciseController };
