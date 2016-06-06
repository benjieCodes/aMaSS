function NavController (UserService) {

  let vm = this;

  vm.logoutUser = logoutUser;
  vm.isLoggedOut = true;

  function logoutUser () {
    UserService.logout()
  }

}

NavController.$inject = ['UserService'];
export { NavController };
