(function() {
	'use strict';

	angular
	  .module('app')
	  .controller('HomePageController', HomePageController);

	HomePageController.$inject = ['$http'];

	function HomePageController($http) {
		var vm = this;

		activate();

		function activate(){
			
		}
	}
})();