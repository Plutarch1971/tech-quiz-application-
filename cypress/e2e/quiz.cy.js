// cypress/e2e/quiz.cy.test.js
describe('Tech Quiz End-to-End Tests', () => {
    beforeEach(() => {
        //Wait for the application to load completely
        cy.visit('/');
        
    });

    it('should start the quiz and display the first question', () => {
        //Use a more robust selector
        cy.get('button').contains('Start Quiz', {timeout: 10000}).should('be.visible').click();

        //Verify the first question is displayed
        cy.get('.card').should('be.visible');
    });

    it('should complete the quiz and display the score', () => {
         //Use a more robust selector
        cy.get('button').contains('Start Quiz', {timeout: 10000}).should('be.visible').click();
        //Add more detailed logging
        cy.log('Start Quiz button visible');
        //Intercept and wait for questions
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('.alert-success').should('contain', 'Your score:');
    });

    it('should restart the quiz after completion', () => {
        cy.get('button').contains('Start Quiz', {timeout: 10000}).should('be.visible').click();
        //Add more detailed logging
        cy.log('Start Quiz button visible');
        //Intercept and wait for questions
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('.alert-success').should('contain', 'Your score:');
        cy.get('button').contains('Take New Quiz', {timeout: 10000}).should('be.visible').click();

 });
});