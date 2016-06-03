import angular from 'angular'

import { RegisterController } from './controllers/register.controller'

import { UserService } from './services/user.service'

angular
  .module('app.user', [])
  .controller('RegisterController', RegisterController)
  .service('UserService', UserService)
;
