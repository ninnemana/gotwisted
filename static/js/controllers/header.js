'use strict';

angular.module('twisted').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
	$scope.global = Global;

	$scope.menu = [{
		'title': 'Articles',
		'link': 'articles'
	}, {
		'title': 'Create New Article',
		'link': 'articles/create'
	}];

	$scope.isCollapsed = false;

	$scope.getClass = function(path){
		console.log(path);
	};
}]);