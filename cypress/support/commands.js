import { navBar } from '../pages/navigationBar.js';
import { common } from "../pages/commonComponents.js";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('createUser', (person) => {
    cy.request({
        method: 'POST', 
        url: 'https://automationexercise.com/api/createAccount',
        form: true, // indicates that the body is form-encoded
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
            "name": person.name,
            "email": person.email,
            "password": person.password,
            "title": person.title,
            "firstname": person.firstName,
            "lastname": person.lastName,
            "company": person.company,
            "address1": person.address,
            "address2": person.address2,
            "country": person.country,
            "state": person.state,
            "city": person.city,
            "zipcode": person.zipcode,
            "mobile_number": person.mobileNumber,
            "newsletter": person.newsletter,
            "birth_date": person.day,
            "birth_month": person.month,
            "birth_year": person.year,
        },
     }).then((response) => {
        expect(response.status).to.eq(200)
        // expect(response.body).to.equal("User created!")        
  });
});

Cypress.Commands.add('deleteUser', (person) => {
    cy.request({
        method: 'DELETE', 
        url: 'https://automationexercise.com/api/deleteAccount',
        form: true, // indicates that the body is form-encoded
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
            "email": person.email,
            "password": person.password,
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        // expect(response.body).to.equal("User created!")        
  })
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })