"use strict";

angular.module('core').factory('tagsService', function(){
    return {
        findTags: function(str){
            var arr = [],
                result = [];
            arr = str.match(/(^|\s)(#\w+)\b/g);
            if(arr !== null){
                result = arr.map(function(item){
                    //removing spaces & hashtags in the beginning of the tags
                    if(item.charAt(0) === " "){
                        return item.substr(2);
                    }else{
                        return item.substr(1);
                    }
                }); 
            }
            return result;
        }
    }
});