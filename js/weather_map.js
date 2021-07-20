// https://api.openweathermap.org/data/2.5/onecall?
// lat={lat}&lon={lon}&exclude={part}&appid={API key}
"use strict"

$(document).ready(function () {
    var long = -98.4916;//default longitude
    var lati = 29.4252;//default latitude

    //Map.setCenter(coordinates) play
        mapboxgl.accessToken = mapboxAPIKey;
        var map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [long, lati], // starting position [lng, lat] [-98.4916, 29.4252]
        zoom: 14 // starting zoom
    });

    var marker = new mapboxgl.Marker()// fixed marker set
        .setLngLat([long, lati])// san antonio marker
        .addTo(map);


    var weatherOptions = {
        appid: OPEN_WEATHER_API_KEY,
        lat: lati,
        lon: long,
        units: "imperial",
    }
    var weatherURL = `https://api.openweathermap.org/data/2.5/onecall?`//? is a query operator
    // var weatherIcon = `http://openweathermap.org/img/wn/10d@2x.png`;
    // mapboxgl.accessToken = OPEN_WEATHER_API_KEY;// conflicting entries,
    weatherData()// does initial run of function
    function weatherData() {
        $.get(weatherURL, weatherOptions).done(function (data) {
            // console.log(data.daily);
            $(".card-deck").empty();// will start new card-deck each time we run/ search for new location vs continuous stacking it

            data.daily.forEach(function (day, index) {//index creates one for each element like or i in fori
                console.log(day);
                if (index < 5) {
                    // var iconCode = day.weather[0].icon;
                    // var weatherIcon = `http://openweathermap.org/img/wn/10d@2x/.png`;
                    var date = new Date((day.dt)*1000);// date conversion part
                    var html = "";// as we loop through we add to html starting with this empty string
                    html = `<div class="card" style="width: 18rem;">
                                  <div class="card-header">
                                    ${date}<!--need to convert-->
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">High ${day.temp.max}/Low ${day.temp.min}</li>
                                    <li class="list-group-item">${day.weather[0].icon}</li>
                                    <li class="list-group-item">Description: ${day.weather[0].description}</li>
                                    <li class="list-group-item">Humidity: ${day.humidity}</li>
                                    <li class="list-group-item">Wind: ${day.wind_speed}mph</li>
                                    <li class="list-group-item">Pressure: ${day.pressure}hPa</li>
                                  </ul>
                            </div>`
                    //${} tells to put in dynamic data, variable, property anything
                    $(".card-deck").append(html);// add cards into our html
                }
            })
        });// used to get weather data from api
    }

    $("#find").click(function (e){
        e.preventDefault()
        //need geo code
        // console.log($("#search").val());// .val allows us to accept value being put in any element

         geocode($("#search").val(), mapboxAPIKey)
            .then(function (coordinates) {
                long = coordinates[0];
                lati = coordinates[1];
                console.log(coordinates)
                weatherOptions.lat = lati;// making change here to affect var outside of this function
                weatherOptions.lon = long;

                weatherData()// reseting after
        })
    })



    //
    // var popup = new mapboxgl.Popup()
    //     .setLngLat([-98.4916, 29.4252])// san antonio popup
    //     .setHTML(`<p>WEATHER MAP!</p>`)
    //     .addTo(map);
    //
    // marker.setPopup(popup)// attaches popup to marker
})// end of document

//TODO: think about things in terms of the map & the weather seperately