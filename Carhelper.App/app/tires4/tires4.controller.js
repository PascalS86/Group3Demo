'use strict';
angular.module('Carhelper.App').controller('Tires4Ctrl', ['$http', '$scope', '$rootScope', '$location', 'authService', 'ngAuthSettings', 'Hub', 'modalService',
    function ($http, $scope, $rootScope, $location, authService, ngAuthSettings, Hub,modalService) {

    $scope.logOut = function () {
        authService.logOut();
        $location.path('/');
    }
    $scope.clicked = false;
    $scope.isactive = false;
    $scope.change = function (val) {
        $scope.isactive = val;
    };
    $scope.authentication = authService.authentication;
    $scope.isLoggedIn = function () { return $scope.authentication.isAuth; };
    
    $scope.send = function () {
        var message = "<h2>Deine Anfrage wurde verschickt</h2><br />Vielen Dank. Du wirst anschließend wieder zur Homepage zurück gebracht. ";
        modalService.showDialog("Anfrage abgeschickt", message)
        .then(function () {
            $location.path('/');
        });
    };

    /*
    If you're going to use a SignalR hub, 
    and you want to get the current authenticated user at your hub, 
    use this disconnect and connect the hub again.
    The comment shows a Hub declartion, based on https://github.com/JustMaier/angular-signalr-hub 
    */
    ////Definition of Hub
    //var hub = new Hub('baseHub', {

    //    //client side methods
    //    listeners: {
    //        'broadcastMessage': function (message) {
    //            //Do Something
    //        }
    //    },

    //    //server side methods
    //    methods: ['send'],

    //    //query params sent on initial connection
    //    queryParams: {
    //    },

    //    //handle connection error
    //    errorHandler: function (error) {
    //        console.error(error);
    //    },

    //    //specify a non default root
    //    //rootPath: '/api

    //    stateChanged: function (state) {
    //        switch (state.newState) {
    //            case $.signalR.connectionState.connecting:
    //                //your code here
    //                break;
    //            case $.signalR.connectionState.connected:
    //                //your code here
    //                break;
    //            case $.signalR.connectionState.reconnecting:
    //                //your code here
    //                break;
    //            case $.signalR.connectionState.disconnected:
    //                //your code here
    //                break;
    //        }
    //    }
    //});
    //hub.disconnect();
    //hub.connect();
    
    function safeApply(scope, root, fn) {
        (scope.$$phase || (root.$$phase)) ? fn() : scope.$apply(fn);
    }
}]);