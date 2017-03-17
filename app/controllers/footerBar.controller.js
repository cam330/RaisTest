(function() {
	'use strict';

	angular
	  .module('app')
	  .controller('FooterController', FooterController);

	FooterController.$inject = ['$http'];

	function FooterController($http) {
		var vm = this;

		activate();

		function activate(){
			
		}
	}
})();