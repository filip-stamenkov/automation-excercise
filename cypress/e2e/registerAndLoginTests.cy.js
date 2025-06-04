import {person} from '../fixtures/testData.json';
import {credentials, incorrectCredentials} from '../fixtures/validLogin.json';
import {navBar} from '../pages/navigationBar.js';
import {nual} from '../pages/newUserAndLogin.js';
import {signUpUser} from '../pages/signUpPage.js';

describe('Register and Login test cases', () => {

    beforeEach(() => {

        cy.visit('/')

        cy.url().should('eq', 'https://automationexercise.com/')
        //verify that you are on the home page
    })

    it('Should register a new user', () => {
    // Test Case 1: Register User
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

    it('Login User with correct email and password', () => {
    // Test Case 2: Login User with correct email and password
        cy.createUser(person);

        navBar.signUpLogIn();

        nual.loginUser(person);

        navBar.verifyUserLoggedIn(person);

        navBar.deleteUser();

    });

    it('Login User with incorrect email and password', () => {
    // Test Case 3: Login User with incorrect email and password

        navBar.signUpLogIn();

        nual.loginUser(incorrectCredentials);

        nual.elements.verifyWrongCredentialsText();

    });

    it('Should logout the user', () => {
    // Test Case 4: Logout User

        cy.createUser(person);

        navBar.signUpLogIn();

        nual.loginUser(person);

        navBar.verifyUserLoggedIn(person);

        navBar.logoutUser();

    });

    it('Should Try to register user with existing email', () => {
    // Test Case 5: Register User with existing email
        navBar.signUpLogIn();

        nual.signUpUser(credentials);

        nual.elements.verfiyAccountExistsText();

    });

    afterEach(() => {
        cy.deleteUser(person);
        //delete the user after each test to ensure a clean state for the next test
    });

});