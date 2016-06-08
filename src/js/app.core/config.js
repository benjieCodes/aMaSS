function config (BackAndProvider, $urlRouterProvider, $stateProvider) {

  BackAndProvider
    .setSignUpToken('a89ec1fe-c50b-4869-852a-d7c0f294c23b')
    .setAppName('amassapp')
  ;

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'NavController as vm'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as vm'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/login.tpl.html',
      controller: 'LoginController as vm'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/register.tpl.html',
      controller: 'RegisterController as vm'
    })
    .state('root.workouts', {
      url: '/workouts',
      templateUrl: 'templates/workout.tpl.html',
      controller: 'WorkoutController as vm'
    })
    .state('root.add-workout', {
      url: '/add-workout',
      templateUrl: 'templates/add-workout.tpl.html',
      controller: 'AddWorkoutController as vm'
    })
    .state('root.exercises', {
      url: '/exercises',
      templateUrl: 'templates/exercise.tpl.html',
      controller: 'ExerciseController as vm'
    })
    .state('root.add-exercise', {
      url: '/add-exercise',
      templateUrl: 'templates/add-exercise.tpl.html',
      controller: 'AddExerciseController as vm'
    })
  ;
}

config.$inject = ['BackandProvider', '$urlRouterProvider', '$stateProvider' ];
export { config };
