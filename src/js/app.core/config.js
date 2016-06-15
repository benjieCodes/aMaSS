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

    // Home Page
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as vm'
    })

    // User Regisration & Login
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

    // Workout States
    .state('root.workouts', {
      url: '/workouts',
      templateUrl: 'templates/workout.tpl.html',
      controller: 'WorkoutController as vm'
    })
    .state('root.add-workout', {
      url: '/workouts/add',
      templateUrl: 'templates/add-workout.tpl.html',
      controller: 'AddWorkoutController as vm'
    })
    .state('root.single-workout', {
      url: '/workouts/:workoutId',
      templateUrl: 'templates/single-workout.tpl.html',
      controller: 'SingleWorkoutController as vm'
    })

    // Exercise States
    .state('root.exercises', {
      url: '/exercises',
      templateUrl: 'templates/exercise.tpl.html',
      controller: 'ExerciseController as vm'
    })
    .state('root.add-exercise', {
      url: '/exercises/add',
      templateUrl: 'templates/add-exercise.tpl.html',
      controller: 'AddExerciseController as vm'
    })
    .state('root.single-exercise', {
      url: '/exercises/:id',
      templateUrl: 'templates/single-exercise.tpl.html',
      controller: 'SingleExerciseController as vm'
    })

    // Workout-Exercise States
    .state('root.add-workout-exercise', {
      url: '/workouts/:workoutId/exercises/add',
      templateUrl: 'templates/add-workout-exercise.tpl.html',
      controller: 'AddWorkoutExerciseController as vm'
    })
  ;
}

config.$inject = ['BackandProvider', '$urlRouterProvider', '$stateProvider'];
export { config };
