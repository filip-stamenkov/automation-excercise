class newUserAndLogin{

    elements ={
        verifyNewUserPageText:() => cy.contains('New User Signup!').should('be.visible'),
        signUpNameInput:() => cy.get('[data-qa="signup-name"]'),
        signUpEmailInput:() => cy.get('[data-qa="signup-email"]'),
        signUpButton:() => cy.get('[data-qa="signup-button"]'),
    }

    signUpUser(person){
        this.elements.verifyNewUserPageText();
        this.elements.signUpNameInput().type(person.name);
        this.elements.signUpEmailInput().type(person.email);   
        this.elements.signUpButton().click({timeout: 10000});
    }
}

export const nual = new newUserAndLogin();