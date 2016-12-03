"use strict";

var app = angular.module('myApp', ['ngRoute', 'noteList', 'noteCreating', 'noteDetails', 'core', 'ui.bootstrap']);

//Temporary
app.controller('HeadCtrl', function($scope, $route){
    $scope.dropStorage = function(){
        window.localStorage.clear();
        $('.note-list').remove();
    }
    
    $scope.isCollapsed = true;
});




