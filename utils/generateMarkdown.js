// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if( license ) {
    return `![GitHub License](https://img.shields.io/badge/license-${license.replace(" ", "_")}-blue.svg)`;
  }
  else {
    return "";
  }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  switch( license ) {
    case 'MIT':
      return '[MIT](https://choosealicense.com/licenses/mit/)';
    case 'Apache 2.0':
      return '[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)';
    case 'GPL 3.0':
      return '[GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/)';

    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if( license ) {
    if( license === 'None' ) {
      return '\n This project is not under any license agreements.';
    }
    else {
      return `\nThis project is licensed under the ${renderLicenseLink(license)} license.`;
    }
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  You may contact the author using the following methods for any questions you might have:
  ### GitHub profile: https://github.com/${data.github}
  ### Email: ${data.email}

  `;
}

module.exports = generateMarkdown;
