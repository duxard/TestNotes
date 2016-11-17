"use strict";

angular.module('core').factory('tagsService', function(){
    return {
        findTags: function(str){
            var arr = [];
            arr = str.match(/(^|\s)(#\w+)\b/g);
            return arr;
        }
    }
});