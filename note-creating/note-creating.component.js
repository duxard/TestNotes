"use strict";

angular.module('noteCreating').component('noteCreating', {
    templateUrl: 'note-creating/note-creating.template.html',
    controller: ['$scope', '$window', function($scope, $window){
                $scope.saveNote = function(){
                    localStorage.setItem(this.noteHeader, this.noteText);
                    console.log(localStorage);
                    $window.location.href = '/';
                }
            }
        ]
    }
);