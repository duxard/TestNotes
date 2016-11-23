"use strict";

angular.module('core').service('errorBlock', function(){
    var $errBlock = $('.error-block'),
        $errorText = $('.error-text');

    this.errShow = function(){
        $errBlock.css('display', 'block');
    };
    this.errMsg = function(text){
        $errorText.html(text);
    };
    this.errHide = function(){
        $errBlock.css('display', 'none');
    };
});