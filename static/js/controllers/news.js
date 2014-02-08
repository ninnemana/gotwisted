'use strict';

angular.module('twisted').controller('NewsController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
}]);