import Filters from '../pages/Filters';
import MemberContainer from '../pages/membersContainer';

describe('Filters', () => {
   beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });

   it('has name field', () => {
      Filters.nameField.parents().contains('Name');
   });

   it('has city field', () => {
      Filters.cityField.parents().contains('City');
   });

   it('is filtered by name field for correct user name', () => {
      Filters.filteringByName('emma');
      MemberContainer.memberName.should('contain','emma stewart');
      MemberContainer.memberName.should('not.contain', 'linda ruiz')
   });

   it('is filtered by city field for correct city name', () => {
      Filters.filteringByCity('worcester');
      MemberContainer.memberName.should('contain','worcester');
      MemberContainer.memberName.should('not.contain','liverpool');
   });

   it('for name field is cleaned if "Clear" button is clicked', () => {
      Filters.filteringByName('emma');
      MemberContainer.memberName.should('contain','emma stewart');
      Filters.clearButton.click();
      MemberContainer.memberName.should('contain', 'linda ruiz')
      MemberContainer.memberName.should('contain','emma stewart');
   });

   it('is not filtered by name field for incorrect user name', () => {
      Filters.filteringByName('qweqweqwer');
      MemberContainer.memberName.should('not.contain','emma stewart');
   });

   it('is not filtered by city field for incorrect city name', () => {
      Filters.filteringByCity('wtywedwq');
      MemberContainer.memberName.should('not.contain','worcester');
   });

   it('is not filtered for unmatched values between user name field and city name', () => {
      Filters.filteringByName('emma');
      Filters.filteringByCity('liverpool');
      MemberContainer.memberName.should('not.contain','emma stewart');
      MemberContainer.memberName.should('not.contain', 'linda ruiz');
   });
});
