(function() {
	'use strict';

	angular
	  .module('app')
	  .controller('TopNavController', TopNavController);

	TopNavController.$inject = ['$http'];

	function TopNavController($http) {
		var vm = this;

		activate();

		function activate(){
			
		}
	}
})();