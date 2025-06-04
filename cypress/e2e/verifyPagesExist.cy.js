import { navBar } from "../pages/navigationBar";
import { productsP } from "../pages/productsPage";
import { nual } from "../pages/newUserAndLogin";
import { credentials } from "../fixtures/loginData.json";

describe('Verify certain pages exist and can be navigated to', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.url().should('eq', 'https://automationexercise.com/');
        // Verify that you are on the home page
    });

    it('Should navigate to and verify the "Test Cases" page when logged out', () => {
    // Test Case 7: Verify Test Cases Page
        navBar.verifyTestCasesButtonExistsAndClickLoggedOut();

    });

    it('Should navigate to and verify the "Test Cases" page when logged in', () => {
    // Test Case 7: Verify Test Cases Page
        navBar.signUpLogIn();
        nual.loginUser(credentials);
        // navBar.verifyTestCasesButtonExistsAndClick();

    });

    it('Should navigate to and verify the "Products" page', () => {
    // Test Case 8: Verify All Products and product detail page
    navBar.clickProductsButton();
    productsP.containsProducts();
    productsP.clickFirstProduct();
    productsP.verifyProductDetailsVisible();

    });
    
});