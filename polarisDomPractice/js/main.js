"use strict"
$(document).ready(function () {
    //1. Use AJAX to grab data from the provided json file and display each row from the data as a bootstrap card within the div with the id card-parent.
    //https://java.codeup.com/jquery/ajax/requests-and-responses/
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

        //2. When you hover over p tag with the id p-for-hover, change its text to "Hovering over a p". When you stop hovering over that p, change its text back to the original text.
        // https://java.codeup.com/jquery/events/mouse-events/
        $('#p-for-hover').hover(
            function() {
                $(this).html("Hovering on a p");
            },
            function() {
                $(this).html("waiting for a hover");
            }
        );
        //3.When you click on any of the three buttons with the class color-button, turn that button's background color to green. When you click on a different color-button, the previously clicked button's color should return to its original color of orange.
        $(".color-button").css({'background-color':'orange',})
        $(".color-button").click(function (){
            $(".color-button").css({'background-color':'orange',})
            $(this).css({'background-color':'green',})
        });

        //4. When you click on the h1 element with the id border-toggle, display a 3px solid red border around it. If you click the border-toggle again, the border disappears.
        //https://java.codeup.com/jquery/essential-methods/attributes-and-css/
        $("#border-toggle").click(function (){
            $(this).toggleClass("h1-border");
        })


        //5. When you click the button with the id add-row, add a row to the table body with id of simple-table-body. The row should have 3 columns (or table data items): the number of the row that is being added (starting with 1 for the first row that is added), "hello", and "world". E.g., the first time you click the add-row button, a row will be appended containing the columns "1", "hello", and "world". The second time you click the add-row button, another row will be appended to the table with the values "2", "hello", and "world". Note that the table is initially empty.
        //
        var rowCounter = 1;
        $("add-row").click(function (){
            var previousHTML = $("#simple-table-body").html();
            var newHTML = `<tr>
                            <td>${rowCounter}</td><!-- old way <td>1</td>-->
                            <td>hello</td>
                            <td>world</td>
                        </tr>`;
            // $("#simple-table-body").html(newHTML);
            $("#simple-table-body").html(previousHTML + newHTML);//concatenating old rows with new ones

            rowCounter++;
        })

        //6. Use JavaScript to add 7 list items to the unordered list with the id lots-of-list-items. The first list item you add should display the text Item 4. The second list item you add should display the text Item 5, and so on.
        //
        var oldLIs = $("#lots-of-list-items").html()// returns current html
        var newLIs = "<li>item 4</li>";
        var newLI = ''
        for (let i = 0; i <= 10; i++) {
            newLI += `<li>Item ${i}</li>`;// creates list item, which is appended later to old one
        }
        // newLIs += "<li>item 4</li>"; could do this up to the requested number
        // $("#lots-of-list-items").html(oldLIs + newLIs)// old version
        $("#lots-of-list-items").html(oldLIs + newLI)// current one


        //7. Whenever any <li> is clicked, display that item's text to console.log
        $("li").click(function (){
            console.log($(this).text());
        });
    })
})