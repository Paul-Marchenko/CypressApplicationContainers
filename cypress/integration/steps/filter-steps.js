const { Given, When, Then } = require('cucumber');
const {expect, should} = require('chai');
import Header from '../pages/Header';
import Base from '../pages/Base';
import Filters from '../pages/Filters';
import MemberContainer from '../pages/membersContainer';


Given('User visits the page', () => {
    cy.visit('http://localhost:3000/');
    
});

When('Application is opnened', () => {
    Base.baseApp.should('be.visible');
});

Then('Filter has Name field', () => {
    Filters.nameField.parents().contains('Name');
});
