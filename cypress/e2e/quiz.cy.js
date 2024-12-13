// cypress/e2e/quiz.cy.test.js
describe('Tech Quiz End-to-End Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should start the quiz and display the first question', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('.spinner-border').should('be.visible');
        cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');
        cy.wait('@getQuestions');
        cy.get('.card').should('contain', 'Question 1');
    });

    it('should complete the quiz and display the score', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');
        cy.wait('@getQuestions');
        cy.get('button').contains('1').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('4').click();
        cy.get('.alert-success').should('contain', 'Your score:');
    });

    it('should restart the quiz after completion', () => {
        cy.get('button').contains('Start Quiz').click();
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