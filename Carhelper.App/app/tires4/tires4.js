'use strict';

angular.module('Carhelper.App')
  .config(function ($stateProvider) {
      $stateProvider
        .state('tires4', {
            url: '/tires4',
            templateUrl: 'app/tires4/tires4.html',
            controller: 'Tires4Ctrl'
        });
  });