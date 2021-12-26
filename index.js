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
const createTeam = (answer) => {
    console.log ("new member", answer)
    fs.writeFile("dist/index.html", html_markup(answer), err => err ? console.log(err) : console.log('HTML file created!')
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
        /* {
            type: "list",
            name: "role",
            message: "Please select your role.",
            choices: ["Intern", "Engineer", "Manager"],
        }, */
    ])
    answer.role = position;
    console.log(answer);
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
        console.log(githubAnswer);
        //createTeam(answer);
         
        const newEngineer = new Engineer(
            answer.name,
            answer.email,
            answer.id,
            answer.role,
            githubAnswer.github,
        );
        console.log(newEngineer);
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
        console.log(managerAnswer);
        //createTeam(answer);

        const newManager = new Manager(
            answer.name,
            answer.email,
            answer.id,
            answer.role,
            managerAnswer.officeNumber,
        );
        console.log(newManager);
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
        console.log(internAnswer)
        //createTeam(answer);
    
        const newIntern = new Engineer(
            answer.name,
            answer.email,
            answer.id,
            answer.role,
            internAnswer.school,
        );
        console.log(newIntern);
        StaffData.push(newIntern); 
    }
    console.log(StaffData)
    nextAction();
}

// Prompt whether user wants to add intern or engineer or finish
const nextAction = async () => {
    /* Prompt whether you want to add intern or engineer or finish
    - If user wants to add intern or engineer
        - Run FUNCTION "Run basic prompt" (intern or engineer)
    - Else If user wants to finish it
        - Run FUNCTION: Generate HTML */

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

        console.log(answers);
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
                console.log(answers.position);
                questions(answers.position);
            })
            
        } else {
            console.log("Generate html")
        }

    })

    
}

/*const addNewMemberAnswer = inquirer
    .prompt([
        {
            type: "list",
            name: "addNewMember",
            message: "Please choose the following option.",
            choices: ["Create a team", "Add new member"]
        }
    ])

    if(addNewMemberAnswer.addNewMember === "Add new member") {
    
    }
    // return createTeam ();
*/
    


questions("Manager")

