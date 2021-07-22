"use strict"

function renderCoffee(coffee) {
    var html = `<tr class="coffee">
                <td>${coffee.id}</td>
                <td>${coffee.name}</td>
                <td>${coffee.roast}</td>
                </tr>`;

    return html;
}

function renderCoffees(coffees) {
    var html = '';

    // TODO: switch out with forEach loop
    // for (var i = 0; i < coffees.length; i++) {
    //     html += renderCoffee(coffees[i]);
    // }
    // return html;
    coffees.forEach(function (coffee, index){
        console.log(coffee);
        if (index < coffees.length){// this if statement may not be needed
            html += renderCoffee(coffees[index])
        }
        return html;
    })
}

function updateCoffees(event) {

    // This checks to see if an event was passed
    // to the function. If one was we need to
    // preventDefault so we don't refresh the page.
    if (event !== undefined) {
        event.preventDefault();
    }

    $.get("dat/coffees.json").done(function (coffees) {

        var selectedRoast = roastSelection.val();
        var filteredCoffees = [];

        // TODO: switch out with forEach loop
        for (let i = 0; i < coffees.length; i++) {

            if (coffees[i].roast === selectedRoast) {
                filteredCoffees.push(coffees[i]);
            }

        }

        tbody.html(renderCoffees(filteredCoffees));

    }).fail(function (jqXhr, status, error){

        var errorMessage = `Was not able to fetch the coffees \nError: ${error}`;
        console.log(errorMessage);
        tbody.html(errorMessage);

    })
}

var tbody = $('#coffees');
var submitButton = $('#submit');
var roastSelection = $('#roast-selection');

updateCoffees();


submitButton.click(updateCoffees);
