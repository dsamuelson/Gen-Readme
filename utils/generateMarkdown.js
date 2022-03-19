const generateLicense = require('./gen-license.js');

// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}


// gets the returned license section and link for README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const [ licenseText, licenseLink ] = generateLicense(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    //console.log(data);
    renderLicenseSection(data.license);
    // console.log(licenseText);
    // console.log(licenseLink);
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;