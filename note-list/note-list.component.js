"use strict";

angular.module('noteList').component('noteList', {
    templateUrl: 'note-list/note-list.template.html',
    controller: ['$scope', '$route', function($scope, $route){
            var objNotes = {};
            for(var i=0; i<localStorage.length; i++){
                objNotes[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i)));
            }
            $scope.collection = objNotes;
        
            $scope.removeNote = function(event){
                var headerKey = $(event.target).
                                 closest(".note-list").
                                 find(".header-key").
                                 html();
                //remove the object from scope
                angular.forEach($scope.collection, function(value, index){
                    if(index == headerKey){
                        delete $scope.collection[index];
                    }
                });
                //remove the object from localStorage
                window.localStorage.removeItem(headerKey);
            };
        
           $scope.tempFunc = function(event){
               event.preventDefault();
               $scope.tagName = event.target.outerText;
           }
        }
    ]
});




