import Base from '../../pages/Base';
import Filters from '../../pages/Filters';

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";


Given('User visits the Application', () => {
    cy.visit('http://localhost:3000/');
});

When('Application is opened', () => {
    Base.baseApp.should('be.visible');
});

Then('has Name field', () => {
    Filters.nameField.parents().contains('Name');
});