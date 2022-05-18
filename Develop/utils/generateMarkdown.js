// TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {
  var license = `${data.licenses}`;

  if (license === "NA") {
    return ``;
  } else {
    return `![Github license](http://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)

  ## Installation
  ${data.instructions}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## License
  ${data.licenses}

  ## Questions?
  You can find my projects at [GitHub Repo] https://github.com/${data.username}
  
  [Contact Us] ${data.email}
  `;
}

module.exports = generateMarkdown;
