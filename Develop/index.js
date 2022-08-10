// TODO: Include packages needed for this application
const chalk = require("chalk");
const fs = require("fs");
const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is your project all about?",
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?",
    },
    {
        type: "input",
        name: "deployedLink",
        message: "What is the link to your deployed project?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function createReadme(answers) {
    fs.writeFileSync(
        "./README.md",
        `
    # ${answers.title}
    ## Description
    ${answers.description}
    ## Installation Instructions
    ${answers.installation}
    ## Deployed Link
    [deployed link](${answers.deployedLink})
    `,
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
    .prompt(questions)
    .then((answers) => {
        createReadme(answers);
        console.log(chalk.green("successfully created README"));
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("prompts not rendered");
        } else {
            console.error("something went wrong", error);
        }
    });
