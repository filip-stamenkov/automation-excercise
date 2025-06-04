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
        this.elements.signUpLogInBtn()
            .should('have.attr', 'href').and('include', 'login')
        this.elements.signUpLogInBtn().click();
    }

    verifyUserLoggedIn(person){
        cy.contains('Logged in as ' + person.name).should('be.visible');
        this.elements.signUpLogInBtn()
            .should('have.attr', 'href').and('include', 'logout');
    }

    logoutUser(){
        this.elements.logOutBtn().click();
        cy.url().should('contain', '/login')
    }

    deleteUser(){
        navBar.elements.accountDeleteBtn().click()
        cy.contains('Account Deleted!').should('be.visible');
        common.elements.continueBtn().click();
    }

    clickCartButton(){
        this.elements.cartBtn()
            .should('have.attr', 'href').and('include', 'view_cart');
        this.elements.cartBtn().click();
        cy.contains('Shopping Cart').should('be.visible');
        cy.url().should('contain', '/view_cart')
    }

    clickProductsButton(){
        this.elements.productsBtn()
            .should('have.attr', 'href').and('include', 'products');
        this.elements.productsBtn().click();
        cy.contains('All Products').should('be.visible');
        cy.url().should('contain', '/products')
    }

    verifyTestCasesButtonExistsAndClickLoggedOut(){
        this.elements.testCasesBtnWhenLoggedOut().should('have.attr', 'href').and('include', 'test_cases');
        this.elements.testCasesBtnWhenLoggedOut().click();
        cy.url().should('contain', '/test_cases')
    }

    verifyTestCasesButtonExistsAndClickLoggedIn(){
        this.elements.testCasesBtnWhenLoggedIn().should('have.attr', 'href').and('include', 'test_cases');
        this.elements.testCasesBtnWhenLoggedIn().click();
        cy.url().should('contain', '/test_cases')
    }

}

export const navBar = new navigationBar();