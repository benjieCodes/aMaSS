function UserService (Backand , $cookies, $state, $rootScope) {

  this.register = register;
  this.login = login;
  this.logout = logout;
  this.checkAuth = checkAuth;
  this.logChanged = logChanged;

  function register (user) {
    return Backand.signup(
      user.firstName,
      user.lastName,
      user.email,
      user.password,
      user.confirmPassword
    );
  }

  function logChanged (status) {
    $rootScope.$broadcast('logChanged', status);
  }

  function login (user) {
    return Backand.signin(
      user.username,
      user.password
    );
    this.logChanged('loggedIn');
  }

  function logout (user) {
    $cookies.remove('user');
    Backand.signout();
    this.logChanged('loggedOut')
    $state.go('root.login');
  }

  function checkAuth (currentState) {
    let user = $cookies.getObject('user');
    if (user) {
      console.log('successfully logged in!');
    } else if (currentState === 'root.login' || currentState === 'root.register' || currentState === 'root.home') {
      console.log('register or login');
    } else {
      $state.go('root.login');
    }
  }


}

UserService.$inject = ['Backand', '$cookies', '$state', '$rootScope'];
export { UserService };
