/*jslint browser: true*/
/*global angular*/
(function () {
    "use strict";
    angular.module("xebiaSwApp").config(["$stateProvider", "$urlRouterProvider",
            function ($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/dashboard");
        $stateProvider
            .state("dashboard", {
                url: "/dashboard",
                views: {
                    content: {
                        templateUrl: "component/dashboard/dashboard.html"
                    }
                }
            })
            .state("login", {
                url: "/login",
                views: {
                    "content": {
                        templateUrl: "component/login/login.html"
                    }
                }
            });
    }]);
    angular.module("xebiaSwApp").run(["$rootScope", "loginService", "$state",
            function ($rootScope, loginService, $state) {
        var loginRequired = ["dashboard"];
        var loginState = "login";
        var user;
        $rootScope.$on("$stateChangeStart", function (event, toState) {
            if (loginRequired.indexOf(toState.name) > -1) {
                user = loginService.isUserLoggedIn();
                if (!user) {
                    event.preventDefault();
                    $state.go("login");
                }
            } else if (toState.name === loginState) {
                user = loginService.isUserLoggedIn();
                if (user) {
                    event.preventDefault();
                    $state.go("dashboard");
                }
            }
        });
    }]);
}());
