﻿'use strict';

angular.module('Carhelper.App')
  .config(function ($stateProvider) {
      $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl'
        });
  });