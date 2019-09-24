import Base from '../../pages/Base';
import Filters from '../../pages/Filters';

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then} ){
    Given('User visits the page', () => {
        cy.visit('http://localhost:3000/');
        
    });

    When('Application is opnened', () => {
        Base.baseApp.should('be.visible');
    });

    Then('Filter has Name field', () => {
        Filters.nameField.parents().contains('Name');
    });

});
