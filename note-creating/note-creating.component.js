"use strict";

angular.module('noteCreating').component('noteCreating', {
    templateUrl: 'note-creating/note-creating.template.html',
    controller: ['$scope', '$window', 'tagsService', 'errorBlock', function($scope, $window, tagsService, errorBlock){
                var $btnSave = $('.btn-save'),
                    $btnAdd =  $('.btn-add'),
                    $btnClose = $('.btn-close'),
                    newOne = "true",
                    noteTags = [];
        
                $scope.saveNote = function(newOne){
                    var self = this;
                    
                    if(self.noteHeader == undefined || self.noteHeader.length === 0 || self.noteText == undefined || self.noteText.length === 0 ){
                        errorBlock.errShow().errMsg('Empty fields!');
                    }else{
                        if(localStorage.getItem(self.noteHeader) !== null){
                            errorBlock.errShow().errMsg('Item already existed!');
                        }else{
                            errorBlock.errHide();
                            noteTags = tagsService.findTags(self.noteText);
                            localStorage.setItem(self.noteHeader, JSON.stringify({"message":self.noteText, "tags":noteTags}));
                            if(!arguments.length){
                                $window.location.href = '/';
                            }else{
                                $scope.noteHeader = '';
                                $scope.noteText = '';
                            }
                        }
                    }
                }
                
                $scope.close = function(){
                    $window.location.href = '/';
                }
            }
        ]
    }
);