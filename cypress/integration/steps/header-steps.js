const { Given, When, Then } = require('cucumber');
const {expect, should} = require('chai');
import Header from '../pages/Header';
import Base from '../pages/Base';


Given('User visits the page', () => {
    cy.visit('http://localhost:3000/');
    
});

When('Application is opnened', () => {
    Base.baseApp.should('be.visible');
});

Then('Logo is displayed in the Header', () => {
    Header.logo.should('be.visible');
});
