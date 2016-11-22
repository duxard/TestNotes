"use strict";

angular.module('core').factory('errorBlock', function(){
    var errBlock = $('#error-block');
    return {
        errShow: function(){
            errBlock.css('display', 'block');
        }
    }
})