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
    //1.- 4.
    alert("Our first paragraph is: " + " " + $("#cool").html());// alerts the content of this element w/ id of cool
    // alert($("#cool").html("This is no longer a cool paragraph"));// changes what's in id cool
    //5. when we use same id on 2 elements, jquery applies change to first encounter with that id
    alert("The first div contains: " + $("#something").html());

    // Class Selectors
    // $(".codeup").css('border', '1px solid red');  //.css('border', '1px solid #F00');
    // 5. giving another element the same class, will apply the same jquery to it
    // 5. giving another class the id of codeup does NOT apply the class css border to this id

    // Element Selectors
    //2.
    // $("li").css('font-size','20px');
    // //3.
    // $("h1").css("background-color","yellow");
    // $("p").css("background-color","green");;
    // $("li").css("background-color","red");;
    //
    // alert($("h1").html()); //alerts our h1


    // Multiple Selectors
    // $("h1, p, li").css("background-color","cyan");


})