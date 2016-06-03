function NavController (UserService) {

  let vm = this;

  vm.logoutUser = logoutUser;

  function logoutUser () {
    UserService.logout()
  }

}

NavController.$inject = ['UserService'];
export { NavController };
