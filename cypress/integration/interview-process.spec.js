import MemberContainer from '../pages/membersContainer';

describe('Application container', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
  
    it.only('Is moved from Applied to Interviewing colomn', () => {
        MemberContainer.moveContainer('emma stewart');
        // MemberContainer.getMemberInTheColumn('emma stewart', 'Interviewing').should('have.text', "Interviewing");
    });

    it('Is moved from Interviewing to Applied colomn', () => {
        MemberContainer.moveContainer('emma stewart');
        // MemberContainer.getMemberInTheColumn('emma stewart', 'Applied').should('have.text', "Applied");
    });

    it('Is moved from Interviewing to Hired colomn', () => {
        MemberContainer.moveContainer('emma stewart');
        // MemberContainer.getMemberInTheColumn('emma stewart', 'Hired').should('have.text', "Hired");
    });

})

