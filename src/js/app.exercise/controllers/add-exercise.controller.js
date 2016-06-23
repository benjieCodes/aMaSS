function AddExerciseController (ExerciseService, $state) {

  let vm = this;
  vm.addExercise = addExercise;
  vm.bodyParts = [
    'Neck',
    'Shoulders',
    'Upper Arms',
    'Forearms',
    'Chest',
    'Abdominals',
    'Back',
    'Hips',
    'Glutes',
    'Thighs',
    'Calves'
  ];

  function addExercise(exercise) {
    exercise.bodyPart = exercise.bodyPart.toString();
    ExerciseService.add(exercise).then( (res) => {
      alert('Exercise Added!');
      $state.go('root.exercises');
    });
  }
}

AddExerciseController.$inject = ['ExerciseService', '$state'];
export { AddExerciseController };
