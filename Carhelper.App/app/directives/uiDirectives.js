'use strict';

angular.module('Carhelper.App').directive('bootselectpicker', function () {
    var directive = {
        require: 'ngModel',
        link: link,
        restrict: 'A'
    };
    function link(scope, element, attrs, ctrl) {
        element.selectpicker();
    }
});
