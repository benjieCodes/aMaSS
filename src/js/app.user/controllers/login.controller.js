function LoginController (UserService, $cookies, $state) {

  let vm = this;

  vm.loginUser = loginUser;

  function loginUser (user) {
    UserService.login(user).then( (res) => {
    console.log(res);
    let user = {
      name: res.fullName,
      id: res.userId,
      email: res.username
    };

      $cookies.putObject('user', user);
      $state.go('root.workouts')
    });
  }

}

LoginController.$inject = ['UserService', '$cookies', '$state'];
export { LoginController };
