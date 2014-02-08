'use strict';

angular.module('twisted').controller('PhotoController', ['$scope', '$routeParams', '$location', '$http', function ($scope, $routeParams, $location, $http) {

	console.log($location);
	console.log($scope);
	console.log($routeParams);

	$http({method: 'GET', url: 'https://graph.facebook.com/twistedrhythmrocks/photos/uploaded'}).
	success(function(data, status, headers, config) {
		$scope.photos = data;
		console.log(data);
	}).
	error(function(data, status, headers, config) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});

}]);