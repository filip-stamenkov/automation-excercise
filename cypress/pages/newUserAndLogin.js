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
        // signs up a new user by filling in the name and email fields, then clicking the sign up button
        this.elements.verifyNewUserPageText();
        this.elements.signUpNameInput().type(person.name);
        this.elements.signUpEmailInput().type(person.email);   
        this.elements.signUpButton().click({timeout: 10000});
    }

    loginUser(data){
        // logs in a user by filling in the email and password fields, then clicking the login button
        this.elements.verifyLoginPageText();
        cy.get('[data-qa="login-email"]').type(data.email); 
        cy.get('[data-qa="login-password"]').type(data.password);
        cy.get('[data-qa="login-button"]').click( {timeout: 10000} );
    }
}

export const nual = new newUserAndLogin();