function HomeController (WorkoutService) {

  let vm = this;

  initialize()

  function initialize() {
    WorkoutService.getWorkout().then( (res) => {
      vm.myWorkout = res.data.data;
      console.log(res);
    });
  }
}

HomeController.$inject = ['WorkoutService'];
export { HomeController };
