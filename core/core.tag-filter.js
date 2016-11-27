"use strict";

angular.module('core').filter('tagFilter', function(){
    return function(input, searchItem){
        var out = {};
        if(searchItem == '' || searchItem == undefined){
            return input;
        }else if(searchItem == ''){
            return input;
        }
        else{
            angular.forEach(input, function(val, key){
                if(val.tags.some(function(item){
                    //character-oriented search
                    return (item.search(searchItem) != -1);
                })){
                     out[key] = val;
                }
            });
            return out;
        }
    }
 });  
