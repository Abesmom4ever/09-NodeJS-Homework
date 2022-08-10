# 09 Node.js Challenge: Professional README Generator

## Project

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project.

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN user is prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN user enters my project title
THEN this is displayed as the title of the README
WHEN user enters a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN user chooses a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN user enters their GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN user enters their email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN user clicks on the links in the Table of Contents
THEN user is taken to the corresponding section of the README
```

### Walkthrough Video
