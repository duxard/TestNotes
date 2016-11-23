"use strict";

app.service('AccessService', function(){
    var accessToken = true;
    this.isNotLocked = function(){
        return this.accessToken;
    }
    this.lockModule = function(){
        accessToken = false;
    }
    this.unlockModule = function(){
        accessToken = true;
    }
});