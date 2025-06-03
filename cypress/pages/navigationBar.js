import { common } from "./commonComponents";

class navigationBar{

    elements ={
        signUpLogInBtn:() => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
        accountDeleteBtn:() => cy.get('.shop-menu > .nav > :nth-child(5) > a'),
        logOutBtn:() => cy.get('.shop-menu > .nav > :nth-child(4)')
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
        navBar.elements.logOutBtn().click();
    }

    deleteUser(){
        navBar.elements.accountDeleteBtn().click()
        cy.contains('Account Deleted!').should('be.visible');
        common.elements.continueBtn().click();
    }
}

export const navBar = new navigationBar();