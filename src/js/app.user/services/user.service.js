function UserService (Backand) {

  this.register = register;

  function register (user) {
    return Backand.signup(
      user.firstName,
      user.lastName,
      user.email,
      user.password,
      user.confirmPassword
    );
  }

}

UserService.$inject = ['Backand'];
export { UserService };
