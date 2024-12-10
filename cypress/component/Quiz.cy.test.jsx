// cypress/component/Quiz.cy.test.jsx
import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../src/components/Quiz';

describe('Quiz Component', () => {
    it('should start the quiz correctly', () => {
        mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('.spinner-border').should('be.visible');
    });

    it('should display questions correctly', () => {
        mount(<Quiz />);
        cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');
        cy.get('button').contains('Start Quiz').click();
        cy.wait('@getQuestions');
        cy.get('.card').should('contain', 'Question 1');
    });

    it('should complete the quiz and display the score', () => {
        mount(<Quiz />);
        cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');
        cy.get('button').contains('Start Quiz').click();
        cy.wait('@getQuestions');
        cy.get('button').contains('1').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('4').click();
        cy.get('.alert-success').should('contain', 'Your score:');
    });

    it('should match the snapshot', () => {
        mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('.spinner-border').should('be.visible');
        cy.get('.card').should('matchSnapshot');
    });
});
