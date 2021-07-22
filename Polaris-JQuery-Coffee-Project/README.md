Coffee Project
Congratulations! You have landed your first development job! You have inherited a project from Fancy Coffee Company©, and they want you to make improvements to it.

Setup
Clone this repo.
Create your own branch.
Switch to said branch.
Read everything before you start.
TODO
access the project

Take a look at the project and familiarize yourself with how the inner workings of main.js work. Run the index.html and make sure the project is working. If any immediate issues are found, that stop the project from running, fix them.

Add Jquery's document.ready() function to the js file.

Replace any fori loops with forEach() loops.

Add functionality to search through the coffees by name, and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this)

Add functionality to update the displayed coffee as the user types into the search box, or as soon as they select an option from the select.

Make your name search case-insensitive.

Add an option to select all roasts for roast type

Make sure that your search and filter pieces work together.

Update the HTML

Tables are a little old school, you need to refactor the code so that each coffee is displayed in a div that contains a heading displaying the coffee name, and the type of roast in a paragraph. Don't display the ids, these are only for our application's internal use

Style it!

The page looks pretty plain as it is, bring bootstrap 4.6 into the project and style your page with bootstrap to look close to the example.

Bonus
Allow the user to add new coffees to the page

Create another form on the page that has an input for the coffee name, and a select to choose the coffee roast. When the form is submitted, the new coffee should appear on the page. (Note that any new coffees you add will be lost when you refresh the page, for an extra challenge, research how localStorage works and see if you can find a way to persist the data)

Example
Here is an example demonstrating the above functionality. Your application might look different, but should have the same features.