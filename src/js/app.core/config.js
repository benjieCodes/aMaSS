function config ($stateProvider, $urlRouterProvider) {

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
      templateUrl: 'templates/register.tpl.html'
    })
  ;
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
