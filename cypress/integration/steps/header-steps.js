import Header from '../../pages/Header';
import Base from '../../pages/Base';

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}){
    Given('User visits the Application', () => {
        cy.visit('http://localhost:3000/');
        
    });

    When('Application is opnened', () => {
        Base.baseApp.should('be.visible');
    });

    Then('Logo is displayed in the Header', () => {
        Header.logo.should('be.visible');
    });
});
