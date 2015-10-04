(function() {
	'use strict';
	angular.module('app', ['ui.router',"ngAnimate", "ngMaterial"])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Education', {
			templateUrl: 'views/education.html',
		}).state('Experience',{
			templateUrl: 'views/experience.html',
		}).state('Skills',{
			templateUrl: 'views/skills.html',
		}).state('Contact',{
			templateUrl: 'views/contact.html',
		}).state('Portfolio',{
			templateUrl: 'views/portfolio.html',
		});
		$urlRouterProvider.otherwise('/');
	}
})();
