//node modules
const fs = require('fs');
const html_markup = require('./src/page_html_template.js');
const inquirer = require('inquirer');

// New hire modual
const Intern = require('./library/Intern.js');
const Engineer = require('./library/Engineer.js');
const Manager = require('./library/Manager.js');

//Answers to Questions array
const StaffData = [];

// Uses the HTML template to generate the HTML file
const createTeam = () => {
    fs.writeFile("dist/index.html", html_markup(StaffData), err => err ? console.log(err) : console.log('HTML file created! See dist folder for the file.')
    );
} 

//Array of questions asked to users
const questions = async (position) => {
  const answer = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the name of the " + position + ".",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the email address of the " + position + ".",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your ID number of the " + position + ".",
        }, 
    ])
    answer.role = position;
    positionQs (answer);
}

// Ask questions based on the employee's position
const positionQs = async (answer) => {

    // If employee is an Engineer
    if (answer.role === "Engineer") {
        const githubAnswer = await inquirer.prompt([
            {
            type: "input",
            name: "github",
            message: "Enter your Github user name.",
            },  
        ])
         
        const newEngineer = new Engineer(
            answer.name,
            answer.email,
            answer.id,
            answer.role,
            githubAnswer.github,
        );
        StaffData.push(newEngineer); 

    // If employee is a Manager
    } else if (answer.role === "Manager") {
        const managerAnswer = await inquirer.prompt([
            {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
            }, 
        ])

        const newManager = new Manager(
            answer.name,
            answer.email,
            answer.id,
            answer.role,
            managerAnswer.officeNumber,
        );
        StaffData.push(newManager);

    // If employee is an intern
    } else if (answer.role === "Intern") {
        const internAnswer = await inquirer.prompt([
            {
            type: "input",
            name: "school",
            message: "Enter in the name of the university you attented.",
            },  
        ])
    
        const newIntern = new Intern(
            answer.name,
            answer.email,
            answer.id,
            answer.role,
            internAnswer.school,
        );
        StaffData.push(newIntern); 
    }
    nextAction(StaffData);
}

// Prompt whether user wants to add intern or engineer or finish
const nextAction = async () => {

    //Prompt whether you want to add intern or engineer or finish
    const userSelection = await inquirer.prompt([
        {
            type: "list",
            name: "nextAction",
            message: "Please select what you would like to do next.",
            choices: ["Add a new employee", "Finish"],
        }
    ])
    .then((answers) => {

        if (answers.nextAction === "Add a new employee") {
            const newPosition = inquirer.prompt([
                {
                    type: "list",
                    name: "position",
                    message: "Please select the employee's position.",
                    choices: ["Engineer", "Intern"],
                }
            ])
            .then((answers) => {
                questions(answers.position);
            })
            
        } else {
            createTeam();
        }

    })

}

questions("Manager")

