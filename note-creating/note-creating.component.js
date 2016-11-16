"use strict";

angular.module('noteCreating').component('noteCreating', {
    templateUrl: 'note-creating/note-creating.template.html',
    controller: ['$scope', '$window', function($scope, $window){
                var $btnSave = $('.btn-save'),
                    $btnAdd =  $('.btn-add'),
                    $btnClose = $('.btn-close'),
                    newOne = "true";
                            
                $scope.saveNote = function(newOne){
                    localStorage.setItem(this.noteHeader, this.noteText);
      /****************************************************            
            var header = "one";
            var text = "lorem ipsum dlorum";
            var tags = ['one','two','three'];
            var myObj = {msg: text, hash: tags};
            
            var sObj = JSON.stringify(myObj);
            localStorage.setItem(header , sObj);
            
     /****************************************************/          
                    
                    console.log(localStorage);
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