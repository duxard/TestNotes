"use strict";

angular.module('noteList').component('noteList', {
    templateUrl: 'note-list/note-list.template.html',
    controller: ['$scope', function($scope){
        
//            var arrNotes = [];
//            for(var i=0, len = localStorage.length; i<len; i++){
//                var objKey = localStorage.key(i);
//                var objVal = localStorage.getItem(localStorage.key(i));
//                arrNotes.push([objKey, objVal])               
//            }
            var objNotes = {};
            for(var i=0; i<localStorage.length; i++){
                objNotes[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i)));
            }
            console.log(objNotes);
        
            $scope.collection = objNotes;
            
            $scope.removeNote = function(event){
                var $elem = $(event.target).closest(".note-list"),
                    $headerKey = $elem.find(".header-key").html();
                $elem.remove();
                window.localStorage.removeItem($headerKey);
                
            }
        }
    ]
});




