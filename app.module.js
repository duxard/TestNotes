"use strict";

var app = angular.module('myApp', ['ngRoute', 'noteList', 'noteCreating', 'noteDetails']);


app.controller('HeadCtrl', function($scope){
    $scope.dropStorage = function(){
        window.localStorage.clear();
        $('.note-list').remove();
    }
});