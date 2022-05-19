// TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
const renderLicenseBadge = (data) => {
  var licenseBadge = `${data.license}`;

  if (licenseBadge === "NA") {
    return ``;
  } else {
    return `![Github license](http://img.shields.io/badge/License-${licenseBadge}-blue.svg)`;
  }
};

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
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## License
  ${data.license}

  ## Questions?
  You can find my projects at [GitHub Repo] https://github.com/${data.username}
  [Contact Us] ${data.email}
  `;
}

module.exports = generateMarkdown;
