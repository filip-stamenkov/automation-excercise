import {common} from './commonComponents';
class signUpPage{

    elements ={
        verifyEnterAccInfoVisible:() => cy.contains('Enter Account Information').should('be.visible'),
        nameInput:() => cy.get('[data-qa="name"]'),
        emailInput:() => cy.get('[data-qa="email"]'),
        passwordInput:() => cy.get('[data-qa="password"]'),
        daysSelect:() => cy.get('[data-qa="days"]'),
        monthsSelect:() => cy.get('[data-qa="months"]'),
        yearsSelect:() => cy.get('[data-qa="years"]'),
        newsletterCheckbox:() => cy.get('#newsletter'),
        firstNameInput:() => cy.get('[data-qa="first_name"]'),
        lastNameInput:() => cy.get('[data-qa="last_name"]'),
        companyInput:() => cy.get('[data-qa="company"]'),
        addressInput:() => cy.get('[data-qa="address"]'),
        address2Input:() => cy.get('[data-qa="address2"]'),
        countrySelect:() => cy.get('[data-qa="country"]'),
        stateInput:() => cy.get('[data-qa="state"]'),
        cityInput:() => cy.get('[data-qa="city"]'),
        zipcodeInput:() => cy.get('[data-qa="zipcode"]'),
        mobileNumberInput:() => cy.get('[data-qa="mobile_number"]'),
        createAccountButton:() => cy.get('[data-qa="create-account"]')
    }

    createAccount(person){
        // fills in the account creation form with the provided person's details and submits it
        this.elements.verifyEnterAccInfoVisible();
        this.elements.nameInput().should('have.value', person.name);
        this.elements.emailInput().should('have.value', person.email);
        this.elements.passwordInput().type(person.password);
        this.elements.daysSelect().select(person.dayOfBirth);
        this.elements.monthsSelect().select(person.monthOfBirth);
        this.elements.yearsSelect().select(person.yearOfBirth);
        if(person.newsletter) {
            this.elements.newsletterCheckbox().check();
        }
        this.elements.firstNameInput().type(person.firstName);
        this.elements.lastNameInput().type(person.lastName);
        this.elements.companyInput().type(person.company);
        this.elements.addressInput().type(person.address);
        this.elements.address2Input().type(person.address2);
        this.elements.countrySelect().select(person.country);
        this.elements.stateInput().type(person.state);
        this.elements.cityInput().type(person.city);
        this.elements.zipcodeInput().type(person.zipcode);
        this.elements.mobileNumberInput().type(person.mobileNumber);
        this.elements.createAccountButton().click();
    }

    verifyAccountCreated(){
        // verifies that the account creation was successful by checking for the confirmation message
        cy.contains('Account Created!').should('be.visible')
        common.elements.continueBtn().click();
    }
}

export const signUpUser = new signUpPage();