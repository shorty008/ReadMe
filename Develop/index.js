// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const readMeQuestions = (answers) => {
    return inquirer.promt([

        //Title question 
        {
            type: 'input',
            name: 'title',
            message: 'Please enter a project title:',
            validate: titleInput => {
                if (titleInput){
                    return true;
                }
                else {
                    console.log('Please enter a project title:');
                    return false;

                }
            }

        },

        //Username question 
        {
        type: 'input',
        name: 'username',
        message: 'Please enter your github username:',
        validate: usernameInput => {
            if (usernameInput){
                return true;
            }
            else {
                console.log('Please enter your github username:');
                return false;
            }
        }
    },

    //email question: 
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
        validate: emailInput => {
            if (emailInput){
                return true;
            }
            else {
                console.log('Please enter your email address:');
                return false;
            }
        }
    },        

        //Description question
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a project description:',
            validate: descriptionInput => {
                if (descriptionInput){
                    return true;
                }
                else {
                    console.log('Please enter a project description:');
                    return false;

                }
            }

        },

        //Installation question 
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter the steps to install your project:',
            validate: installationInput => {
                if (installationInput){
                    return true;
                }
                else {
                    console.log('Please enter the steps to install your project:');
                    return false;

                }
            }
        },


        //Usage question 
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information for your project:',
            validate: usageInput => {
                if (usageInput){
                    return true;
                }
                else {
                    console.log('Please enter usage information for your project:');
                    return false;

                }
            }
        },

        //contribution question 

        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter if someone wants to make contributions for your project:',
            validate: contributionInput => {
                if (contributionInput){
                    return true;
                }
                else {
                    console.log('Please enter usage information for your project:');
                    return false;

                }
            }
        },
        //license question 

        {
            type: 'list',
            name: 'license',
            message: 'Is this project licensed?',
            choices: ['Academic_Free_License', 'Apache_License', 'Creative_Common_License', 'Eclipse_Public_License', 'Mozilla_Public_License', 'NA']

        },
        //tests question 

        {
            type: 'input',
            name: 'test',
            message: 'Please enter how a user tests your project:',
            validate: testInput => {
                if (testInput){
                    return true;
                }
                else {
                    console.log('Please enter how a user tests your project:');
                    return false;

                }
            }
        },
    ])
};

// TODO: Create a function to write README file
const writeToFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) throw new Error(err);

        console.log('You have created a ReadMe! Check it out.');
    })
};

// TODO: Create a function to initialize app
function init() 
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(data => {
        return writeToFile(data);
    })

// Function call to initialize app

init();
