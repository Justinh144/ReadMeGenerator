// TODO: Include packages needed for this application
const fs = require('fs').promises;
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache']
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'list',
    name: 'license',
    message: 'Which license will you use?',
    choices: licenses
  },
  {
    type: 'input',
    name: 'username',
    message: 'Github username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Email address:',
  },
  {
    type: 'input',
    name: 'install',
    message: 'Installation procedures:',
  },
  {
    type: 'input',
    name: 'title',
    message: 'Project title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:'
  },
  {
    type: 'input',
    name: 'guidelines',
    message: 'Guidelines for project:'
  },
  {
    type: 'input',
    name: 'test',
    message: 'How to test:',
  },
];

// TODO: Create a function to write README file
async function writeToFile(data) {
    const filename = "./Deploy/README.md";

    // const uppercaseData = data.toUpperCase();

    try {
      await fs.writeFile(filename, data);
      console.log(`${filename} + ' created!`);
    } catch (err) {
      console.error('Error creating file:', err);
    }
  }

// TODO: Create a function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdownData = generateMarkdown(answers);
    await writeToFile(markdownData);
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}
// Function call to initialize app
init();
