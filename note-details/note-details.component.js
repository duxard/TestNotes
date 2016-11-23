"use strict";

angular.module('noteDetails').component('noteDetails',{
    templateUrl: 'note-details/note-details.template.html',
    controller: ['$scope', '$routeParams', '$location', 'tagsService', 'errorBlock', function($scope, $routeParams, $location, tagsService, errorBlock){
            var $textarea = $('textarea'),
                $saveBtn = $('.save-btn'),
                $saveCloseBtn = $('.save-close-btn'),
                $editBtn = $('.edit-btn'),
                $cancelBtn = $('.cancel-btn'),
                saveAndClose = true,
                noteTags = [],
                noteData = JSON.parse(localStorage.getItem($routeParams.noteKey)),
                accessToken = true;
        
            function toggleAccess(bVal){
                $textarea.prop('readonly', bVal);
                $saveBtn.prop('disabled', bVal);
                $saveCloseBtn.prop('disabled', bVal);
                $cancelBtn.prop('disabled', bVal);
                $editBtn.prop('disabled', !bVal);
            };
        
            $scope.errState = false;
            $scope.noteHeader = $routeParams.noteKey;
            $scope.noteText = noteData.message;
            $scope.tagsList = noteData.tags;
        
            $scope.close = function(){
                $location.path('/');
            };
            $scope.edit = function(){
                toggleAccess(false);
            };
            $scope.cancel = function(){
                $scope.noteText = noteData.message;
                toggleAccess(true);
                $scope.errState = false;
            };
            $scope.save = function(saveAndClose){
                var self = this;
   
                if(self.noteText.length === 0){
                    self.errState = true;
                    self.errText = 'Empty fields!';
                }else{
                    self.errState = false;
                    //tags search
                    noteTags = tagsService.findTags(self.noteText);
                    //save new record
                    localStorage.setItem(self.noteHeader, JSON.stringify({"message":self.noteText, "tags":noteTags}));
                    //renew tags list
                    self.tagsList = noteTags;

                    if(!arguments.length){
                         toggleAccess(true);
                    }else{
                        $location.path('/');
                    }
                }
            };
        }
    ]
});

