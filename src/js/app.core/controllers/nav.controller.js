function NavController (UserService, $rootScope) {

  let vm = this;

  vm.logoutUser = logoutUser;
  vm.loggedIn = false;

  function logoutUser () {
    UserService.logout()
  }

  $rootScope.$on('logChanged', (event, status) => {
    if (status === 'loggedIn') {
      vm.loggedIn = false;
    } else {
      vm.loggedIn = true;
    }
  });

}

NavController.$inject = ['UserService', '$rootScope'];
export { NavController };
