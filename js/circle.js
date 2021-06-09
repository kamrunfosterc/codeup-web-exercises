'use strict';
document.write('Circles.JS Exercise');

(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {// sets up equation for function
            // TODO: complete this method
            const pi = Math.PI;
            var area = pi * (Math.pow(this.radius, 2));
            // console.log("*****" + area + "*****");
            // hint: area = pi * radius^2
            return area; //circle.getArea(area);
            // TODO: return the proper value
        },


        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(doRounding === true){
                var area = pi * (Math.pow(this.radius, 2));
                //console.log(Math.round(circle.logInfo());
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(area));

                // If doRounding is true, round the result to the nearest integer.
            } else {
                //console.log(Math.floor(circle.logInfo());
                // Otherwise, output the complete value
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));
        }
    };

    var calc_area = circle.getArea();// gives circle area a variable to call

    var circ_first = Math.floor(calc_area);


    // log info about the circle
    console.log("Raw circle information");
    //console.log("Area = " + circle.getArea());// calls area of circle
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number " + circ_first);
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number" + Math.floor(calc_area));
    circle.logInfo(true);
    console.log(circle.getArea());// calls area of circle

})();

/*
* redifined area in logInfo
*
*
*
* */