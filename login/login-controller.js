(function() {
    'use strict';

    angular
        .module('login')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ["$scope", "$location"]

   	function LoginCtrl($scope, $location) {

   		// Variáveis
   		$scope.email = '';
        $scope.senha = '';
        $scope.user = true;

   		// Métodos
   		$scope.logar = logar;


   		function logar() {
            console.log('Dados invalidos');
   		   if ($scope.email === 'prof@gmail.com' && $scope.senha === '123') {
                $location.path('/professor');
           } else if ($scope.email === 'aluno@gmail.com' && $scope.senha === '123') {
                $location.path('/aluno');
           } else {
                console.log('Dados invalidos');
           }
        }

   	}

})();