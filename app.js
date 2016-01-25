(function() {
    'use strict';

    angular
        .module('app', [
        	'ngRoute',
        	'login',
            'professor'
        ])
        .config(config);

	function config($routeProvider) {
	    $routeProvider
	        .when('/', {
	          templateUrl: 'login/login.html'
	        })
            .when('/professor', {
              templateUrl: 'professor/professor.html'  
            })
            .when('/aluno', {
                templateUrl: 'aluno/aluno.html'
            });
	}
})();