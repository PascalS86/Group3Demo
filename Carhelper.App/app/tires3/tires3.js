'use strict';

angular.module('Carhelper.App')
  .config(function ($stateProvider) {
      $stateProvider
        .state('tires3', {
            url: '/tires3',
            templateUrl: 'app/tires3/tires3.html',
            controller: 'Tires3Ctrl'
        });
  });