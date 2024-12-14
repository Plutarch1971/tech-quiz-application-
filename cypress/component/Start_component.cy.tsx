// cypress/component/Quiz.cy.test.jsx
import { mount } from 'cypress/react18';
import Quiz from '../../client/src/components/Quiz';

describe('Start Component', () => {
    it('should start the quiz correctly', () => {
        mount(<Quiz />);
        cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json', delay: 3000 }).as('getQuestions');
        cy.get('button').contains('Start Quiz').click();
    });
});
