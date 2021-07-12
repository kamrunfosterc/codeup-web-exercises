"use strict";
// MOUSE EVENTS
// alert("Checking that this is imported");

// $("h1").click("background-color","blue");// resource .css("background-color", "blue")

//*************** *************** *************** *************** *************** ***************
// JQuery mouse event EXERCISE
$("h1").click(function (event){
    $(this).css("background-color", "orange");//will change background color when we click on h1
    $(this).css("color", "#fff")
});

$("p").dblclick(function (event){
    $(this).css("font-size", "18px");//change fontsize to 18px when double clicked, goes per paragraph we click on
});

$("li").hover(function (event){
    // lets us know how many times we've hovered over a function both on and off
    //if passed w/ another function, this should only be hover in
    $(this).css("color", "red");// hover in
}, function (e){
    // hover out/away
    $(this).css("color", "black"); // hover out
});
//*************** *************** *************** *************** *************** ***************


//*************** *************** *************** *************** *************** ***************
// JQuery Keyboard event EXERCISE

//*************** *************** *************** *************** *************** ***************