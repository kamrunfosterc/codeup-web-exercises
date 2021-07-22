DOM Manipulation Assessment
Polaris edition
Instructions
Read ALL instructions before beginning the assessment

Clone this repository

Create a branch named first-last where first is your first name and last is your last name

Write your Javascript code inside of main.js to solve the problems below. NOTE: READ ALL the TODOs in main.js !!!

Add and commit throughout the assessment

Don't push your branch until the end of the assessment!

After pushing, you should check GitHub and ensure that your branch was successfully pushed. If you do not push your branch, you will receive a ZERO.

Assessment Tasks
IMPORTANT: please put Question 5, and 6's event listeners inside the addingEventListeners function that is provided for you!!
ALSO IMPORTANT: Test tasks 3, 4, 5, 6, and 7 SEPARATELY, by clicking Refresh before testing just that task. For example, test the row hover color by itself WITHOUT clicking the Striped Mode button.
Fix the function called generateTableData so that it returns the data parameter as a string representing a table data element. When this function is fixed, you will see the id, first_name, and last_name data populating in the table for each user.

Add the rest of the user field information to the table (i.e., email, home_address, and job). You MUST ALSO add the table headers for those three fields: Email, Home Address, and Job

Toggle striped coloring for the table rows when the Striped Mode button is pressed. You can look here for more information about table effects: https://getbootstrap.com/docs/4.0/content/tables/

When the Table Grid button is pressed, toggle a table grid on and off. "Grid" means a 1px solid black, grey, or light brown border surrounding all table cells. Thus, when the grid is on, all table cells should display their borders.

When the user hovers over a row in the table, the row changes to the goldenrod color. When the user stops hovering over that row, the row returns to its original color. Note that Striped Mode may override the hover color when it is toggled on and that is ok. You will receive full credit for this question if the hover color works when Striped Mode is OFF.

When a row is clicked, change the font size of the entire row to 32px. Note that clicking another row MUST return the PREVIOUS row to its original font size.

Add the functionality to the dark-mode-toggle button so that pressing the button alternates between light and dark mode. The application should initially use light mode. Note that "light" mode can mean "not dark" mode. Visually, dark mode should at least include the table rows displaying a dark background color and a light foreground color.

When the user selects a value in the Job drop-down list, the list of users will update to show only those users with the selected job. E.g., if the user selects Intern from the Job drop-down list, then only the users with the job of Intern will display in the table. When All is selected, all users should be displayed.

Grading
All tasks are weighted evenly. A task will be considered correct if the task's implemented behavior matches the behavior in the task's above description. You will receive a ZERO if index.html cannot be opened.