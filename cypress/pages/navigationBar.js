import { common } from "./commonComponents";

class navigationBar{

    elements ={
        signUpLogInBtn:() => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
        accountDeleteBtn:() => cy.get('.shop-menu > .nav > :nth-child(5) > a'),
        logOutBtn:() => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
        testCasesBtnWhenLoggedOut:() => cy.get('.shop-menu > .nav > :nth-child(5) > a'),
        testCasesBtnWhenLoggedIn:() => cy.get('.shop-menu > .nav > :nth-child(6) > a'),
        productsBtn:() => cy.get('.shop-menu > .nav > :nth-child(2) > a'),
        cartBtn:() => cy.get('.shop-menu > .nav > :nth-child(3) > a')
    }

    signUpLogIn(){
        // verifies the sign up / log in button exists and has the correct href then clicks it
        this.elements.signUpLogInBtn()
            .should('have.attr', 'href').and('include', 'login')
        this.elements.signUpLogInBtn().click();
    }

    verifyUserLoggedIn(person){
        // verifies that the user is logged in by checking the text on the navigation bar for his name
        cy.contains('Logged in as ' + person.name).should('be.visible');
        this.elements.signUpLogInBtn()
            .should('have.attr', 'href').and('include', 'logout');
    }

    logoutUser(){
        // clicks the log out button and verifies that the user is logged out by checking the URL
        this.elements.logOutBtn().click();
        cy.url().should('contain', '/login')
    }

    deleteUser(){
        // clicks the delete account button and verifies that the account is deleted by checking the text on the page
        navBar.elements.accountDeleteBtn().click()
        cy.contains('Account Deleted!').should('be.visible');
        common.elements.continueBtn().click();
    }

    clickCartButton(){
        // verifies the cart button exists, has the correct href, clicks it and verifies that the cart page is displayed
        this.elements.cartBtn()
            .should('have.attr', 'href').and('include', 'view_cart');
        this.elements.cartBtn().click();
        cy.contains('Shopping Cart').should('be.visible');
        cy.url().should('contain', '/view_cart')
    }

    clickProductsButton(){
        // verifies the products button exists, has the correct href, clicks it and verifies that the products page is displayed
        this.elements.productsBtn()
            .should('have.attr', 'href').and('include', 'products');
        this.elements.productsBtn().click();
        cy.contains('All Products').should('be.visible');
        cy.url().should('contain', '/products')
    }

    verifyTestCasesButtonExistsAndClickLoggedOut(){
        // if the user is logged out, verifies the test cases button exists, has the correct href, clicks it and verifies that the test cases page is displayed
        this.elements.testCasesBtnWhenLoggedOut().should('have.attr', 'href').and('include', 'test_cases');
        this.elements.testCasesBtnWhenLoggedOut().click();
        cy.url().should('contain', '/test_cases')
    }

    verifyTestCasesButtonExistsAndClickLoggedIn(){
        // if the user is logged in, verifies the test cases button exists, has the correct href, clicks it and verifies that the test cases page is displayed
        this.elements.testCasesBtnWhenLoggedIn().should('have.attr', 'href').and('include', 'test_cases');
        this.elements.testCasesBtnWhenLoggedIn().click();
        cy.url().should('contain', '/test_cases')
    }

}

export const navBar = new navigationBar();