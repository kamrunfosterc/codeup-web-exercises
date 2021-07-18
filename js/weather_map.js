
mapboxgl.accessToken = mapboxAPIKey;

// https://api.openweathermap.org/data/2.5/onecall?
// lat={lat}&lon={lon}&exclude={part}&appid={API key}
var weatherOptions = {
    lat: "",// will add later, until then will get error
    lon: "",// will add later, until then will get error
    exclude: "",// will add later, until then will get error
    appid: OPEN_WEATHER_API_KEY,
}

var weatherURL = `https://api.openweathermap.org/data/2.5/onecall`

$(document).ready(function () {

    $.get(weatherURL, weatherOptions);

    $.ajax("data/users.json").done(function (data) {// ajax used only to read data from this section , when completed
        //our done function will take over and complete the loop in the for fumnction
        console.log(data);// produces array of object
        var html = "";
        for (var i = 0; i < 4; i++) {
            // html += "<div className="card" style="width: 18rem;">\n" +
            //                <div className="card-body">\n" +
            //                    <h5 className="card-title">" +data[i].id</h5>\n" +
            //                    <h6 className="card-subtitle mb-2 text-muted">"Card subtitle</h6>\n" +
            //                    <p className="card-text">"</p>\n" +
            //                </div>\n"
            //            </div>
            html += `<div class="card" style="width: 18rem;">
                          <div class="card-body">
                            <h5 class="card-title">${data[i].id}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${data[i].first_name} ${data[i].last_Name}</h6>
                            <p class="card-text">${data[0].email}</p>
                          </div>
                    </div>`;
        }
        $('#card-parent').html(html);
        // fetching a json file


})