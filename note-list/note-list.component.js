"use strict";

angular.module('noteList').component('noteList', {
    templateUrl: 'note-list/note-list.template.html',
    controller: ['$scope', '$route', function($scope, $route){
            var objNotes = {};
            for(var i=0; i<localStorage.length; i++){
                objNotes[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i)));
            }
            $scope.collection = objNotes;
        
            //если в отфильтрованном списке 
            //будет удалена какая-либо заметка 
            //страницу нужно будет перезагрузить.
            //ВРЕМЕННОЕ решение
            $scope.watchFilter = function(event){
                if(this.tagName == ""){
                     $route.reload();
                }
            }
            
            $scope.removeNote = function(event){
                var $elem = $(event.target).closest(".note-list"),
                    $headerKey = $elem.find(".header-key").html();
                $elem.remove();
                window.localStorage.removeItem($headerKey);
            }
        }
    ]
});




