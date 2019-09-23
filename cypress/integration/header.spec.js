
import Header from '../pages/Header';

describe('Header', () => {
   beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

   it('Has logo', () => {
    Header.logo.should('be.visible');
   });

   it('Has title', () => {
    Header.appHeader.should('have.text', 'OpenOceanStudio: Crew Applications');
   });
   
});