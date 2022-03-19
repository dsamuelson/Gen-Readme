// packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// mock data for testing

const mockData = {
    projectName: 'Test',
    userName: 'David Samuelson',
    userGithub: 'dsamuelson',
    userEmail: 'dsamuelson89@gmail.com',
    otherCont: true,
    contNames: 'Jen Klimeck, Stacy Irwin',
    description: 'This is a test run to see how the information will be displayed',
    installation: 'download to computer and run in node.js',
    usage: 'run the index.js file and answer the prompts',
    license: 'Unlicense',
    features: true,
    featureList: "It's cool<>It's hot<>It's ok",
    contribute: true,
    contributeList: 'contact me first<>fork the project<>when ready file a merge request',
    yesTests: true,
    testList: 'Testing<>testing<>testing123',
    yesQuestions: true,
    questionsList: 'Please send an email first before contributing'
  };

// array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?(Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your name?(Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userGithub',
        message: 'What is your github name?(Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email?(Required)'
        // validate: nameInput => {
        //     if (nameInput.contains('*@*.com')) {
        //         return true;
        //     } else {
        //         console.log('Please enter your email');
        //         return false;
        //     }
        // }
    },
    {
        type: 'confirm',
        name: 'otherCont',
        message: 'Were there any other contributors?',
        default: false
    },
    {
        type: 'input',
        name: 'contNames',
        message: 'Please put other contributors names here:',
        when: ({ otherCont }) => {
            if (otherCont) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description (not required but advised)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What do we need to do to install the project?(required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please give us any usage instructions"
    },
    {
        type: 'list',
        name: 'license',
        message: "What license does this fall under?",
        choices: ['None','Unlicense','MIT','Boost','Apache', 'Mozilla', 'GNU AGPLv3','GNU GPLv3', 'GNU LGPLv3'],
        validate: choiceMade => {
            if (choiceMade) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'features',
        message: "Did you want to include a list of features?",
        default: false
    },
    {
        type: "input",
        name: "featureList",
        message: 'Please enter your list of features:(put a <> between features if you want them on multiple lines)',
        when: ({ features }) => {
            if (features) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'contribute',
        message: "Did you want to include instructions for contribution?",
        default: false
    },
    {
        type: "input",
        name: "contributeList",
        message: 'Please enter your instructions for contribution:(put a <> between features if you want them on multiple lines)',
        when: ({ contribute }) => {
            if (contribute) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'yesTests',
        message: "Did you want to include a section for tests and examples?",
        default: false
    },
    {
        type: "input",
        name: "testList",
        message: 'Please enter your tests and examples(put a <> between features if you want them on multiple lines)',
        when: ({ yesTests }) => {
            if (yesTests) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'yesQuestions',
        message: 'Did you want to provide additional instructions for questions?',
        default: false
    },
    {
        type: 'input',
        name: 'questionsList',
        message: "Please provide instructions for people who are looking to have questions answered",
        when: ({ yesQuestions }) => {
            if (yesQuestions) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// inquirer.prompt(questions).then(answers => console.log(answers));

// write README file
function writeToFile(fileName, data) {}

// initialize app
function init() {
    generateMarkdown(mockData);
}

// call to initialize app
init();