// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// this const represents the htmlCode() function that's in the file page_html_template.js
const html_markup = require ('./src/page_html_template');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the name of the employee?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email address?"
    },

]).then((data) => {
    // Generate the finished HTML file
    // The finished HTML file will be found in the "dist" folder
    fs.writeFile("dist/index.html", html_markup(data), err => err ? console.log(err) : console.log('HTML file created!')
)});
