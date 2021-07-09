"use strict"
// function (){
//     // js info made in here makes variables non-global
// }

$(document).ready(function(){
    //jQuery designation to make variables non-global for outside users
    var h1 = $("h1");
    console.log(h1);
    alert("hey I am ready for manipulation");
})