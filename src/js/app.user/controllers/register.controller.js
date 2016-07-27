function RegisterController (UserService, $cookies, $state) {

  let vm = this;

  vm.registerUser = registerUser;

  function registerUser (user) {
    UserService.register(user).then((res) => {
    console.log(res);
    let user = {
      name: res.fullName,
      id: res.userId,
      email: res.username,
      token: res.access_token
    };
      $cookies.putObject('user', user);
      alert('You have successfully registered! Now log in to your account!')
      $state.go('root.login')
    });
  }

}
RegisterController.$inject = ['UserService', '$cookies', '$state']

export { RegisterController }
