import MemberContainer from '../pages/membersContainer';

describe('Application container', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
  
    it('Is moved from Applied to Interviewing colomn', () => {
        
        MemberContainer.moveContainer('emma stewart');
    });

})

