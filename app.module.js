"use strict";

var app = angular.module('myApp', ['ngRoute', 'noteList', 'noteCreating', 'noteDetails', 'core']);

//Temporary
app.controller('HeadCtrl', function($scope, $route){
    $scope.dropStorage = function(){
        window.localStorage.clear();
        $('.note-list').remove();
    }
    
    $scope.createStorage = function($scope){
        localStorage.setItem("key1", JSON.stringify({"message": "Some text1 #tag1", "tags":["tag1"]}));
        localStorage.setItem("key2", JSON.stringify({"message": "Some text2 #tag1 #tag2", "tags":["tag1", "tag2"]}));
        localStorage.setItem("key3", JSON.stringify({"message": "Some text3 #tag1", "tags":["tag1"]}));
        localStorage.setItem("key4", JSON.stringify({"message": "Some text4 #tag1 #tag2", "tags":["tag1", "tag2"]}));
        localStorage.setItem("key5", JSON.stringify({"message": "Some text5 #tag6", "tags":["tag6"]}));
        localStorage.setItem("key6", JSON.stringify({"message": "Some text6 #one", "tags":["one"]}));
        localStorage.setItem("key7", JSON.stringify({"message": "Some text7 #two #shop", "tags":["two", "shop"]}));
        localStorage.setItem("key8", JSON.stringify({"message": "Some text8 #shop", "tags":["shop"]}));
        
        $route.reload();
    }
});




