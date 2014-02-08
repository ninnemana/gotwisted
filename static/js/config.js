'use strict';

//Setting up route
angular.module('twisted',['ngRoute']).config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/bio', {
			controller: 'BioController',
			templateUrl: 'static/views/bio.html'
		}).
		when('/events', {
			controller: 'EventsController',
			templateUrl: 'static/views/events.html'
		}).
		when('/news', {
			controller: 'NewsController',
			templateUrl: 'static/views/news.html'
		}).
		when('/pics', {
			controller: 'PhotoController',
			templateUrl: 'static/views/pics.html'
		}).
		when('/videos', {
			controller: 'VideoController',
			templateUrl: 'static/views/video.html'
		}).
		when('/contact', {
			controller: 'ContactController',
			templateUrl: 'static/views/contact.html'
		}).
		when('/', {
			controller: 'IndexController',
			templateUrl: 'static/views/home.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);

//Setting HTML5 Location Mode
angular.module('twisted').config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);