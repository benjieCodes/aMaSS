function UserService (Backand , $cookies, $state) {

  this.register = register;
  this.login = login;
  this.logout = logout;
  this.checkAuth = checkAuth;

  function register (user) {
    return Backand.signup(
      user.firstName,
      user.lastName,
      user.email,
      user.password,
      user.confirmPassword
    );
  }

  function login (user) {
    return Backand.signin(
      user.username,
      user.password
    );
  }

  function logout (user) {
    let loggedIn = $cookies.getObject('user');
    if (loggedIn) {
      $cookies.remove('user');
      Backand.signout();
      $state.go('root.login');
      alert('You have been logged out');
    }
    else {

    }
  }

  function checkAuth (currentState) {
    let user = $cookies.getObject('user');
    if (user) {
    } else if (currentState === 'root.login' || currentState === 'root.register' || currentState === 'root.home') {
    } else {
      alert('Please login or register to access your workouts');
      $state.go('root.login');
    }
  }

}
UserService.$inject = ['Backand', '$cookies', '$state'];
export { UserService };
