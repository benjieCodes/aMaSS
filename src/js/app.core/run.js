function run ($rootScope, UserService) {

  $rootScope.$on('$stateChangeSuccess', (event, state) => {
    
  })



}

run.$inject = ['$rootScope', 'UserService'];
export { run };
