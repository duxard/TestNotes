"use strict";

angular.module('core').factory('errorBlock', function(){
    var $errBlock = $('.error-block'),
        $errorText = $('.error-text');
    return {
        errShow: function(){
            $errBlock.css('display', 'block');
            return this;
        },
        errMsg: function(text){
            $errorText.html(text);
        },
        errHide: function(){
            $errBlock.css('display', 'none');
        }
    }
})