(function() {
    'use strict';

    angular
        .module('login')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ["$scope"]

   	function LoginCtrl($scope) {

   		// Variáveis
   		$scope.login = "Login";

   		// Métodos
   		$scope.logar = logar;
   		
   		function logar() {
   			console.log('Logou com sucesso!');
   		}

   	}

})();