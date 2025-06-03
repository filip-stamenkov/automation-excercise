import { navBar } from "../pages/navigationBar";
import { productsP } from "../pages/productsPage";

describe('Verify certain pages exist and can be navigated to', () => {

beforeEach(() => {
    cy.visit('/');
    cy.url().should('eq', 'https://automationexercise.com/');
    // Verify that you are on the home page
});

it('Should navigate to and verify the "Test Cases" page', () => {
// Test Case 7: Verify Test Cases Page
        navBar.verifyTestCasesButtonExistsAndClick();

});

it.only('Should navigate to and verify the "Products" page', () => {
// Test Case 8: Verify All Products and product detail page
    navBar.clickProductsButton();
    productsP.containsProducts();
    productsP.clickFirstProduct();
    productsP.verifyProductDetailsVisible();
});

});