import Header from '../../pages/Header';
import Base from '../../pages/Base';

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";


Given('User visits the Application', () => {
    cy.visit('http://localhost:3000/');
        
});

When('Application is opnened', () => {
    Base.baseApp.should('be.visible');
});

Then('Logo is displayed in the Header', () => {
    Header.logo.should('be.visible');
});