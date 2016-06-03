function RegisterController (UserService, $cookies) {

  let vm = this;

  vm.registerUser = registerUser;

  function registerUser (user) {
    UserService.register(user).then((res) => {
    console.log(res);
    let user = {
      name: res.fullName,
      id: res.userId,
      email: res.username
    };
    $cookies.putObject('user', user);
    });
  }

}
RegisterController.$inject = ['UserService', '$cookies']

export { RegisterController }
