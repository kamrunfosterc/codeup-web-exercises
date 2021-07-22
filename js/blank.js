$(document).ready(function (){
    $ajax("data/blank_data.json").done(function (data){
        var html = "";
        for (let i = 0; i < 4; i++) {
            //some code
        }

        html +=
            `<div class="card" style="width: 18rem">
                    <div class="card-body">
                        <h5 class="card-title">${data[i].id}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <p class="card-text"></p>
                    </div>
                </div>`
    })

})