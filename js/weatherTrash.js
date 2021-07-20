// https://api.openweathermap.org/data/2.5/onecall?
// lat={lat}&lon={lon}&exclude={part}&appid={API key}
var weatherOptions = {
    appid: OPEN_WEATHER_API_KEY,
    lat: "",// will add later, until then will get error
    lon: "",// will add later, until then will get error
    exclude: "",// will add later, until then will get error
    units: "imperial",
}
var weatherURL = `https://api.openweathermap.org/data/2.5/onecall`
// var map = new mapboxgl.Map({// initial load out location
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 14,//zoom: 15, zoom: 20, zoom: 10,
//     center: [-98.4916, 29.4252]// san antonio
// });

$(document).ready(function (data) {
    console.log(data);// produces array of object
    // mapboxgl.accessToken = mapboxAPIKey;
    $.get(weatherURL, weatherOptions);
    $.get(`.card`).html()
})


//     $.ajax("data/users.json").done(function (data){// issues a request to GET info when done
//
//         var html = "";
//         for (var i = 0; i < 4; i++) {
//             html += `<div class="col card border-light mb-3" style="max-width: 18rem;"> <!--replaced line -->
//                           <div class="card-body">
//                             <h5 class="card-title">${data[i].id}</h5>
//                             <h6 class="card-subtitle mb-2 text-muted">${data[i].first_name} ${data[i].last_Name}</h6>
//                             <p class="card-text">${data[0].email}</p>
//                           </div>
//                     </div>`;
//
//
//             // html += "<div className="card" style="width: 18rem;">\n" +
//             //                <div className="card-body">\n" +
//             //                    <h5 className="card-title">" +data[i].id</h5>\n" +
//             //                    <h6 className="card-subtitle mb-2 text-muted">"Card subtitle</h6>\n" +
//             //                    <p className="card-text">"</p>\n" +
//             //                </div>\n"
//             //            </div>
//
//
//         }
//         $('#card-parent').html(html);
// // fly 2
//
//
//         // $.ajax("data/some-url",{
//         //     type: "POST",
//         //     data: {
//         //         name: "John",
//         //         location: "Boston"
//         //     }
//         // }); //template
//
//         // fetching a json file
//
//         // <div className="col card border-light mb-3" style="max-width: 18rem;">
//         //     <div className="card-header">Day 1</div>
//         //     <div className="card-body">
//         //         <h5 className="card-title">Temp</h5>
//         //         <div>description</div>
//         //         <div>humidity</div>
//         //         <div>wind</div>
//         //         <div>pressure</div>
//         //     </div>
//         // </div>
//
//         //
//
//
//
//
//     })
// })


//##################################################################################################
// TODO need to create marker that's dragged function
// TODO need map info about weather
// TODO need to display city search results