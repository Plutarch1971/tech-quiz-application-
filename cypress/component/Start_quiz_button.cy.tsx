// cypress/component/Quiz.cy.test.jsx
import { mount } from 'cypress/react18';
import Quiz from '../../client/src/components/Quiz';

describe('Start Quiz', () => { 
    it('should complete the quiz and display the score', () => {
        mount(<Quiz />);
        cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
        cy.get('button').contains('Start Quiz').click();
        cy.wait('@getQuestions');
        cy.get('button').contains('1').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('4').click();
        //cy.get('.alert-success').should('contain', 'Your score:');
    });

});
