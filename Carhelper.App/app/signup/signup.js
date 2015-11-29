'use strict';

angular.module('Carhelper.App')
  .config(function ($stateProvider) {
      $stateProvider
        .state('signup', {
            url: '/signup',
            templateUrl: 'app/signup/signup.html',
            controller: 'SignupCtrl'
        });
  });