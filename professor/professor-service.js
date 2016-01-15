(function(){
	'use strict'

	angular
		.module('professor')
		.factory('professorFactory', professorFactory);

	professorFactory.$inject = ["$http"]

	function professorFactory($http) {
		var service = {
			buscarDadosProfessor: buscarDadosProfessor,
			buscarListaAlunos: buscarListaAlunos
		};
		return service;

		function buscarDadosProfessor() {
			return $http.get('/Users/breno/youngCoders/mocks/professores.json');
		}

		function buscarListaAlunos(){
			
		}
	}
})();