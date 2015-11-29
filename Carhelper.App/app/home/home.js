'use strict';

angular.module('Carhelper.App')
  .config(function ($stateProvider) {
      $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl'
        });
  });