'use strict';

angular.module('Carhelper.App')
  .config(function ($stateProvider) {
      $stateProvider
        .state('tires2', {
            url: '/tires2',
            templateUrl: 'app/tires2/tires2.html',
            controller: 'Tires2Ctrl'
        });
  });