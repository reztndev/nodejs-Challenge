// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

//const { writeFile } = require('fs').promises;
const fs = require( 'fs' );

// TODO: Create an array of questions for user input

//let responses;

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?',
      },
      /*{
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
        message: 'What is the recommended approach for testing the app?',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },*/
    ]);
  };

const fileName = "Readme.md";

// TODO: Create a function to write README file
function writeToFile(fileName, content) {
    console.log("in writeToFile(), fileName: ", fileName);
    //console.log("in writeToFile(), content: ", content);

    // writeFile(fileName, content)
    // .then(() => console.log('Successfully wrote markdown file'))
    // .catch((err) => console.error(err));
    fs.writeFile( fileName, content, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );

}

// TODO: Create a function to initialize app
function init() {
    promptUser()
   
    //.then((answers) => writeToFile(fileName, answers));
    .then((answers) => writeToFile(fileName, generateMarkdown( answers) ));
    //.then((answers) => writeToFile("readme.md", generateMarkdown( answers) ));
    // .then(() => console.log('Successfully wrote markdown file'))
    // .catch((err) => console.error(err));
};

// Function call to initialize app
init();
