'use strict';

angular.module('twisted').controller('EventsController', ['$scope', 'Global', function ($scope, Global) {
	$scope.global = Global;
}]);