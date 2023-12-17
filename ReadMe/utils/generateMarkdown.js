// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  if(license != "none") {
  badge = "(https://shields.io/badge/license-" + license + "-green)";
}
return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
        break;
        case "Apaches":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";  
        break;
        case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
        break;
        case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
        break;
   default:
      licenseLink = ""
      break
  }
  return licenseLink;
}


// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";

  if (license != "None") {
    licenseSect += "License information: " + renderLicenseLink(license) + "\n";
  }
  return licenseSect;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = [
    "**LICENSE**", 
    "**USERNAME**", 
    "**EMAIL**", 
    "**INSTALL**", 
    "**TITLE**", 
    "**DESCRIPTION**",  
    "**GUIDELINES**", 
    "**TEST**"];

  let markdown = data.title + "\n"

  markdown += renderLicenseBadge(data.license) + "\n";
// Table of Contents
  markdown += "Table of Contents\n";
  for (let i = 0; i < sections.length; i++) {
    if (! (sections[i] === "License" && data.license === "None")) {
      markdown += i + 1 + ". [" + sections[i].toUpperCase() + "](" + sections[i][0] + sections[i].substring(1) + ")\n";
    }
  }

markdown += "\n";


markdown += renderLicenseSection(data.license) + "\n";

markdown += sections[0] + "\n";
markdown += data.license + "\n"

markdown += sections[1] + "\n";
markdown += data.username + "\n";

markdown += sections[2] + "\n";
markdown += data.email + "\n";

markdown += sections[3] + "\n";
markdown += data.install + "\n";

markdown += sections[4] + "\n";
markdown += data.title + "\n";

markdown += sections[5] + "\n";
markdown += data.description + "\n";

markdown += sections[6] + "\n";
markdown += data.guidelines + "\n";

markdown += sections[7] + "\n";
markdown += data.test + "\n";

// Questions
markdown += "My Github:(https://github.com/" + data.username +")\n";
markdown += "Email:" + data.email + "\n"

  return markdown
}

module.exports = generateMarkdown;
