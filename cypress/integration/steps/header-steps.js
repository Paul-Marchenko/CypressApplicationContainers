const { Given, When, Then } = require('cucumber');
const {expect, should} = require('chai');
import Header from '../pages/Header';
import Base from '../pages/Base';

function isItFriday(today){}

Given('User visits the page', function () {
    cy.visit('http://localhost:3000/');
    
});

When('Application is opnened', function () {
    Base.baseApp.should('be.visible');
});

Then('Logo is displayed in the Header', function (string) {
    Header.logo.should('be.visible');
});
