"use strict";

angular.module('noteCreating').component('noteCreating', {
    templateUrl: 'note-creating/note-creating.template.html',
    controller: ['$scope', '$window', 'tagsService', function($scope, $window, tagsService){
                var $btnSave = $('.btn-save'),
                    $btnAdd =  $('.btn-add'),
                    $btnClose = $('.btn-close'),
                    newOne = "true",
                    noteTags = [];

  
                $scope.errState = false;
                $scope.saveNote = function(newOne){
                    var self = this;
                    
                    if(self.noteHeader == undefined || self.noteHeader.length === 0 || self.noteText == undefined || self.noteText.length === 0 ){
                        $scope.errState = true;
                        $scope.errText = 'Empty fields!';
                    }else{
                        if(localStorage.getItem(self.noteHeader) !== null){
                            $scope.errState = true;
                            $scope.errText = 'Item already existed!';
                        }else{
                            $scope.errState = false;
                            noteTags = tagsService.findTags(self.noteText);
                            localStorage.setItem(self.noteHeader, JSON.stringify({"message":self.noteText, "tags":noteTags, "date": new Date().toLocaleString("en-US")}));
                            
                            if(!arguments.length){
                                $window.location.href = '/';
                            }else{
                                $scope.noteHeader = '';
                                $scope.noteText = '';
                            }
                            console.log(new Date().toLocaleString("en-US"));
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