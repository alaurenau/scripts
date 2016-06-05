// ==UserScript==
// @name         tapochek.net
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  tapochek.net adblock helper, clicks on ad modal window
// @author       alaurenau
// @match        http://tapochek.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var loading = true;
    function clear() {
        var divs = document.querySelectorAll("body > div > div");
        for (var i = 0; i < divs.length; i++) {
            if (divs[i].style.backgroundImage == "url(\"/images/dialog-close.png\")") {
                divs[i].click();
            }
        }
        console.log("removing ad");
    }

    window.addEventListener('click', function() {
        clear();
    }, false);

    window.addEventListener('load', function() {
        clear();
        loading = false;
}, false);
})();
