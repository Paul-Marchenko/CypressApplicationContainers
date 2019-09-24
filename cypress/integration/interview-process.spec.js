import MemberContainer from '../pages/membersContainer';

describe('Application container', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
  
    it('Is moved from Applied to Interviewing colomn', () => {
        MemberContainer.moveContainerRight('emma stewart');
        MemberContainer.getMemberInTheColumn('emma stewart', 'Interviewing').should('have.text', "emma stewart");
    });

    it('Is moved from Interviewing to Applied colomn', () => {
        MemberContainer.moveContainerRight('emma stewart');
        MemberContainer.moveContainerLeft('emma stewart');
        MemberContainer.getMemberInTheColumn('emma stewart', 'Applied').should('have.text', "emma stewart");
    });

    it('Is moved from Interviewing to Hired colomn', () => {
        MemberContainer.moveContainerRight('emma stewart');
        MemberContainer.moveContainerRight('emma stewart');
        MemberContainer.getMemberInTheColumn('emma stewart', 'Hired').should('have.text', "emma stewart");
    });

})

