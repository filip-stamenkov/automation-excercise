class newUserAndLogin{

    elements ={
        verifyNewUserPageText:() => cy.contains('New User Signup!').should('be.visible'),
        verifyLoginPageText:() => cy.contains('Login to your account').should('be.visible'),
        verifyWrongCredentialsText:() => cy.contains('Your email or password is incorrect!').should('be.visible'),
        verfiyAccountExistsText:() => cy.contains('Email Address already exist!').should('be.visible'),
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

    loginUser(data){
        this.elements.verifyLoginPageText();
        cy.get('[data-qa="login-email"]').type(data.email); 
        cy.get('[data-qa="login-password"]').type(data.password);
        cy.get('[data-qa="login-button"]').click( {timeout: 10000} );
    }
}

export const nual = new newUserAndLogin();