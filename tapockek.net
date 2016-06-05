// ==UserScript==
// @name         tapochek.net add remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
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
