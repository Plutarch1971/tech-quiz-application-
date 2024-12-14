<h1 style="text-align:center;">Tech Quiz Application</h1>

## Description

A full-stack web application that allows users to test their technical knowledge through an interactive quiz. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this application presents users with 10 random technical questions and provides a final score.

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

## Install dependencies:
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

## Running the Application
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
Component Tests
Located in cypress/component/Quiz.cy.jsx

Tests individual React component functionality
Verifies component rendering and interactions

End-to-End Tests
Located in cypress/e2e/quiz.cy.js

Simulates complete user journey
Validates application flow from start to finish

## Technologies 
Frontend: React
Backend: Node.js, Express.js
Database: MongoDB
Testing: Cypress

Project Structure
tech-quiz-application
├── client/                 # React frontend
├── server/                 # Express.js backend
├── cypress/                # Cypress testing
    ├── component/          # Component tests
    └── e2e/                # End-to-end tests
└── README.md

## Walkthrough Video
[Insert Link to Walkthrough Video Demonstrating Application and Tests]
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
Email: matthewpmendez@gmail.com
Project Link: https://github.com/Plutarch1971/tech-quiz-application-.git
