"use strict";

angular.module('core').filter('tagFilter', function(){
    return function(input, search){
        var out = {};
        if(search == '' || search == undefined){
            return input;
        }else if(search == ''){
            return input;
        }
        else{
            angular.forEach(input, function(val, key){
                if(val.tags.some(function(item){return item == search})){
                     out[key] = val;
                }
            });
            return out;
        }
    }
 });  
