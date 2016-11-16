"use strict";

angular.module('noteCreating').component('noteCreating', {
    templateUrl: 'note-creating/note-creating.template.html',
    controller: ['$scope', '$window', function($scope, $window){
                var $btnSave = $('.btn-save'),
                    $btnAdd =  $('.btn-add'),
                    $btnClose = $('.btn-close'),
                    newOne = "true",
                    noteData = {},
                    tempTags = ["#tag1", "#tag2", "#tag3"];
                            
                $scope.saveNote = function(newOne){
                    var self = this;
                    localStorage.setItem(self.noteHeader, JSON.stringify({"message":self.noteText, "tags":tempTags}));
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