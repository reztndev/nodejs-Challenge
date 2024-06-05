// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

const fs = require( 'fs' );

const fileName = "README.md";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose the license this project.',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What is the installation instruction?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage of the project?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the guidelines for contributing to this project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the instructions for testing the app?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub user name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  }
]

const promptUser = () => {
  return inquirer.prompt(questions); 
}

// TODO: Create a function to write README file
function writeToFile(fileName, content) {
    fs.writeFile( fileName, content, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
  //console.log("Creating README.md file...");
  promptUser()
  .then((answers) => writeToFile(fileName, generateMarkdown( answers) ));
};

// Function call to initialize app
init();
