// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `![For more information on licence please check this ](https://choosealicense.com/licenses/)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)} 
  ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Licence](#licence)
* [Contributing](#contributing)
* [Testts](#tests)
* [Contact](#contact)



  ### Description
  ${data.description}

  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### Licence
  ${renderLicenseSection(data.Licence)}

  ### Contributing
  ${data.Contributing}

  ### Tests
  ${data.tests}

  ### Contact
  If you have any questions please reach us at  ${data.email}

  Please check my other projects at 
  ![Github Profile](https://github.com/${data.github})
  



`;
}

module.exports = generateMarkdown;
