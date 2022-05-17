// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var license = `${templateData.licenses}`;
  
  if (license === 'NA'){
   return ``
  }
  else {
    return `![Github license](http://img.shields.io/badge/License-${license}-blue.svg)`
  }
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return '
  ${renderLicenseBadge(license)}

  # ${templateData.title}

  ## Description
  ${templateData.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)

  ## Installation
  ${dtemplateData.instructions}

  ## Usage
  ${templateData.usage}

  ## Contributing
  ${templateData.contribution}

  ## Tests
  ${templateData.test}

  ## License
  ${templateData.licenses}

  ## Questions?
  You can find my projects at [GitHub Repo] (https://github.com/${templatedata.username})
  
  [Contact Us] (${templateData.email})
`;
}

module.exports = generateMarkdown;
