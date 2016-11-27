"use strict";

angular.module('core').factory('tagsService', function(){
    return {
        findTags: function(str){
            var arr = [],
                result = [];
            arr = str.match(/(^|\s)(#\w+)\b/g);
            if(arr !== null){
                result = arr.map(function(item){
                    //removing new lines
                    var str = item.replace(/\n/g,'');
                    //removing spaces & hashtags in the beginning of the tags
                    if(str.charAt(0) === " "){
                        return str.substr(2);
                    }else{
                        return str.substr(1);
                    }
                }); 
            }
            return result;
        }
    }
});