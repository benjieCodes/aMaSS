function config (BackAndProvider, $urlRouterProvider, $stateProvider) {

  BackAndProvider
    .setSignUpToken('a89ec1fe-c50b-4869-852a-d7c0f294c23b')
    .setAppName('amassapp')
  ;

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/login.tpl.html'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/register.tpl.html',
      controller: 'RegisterController as vm'
    })
  ;
}

config.$inject = ['BackandProvider', '$urlRouterProvider', '$stateProvider' ];
export { config };
