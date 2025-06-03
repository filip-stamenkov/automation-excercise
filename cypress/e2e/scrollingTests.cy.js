import { common } from "../pages/commonComponents";

describe('Page scrolling tests', () => {

beforeEach(() => {
    cy.visit('/');
    cy.url().should('eq', 'https://automationexercise.com/');
    // Verify that you are on the home page
});

it('Scroll to the bottom of the page and click the arrow to go back up', () => {
    // Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
    cy.scrollTo('bottom');
    cy.contains('Subscription').should('be.visible');
    common.elements.scrollUpBtn().should('be.visible').click();
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
});

it('Scroll to the bottom of the page then scroll back up and verify elements', () => {
    //Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality
    cy.scrollTo('bottom');
    cy.contains('Subscription').should('be.visible');
    cy.scrollTo('top');
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
});


});