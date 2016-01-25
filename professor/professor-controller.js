(function() {
    'use strict';

    angular
        .module('professor')
        .controller('ProfessorCtrl', ProfessorCtrl);

    ProfessorCtrl.$inject = ["$scope", "professorFactory"];

    /* @ngInject */
    function ProfessorCtrl($scope, professorFactory) {

        $scope.itemSelecionado = '';
        $scope.disciplinas = ["Matematica", "Quimica", "Ingles", "Fisica"];

    	professorFactory.buscarDadosProfessor().then(function(response){
    		$scope.professores = response.data;
    	});

    	professorFactory.buscarListaAlunos();
    }

})();