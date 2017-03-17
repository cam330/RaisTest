(function() {
    'use strict';

    var app = angular
        .module('app', ['ui.router']);
    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/homePage');

        $stateProvider
            .state('/homePage', {
                url: "/homePage",
                views: {
                    nav: {
                        templateUrl: "app/partials/topNavBar.html",
                        controller: 'TopNavController',
                        controllerAs: 'vm',
                        data: {
                            css: 'app/styles/styles.css'
                        }
                    },
                    content: {
                        templateUrl: "app/partials/homePage.html",
                        controller: "HomePageController",
                        controllerAs: 'vm',
                        data: {
                            css: 'app/styles/styles.css'
                        }
                    },
                    footer: {
                        templateUrl: "app/partials/footerBar.html",
                        controller: "FooterController",
                        controllerAs: 'vm',
                        data: {
                            css: 'app/styles/styles.css'
                        }
                    }
                }
            })
    });
})();
