function WorkoutController (WorkoutService, $state, $cookies) {

  let vm = this;

  initialize();

  function initialize() {
    WorkoutService.getUserWorkouts().then( (res) => {
      vm.myWorkouts = res.data.data;

    let user = $cookies.getObject('user');
      vm.name = user.name;
    });
  }
}
WorkoutController.$inject = ['WorkoutService', '$state', '$cookies'];
export { WorkoutController };
