// cypress/e2e/quiz.cy.test.js
describe('Tech Quiz End-to-End Tests', () => {
    beforeEach(() => {
        //Wait for the application to load completely
        cy.visit('/', {
            onBeforeLoad(win) {
                //Clear any existing state
                win.localStorage.clear();
            }
        });
        //Add an explicit wait to ensure page is fully loaded
       // cy.wait(1000);

        // Wait for the specific element that indicates the page is fully loaded
        cy.get('body').should('be.visible');
        cy.get('button').contains('Start Quiz', { timeout: 10000 }).should('be.visible');
        //Log the entire page content for debugging
        cy.get('body').then(($body) => {
            cy.log('Page content:', $body.html());
            
            // List all buttons on the page
            const buttons = $body.find('button');
            cy.log(`Found ${buttons.length} buttons`);
            buttons.each((index, button) => {
                cy.log(`Button ${index}: ${button.textContent}`);
            });
        });
    });

    it('should start the quiz and display the first question', () => {
        //Use a more robust selector
        cy.get('button').contains('Start Quiz', {timeout: 10000}).should('be.visible').click();

        //Add more detailed logging
        cy.get('.spinner-border').should('be.visible').then(() => {
            cy.log('Spinner is visible');
        });
        //Intercept and wait for questions
        cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
        cy.wait('@getQuestions');

        //Verify the first question is displayed
        cy.get('.card').should('contain', 'Question 1');
    });

    it('should complete the quiz and display the score', () => {
         //Use a more robust selector
        cy.get('button').contains('Start Quiz', {timeout: 10000}).should('be.visible').click();
        //Add more detailed logging
        cy.log('Start Quiz button visible');
        //Intercept and wait for questions
        cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');
        cy.wait('@getQuestions');
        cy.get('button').contains('1').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('4').click();
        cy.get('.alert-success').should('contain', 'Your score:');
    });

    it('should restart the quiz after completion', () => {
        //Use a more robust selector
        cy.get('button').contains('Start Quiz',{ timeout: 10000}).should('be.visible').click();
        //Add more detailed logging
        cy.log('Start Quiz button visible');
        //Intercept and wait for questions
        cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');
        cy.wait('@getQuestions');
        cy.get('button').contains('1').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('4').click();
        cy.get('.alert-success').should('contain', 'Your score:');
        cy.get('button').contains('Start New Quiz').click();
        cy.get('.spinner-border').should('be.visible');
        cy.get('.card').should('contain', 'Question 1');
    });
});