"use strict";

angular.module('myApp').config(['$locationProvider', '$routeProvider', 
    function config($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!');
        
        $routeProvider.
        when('/', {
            template: '<note-list></note-list>'
        }).
        when('/about', {
            template: '<h2>About page</h2>'
        }).
        when('/creating', {
            template: '<note-creating></note-creating>',
        }).
        when('/details/:noteKey', {
            template: '<note-details></note-details>',
        }).
        otherwise('/');
    }
]);