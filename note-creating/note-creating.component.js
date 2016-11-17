"use strict";

angular.module('noteCreating').component('noteCreating', {
    templateUrl: 'note-creating/note-creating.template.html',
    controller: ['$scope', '$window', 'tagsService', function($scope, $window, tagsService){
                var $btnSave = $('.btn-save'),
                    $btnAdd =  $('.btn-add'),
                    $btnClose = $('.btn-close'),
                    newOne = "true",
                    noteTags = [];

                $scope.saveNote = function(newOne){
                    var self = this;
                    
                    if(localStorage.getItem(self.noteHeader) === null){
                        noteTags = tagsService.findTags(self.noteText);
                        localStorage.setItem(self.noteHeader, JSON.stringify({"message":self.noteText, "tags":noteTags}));
                    }else{
                        alert("The header arleady exists!");
                    }
                    
                
                    if(!arguments.length){
                        $window.location.href = '/';
                    }else{
                        $scope.noteHeader = '';
                        $scope.noteText = '';
                    }
                }
                
                $scope.close = function(){
                    $window.location.href = '/';
                }
            }
        ]
    }
);