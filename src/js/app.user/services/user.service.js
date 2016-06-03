function UserService (Backand) {

  this.register = register;
  this.login = login;
  this.logout = logout;

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
    console.log('logged from Service');
  }


}

UserService.$inject = ['Backand'];
export { UserService };
