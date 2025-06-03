import { common } from "../pages/commonComponents";
import { person } from "../fixtures/testData.json";
import { navBar } from "../pages/navigationBar";

describe('Verify Subscription Button on multiple pages', () => { 

    beforeEach(() => {
        cy.visit('/');
        cy.url().should('eq', 'https://automationexercise.com/');
        // Verify that you are on the home page
    });

    it('Should verify Subscription button in Home page', () => {
    // Test Case 10: Verify Subscription in home page
        cy.scrollToBottom();
        common.verifySubscriptionFieldExists();
        common.enterEmailAndSubscribe(person.email);
    });

    it('Should verify Subscription button in Cart page', () => {
    // Test Case 11: Verify Subscription in Cart page
        navBar.clickCartButton();
        common.verifySubscriptionFieldExists();
        common.enterEmailAndSubscribe(person.email);
    });

});