const generateLicense = require('./gen-license.js');

// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge = '';
    if (license !== 'None') {
     licenseBadge = `https://img.shields.io/badge/License-${license}-success`;
    } else {
     licenseBadge = `https://img.shields.io/badge/License-${license}-inactive`;
    }
    return licenseBadge;
}


// gets the returned license section and link for README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const [ licenseText, licenseLink ] = generateLicense(license);
    return `## License
    Link: ${licenseLink}
    
    License Terms:
    ${licenseText}
    `
}

// Check data entered in and form the contents and table of contents
// These get pushed to an array which is sent to the markdown text

function renderContents(sections) {
  const tocArr = [];
  const tocArrCont = [];
  if (sections.otherCont) {
    tocArr.push('- [Contributors](#Contributors)');
    tocArrCont.push('## Contributors' + sections.contNames + '\n');
  }
  if (sections.features) {
    tocArr.push('- [Features](#Features)');
    tocArrCont.push('## Features\n' + sections.featureList + '\n');
  }
  if (sections.contribute) {
    tocArr.push('- [Contribute](#Contribute)');
    tocArrCont.push('## Contribute\n' + sections.contributeList + '\n');
  }
  if (sections.yesTests) {
    tocArr.push('- [Tests](#Tests)');
    tocArrCont.push('## Tests\n' + sections.testList + '\n');
  }
  if (sections.installation) {
    tocArr.push('- [Installation](#Installation)');
    tocArrCont.push('## Installation\n' + sections.installation + '\n');
  }
  if (sections.usage) {
    tocArr.push('- [Usage](#Usage)');
    tocArrCont.push('## Usage' + sections.usage + '\n')
  }
  tocArr.push('- [License](#License)')
  
  return [tocArr.toString().replace(/,/g , '\n'), tocArrCont.toString().replace(/,/g , '\n')];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(renderContents(data)[1]);
  return `# ${data.projectName}
  ![${data.license} badge](${renderLicenseBadge(data.license)})
  ## Table of Contents
  ${renderContents(data)}
`;
}

module.exports = generateMarkdown;