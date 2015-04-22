"use strict"

var titles = ["Apps", "Games", "Websites"];
var colors = ["#FF4940", "#1E6D74", "#82B22C"];
var index = 0;

$(window).load(function() {
    
    window.setInterval(function() {
         $("#titles").fadeOut(500, function() {
            $("#titles").text(titles[index]);
            $("#titles").css('color', colors[index]);
            $("#titles").fadeIn(500);
             
            index++;
            if (index >= titles.length){
                index = 0;
            }
         });
    }, 3000);
    
});