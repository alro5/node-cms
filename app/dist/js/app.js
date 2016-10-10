(function() {
  'use strict';

  var modules = [
  	'ui.router',
  	'ngAnimate'
  ];

  angular
  	.module('app', modules)
  	.config(Config);


	function Config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider

    .state('home', {
        url: '/',
        templateUrl: "/views/home/home.html"
    })

	}


})();
(function() {
  'use strict';

  angular
    .module('app')
    .controller('mainCtrl', mainCtrl);

  function mainCtrl($timeout, apiService) {
    var vm = this;

  }
  
})();
