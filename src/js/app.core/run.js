function run ($rootScope, UserService, $state) {

  $rootScope.$on('$stateChangeSuccess', (event, state) => {
    if (UserService.checkAuth(state.name)) {
      UserService.logChanged('loggedIn');
    } else {
      UserService.logChanged('loggedOut');
      $state.go('root.login');
    }
  });

}

run.$inject = ['$rootScope', 'UserService', '$state'];
export { run };
