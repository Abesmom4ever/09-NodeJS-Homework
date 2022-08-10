// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

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
        name: "UsageInformation",
        message: "What is the use of your project?",
    },
    {
        type: "input",
        name: "ContributionGuidelines",
        message: "Who contributed to the project?",
    },
    {
        type: "input",
        name: "deployedLink",
        message: "What is the link to your deployed project?",
    },
    {
        type: "input",
        name: "githubUser",
        message: "What is your personal GitHub Link?",
    },
];

function createReadme(answers) {
    fs.writeFileSync(
        "./README.md",
        `# ${answers.title}
## Description
${answers.description}
## Installation Instructions
${answers.installation}
## Usage Information
${answers.UsageInformation}
## Contribution Guidelines
${answers.ContributionsGuidelines}
## Deployed Link
[deployed link](${answers.deployedLink})
## GitHub Link
[GitHub Profile](${answers.githubUser})
`,
    );
}

inquirer
    .prompt(questions)
    .then((answers) => {
        createReadme(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("prompts not rendered");
        } else {
            console.error("something went wrong", error);
        }
    });
