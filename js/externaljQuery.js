"use strict"
// function (){
//     // js info made in here makes variables non-global
// }

$(document).ready(function(){
    //jQuery designation to make variables non-global for outside users
    // var h1 = $("h1");
    // console.log(h1);
    // console.log(h1.html("Kamrun was here"))
    // alert("hey I am ready for manipulation");
    //
    // var aDiv = $("#something"); //jquery id call
    // var bDiv = $(".content"); //jquery class call
    // var stuff = $("img, .content");// grabs multiple things, collection
    // var image = $("img");
    //
    // image.css('width','50%')
    // image.css('border', 'solid 5px red')
    // // img.css({'width': '50%', 'border': 'solid 5px green'})// here how we add multiple at this time, turn into object
    //
    // bDiv.addClass("imgStuff")// adds our styling to html without using separate css
    // $("*").css('background-color', 'cyan')// all selected and styled here


    // SELECTORS EXERCISE
    // Id Selectors h1, p, ul, li
    alert($("#cool").html());// alerts what is in id cool
    alert($("#cool").html("This is no longer a cool paragraph"));// changes what's in id cool
    $("p");
    $("ul");
    $("li");


    // Class Selectors

    // Element Selectors

    // Multiple Selectors


})