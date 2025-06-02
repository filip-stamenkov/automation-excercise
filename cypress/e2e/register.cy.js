import {person} from '../fixtures/testData.json';
import {navBar} from '../pages/navigationBar.js';
import {nual} from '../pages/newUserAndLogin.js';
import {signUpUser} from '../pages/signUpPage.js';

describe('Register and Login functionality', () => {
    beforeEach(() => {
        cy.visit('http://automationexercise.com');
    })

    it('Should register a new user', () => {

        cy.url().should('eq', 'https://automationexercise.com/')
        //verify that you are on the home page

        navBar.signUpLogIn();
        //click the Signup/Login button and view the signup/login forms

        nual.signUpUser(person);
        //verify that the signup for the user is displayed and can be filled out

        signUpUser.createAccount(person);
        //verify that the account creating form is displayed and can be filled out

        signUpUser.verifyAccountCreated();
        //verify that the account was created successfully
        
        navBar.verifyUserLoggedIn(person);
        //verify that the user is logged in and it's displayed on the navigation bar

        navBar.deleteUser();
        //verify that the user can see the delete account button and the account deletion is successful
    });

});