'use strict';

angular.module('Carhelper.App')
  .config(function ($stateProvider) {
      $stateProvider
        .state('tires', {
            url: '/tires',
            templateUrl: 'app/tires/tires.html',
            controller: 'TiresCtrl'
        });
  });