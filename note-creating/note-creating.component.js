"use strict";

angular.module('noteCreating').component('noteCreating', {
    templateUrl: 'note-creating/note-creating.template.html',
    controller: ['$scope', function($scope){
                $scope.saveNote = function(){
                    localStorage.setItem(this.noteHeader, this.noteText);
                    console.log(localStorage);
                }
            }
        ]
     }
);