"use strict";

var app = angular.module('myApp', ['ngRoute', 'noteList', 'noteCreating']);


app.controller('HeadCtrl', function($scope){
    $scope.dropStorage = function(){
        localStorage.clear();
    }
});