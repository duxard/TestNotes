"use strict";

angular.module('noteDetails').component('noteDetails',{
    templateUrl: 'note-details/note-details.template.html',
    controller: ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location){
            var $textarea = $('textarea'),
                $saveBtn = $('.save-btn'),
                $saveCloseBtn = $('.save-close-btn'),
                $editBtn = $('.edit-btn'),
                $cancelBtn = $('.cancel-btn'),
                saveAndClose = true;
        
            function toggleAccess(bVal){
                $textarea.prop('readonly', bVal);
                $saveBtn.prop('disabled', bVal);
                $saveCloseBtn.prop('disabled', bVal);
                $cancelBtn.prop('disabled', bVal);
                $editBtn.prop('disabled', !bVal);
            }
        
            $scope.noteHeader = $routeParams.noteKey;
            $scope.noteText = localStorage.getItem($routeParams.noteKey);
            $scope.close = function(){
                $location.path('/');
            };
            $scope.edit = function(){
                toggleAccess(false);
            };
            $scope.cancel = function(){
                $scope.noteText = localStorage.getItem($routeParams.noteKey);
                toggleAccess(true);
            };
            $scope.save = function(saveAndClose){
                localStorage.setItem(this.noteHeader, this.noteText);
                console.log(localStorage);
                if(!arguments.length){
                     toggleAccess(true);
                }else{
                    $location.path('/');
                }
            };
        }
    ]
});