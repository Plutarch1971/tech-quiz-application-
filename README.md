<h1 style="text-align:center;">Tech Quiz Application</h1>

## Description

This is a full-stack web application that allows users to test their technical knowledge through an interactive quiz. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this application presents users with 10 random technical questions and provides a final score.

## Features

- 10-question tech quiz with randomized questions
- Immediate feedback during quiz
- Score tracking
- Ability to start a new quiz

## Installation

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB

### Setup Steps

1. Clone the repository
```bash
git clone https://github.com/Plutarch1971/tech-quiz-application-.git

cd tech-quiz-application
```

### Install dependencies:
#### Install root dependencies
```bash
npm install
```

#### Install client dependencies:
```bash
cd client
npm install
```

#### Install server dependencies:
```bash
cd ../server
npm install
```

### Running the Application
Development Mode

### Start server
```bash
cd server
npm run start
```

### In another terminal, start client
```bash
cd client
npm run start
```

### Testing with Cypress
Run all tests:
```bash
npm run test
```

###  Test Types
Component Tests<br>
Located in cypress/component

Tests individual React component functionality
Verifies component rendering and interactions

End-to-End Tests<br>
Located in cypress/e2e/quiz.cy.js

Simulates complete user journey
Validates application flow from start to finish

## Technologies 
Frontend: React<br>
Backend: Node.js, Express.js<br>
Database: MongoDB<br>
Testing: Cypress



## Walkthrough Video
https://youtu.be/5sMvZwwIHBc
## Contributing

### Fork the repository
Create your feature branch 
```bash
    git checkout -b feature/AmazingFeature
```
Commit your changes
```bash
git commit -m 'Add some AmazingFeature'
```
Push to the branch
```bash
git push origin feature/AmazingFeature
```
Open a Pull Request

License
Distributed under the MIT License. See LICENSE for more information.

Contact
Matthew Mendez   
Email: matthewpmendez@gmail.com<br>
Project Link: https://github.com/Plutarch1971/tech-quiz-application-.git
