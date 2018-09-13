/*jslint browser:true*/
/*global angular, d3*/
(function () {
    "use strict";
    function dashboardCtrl(dashboardService, $rootScope, $timeout, $scope) {
        var content = {};
        var MainCtrl = $scope.$parent.MainCtrl;
        content.planetSearchParam = "Al";
        content.getAllPlanets = function () {
            content.selectedPlanet = null;
            dashboardService.getPlanets(content.planetSearchParam, MainCtrl.userObj).then(function (planets) {
                content.allPlanets = planets;
                content.chartApi.refresh(content.allPlanets);
            });
        };
        content.getAllPlanets();
        content.doPlanetSearch = function () {
            content.getAllPlanets();
        };
        content.selectPlanet = function (planet) {
            content.selectedPlanet = planet;
            content.planetSearchParam = "";
            content.allPlanets = null;
        };
        $rootScope.$on("planetSelected", function (event, data) {
            $timeout(function () {
                content.selectPlanet(data);
            });
        });
        return content;
    }
    angular.module("xebiaSwApp").controller("dashboardCtrl", ["dashboardService", "$rootScope", "$timeout", "$scope", dashboardCtrl]);
}());
