/*jslint browser: true*/
/*global angular*/
angular.module("xebiaSwApp").constant("AppConst", {
    baseResource: "https://swapi.co/api/",
    people: "people/",
    planets: "planets/",
    search: "?search=",
    localstorageUser: "starwaruser",
    alphaUserUnlimitedSearch: "Luke Skywalker",
    numberOfSearchAllowed: 15,
    timeOutForSearch: 60000
});
