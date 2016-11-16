"use strict";

angular.module('noteDetails').component('noteDetails',{
    templateUrl: 'note-details/note-details.template.html',
    controller: ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location){
            var $textarea = $('textarea'),
                $saveBtn = $('.save-btn'),
                $saveCloseBtn = $('.save-close-btn'),
                $editBtn = $('.edit-btn'),
                $cancelBtn = $('.cancel-btn'),
                saveAndClose = true,
                noteData = JSON.parse(localStorage.getItem($routeParams.noteKey));
        
            function toggleAccess(bVal){
                $textarea.prop('readonly', bVal);
                $saveBtn.prop('disabled', bVal);
                $saveCloseBtn.prop('disabled', bVal);
                $cancelBtn.prop('disabled', bVal);
                $editBtn.prop('disabled', !bVal);
            };
        
            $scope.noteHeader = $routeParams.noteKey;
            $scope.noteText = noteData.message;
        
            $scope.close = function(){
                $location.path('/');
            };
            $scope.edit = function(){
                toggleAccess(false);
            };
            $scope.cancel = function(){
                $scope.noteText = noteData.message;
                toggleAccess(true);
            };
            $scope.save = function(saveAndClose){
                var self = this;
                localStorage.setItem(self.noteHeader, JSON.stringify({"message":self.noteText, "tags":["#tag1", "#tag2", "#tag3"]}));
                if(!arguments.length){
                     toggleAccess(true);
                }else{
                    $location.path('/');
                }
            };
        }
    ]
});