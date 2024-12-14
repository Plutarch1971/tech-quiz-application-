// cypress/component/Quiz.cy.test.jsx
import { mount } from 'cypress/react18';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    // Stub the API call with fixture data
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
  });

  it('should display questions correctly', () => {
    // Mount the component
    mount(<Quiz />);

    // Click the start quiz button
    cy.get('button').contains('Start Quiz').click();

    // Wait for the questions to be loaded
    cy.wait('@getQuestions', { timeout: 10000 })
      .then((interception) => {
        // Log the full questions data for debugging
        cy.log('Intercepted questions:', JSON.stringify(interception.response?.body));
        
        // Ensure questions were actually loaded
        expect(interception.response?.body).to.have.length.greaterThan(0);
      });

    // Check for the presence of a question
    cy.get('.card', { timeout: 10000 })
      .should('be.visible')
      .then(($card) => {
        // Log the actual card text for debugging
        cy.log('Card text:', $card.text());
      });

    // Use a more generic check that the card contains a question mark
    cy.get('.card')
      .should('contain.text', '?');

    // Optionally, check the number of answer buttons
    cy.get('.card button.btn-primary')
      .should('have.length.greaterThan', 0);
  });
});
