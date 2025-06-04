
class commonComponents{

    elements = {
        continueBtn:() => cy.get('[data-qa="continue-button"]'),
        scrollUpBtn:() => cy.get('#scrollUp'),
        subscribeField:() => cy.get('#susbscribe_email'),
        subscribeBtn:() => cy.get('#subscribe')
    }

    verifySubscriptionFieldExists(){
        // verifies that the subscription field is visible on the page
        cy.contains('Subscription').should('be.visible');
    }

    enterEmailAndSubscribe(email) {
        // enters the provided email into the subscription field and clicks the subscribe button, then verifies the success message
        this.elements.subscribeField().should('be.visible').type(email);
        this.elements.subscribeBtn().should('be.visible').click();
        cy.get('.alert-success').should('contain', 'You have been successfully subscribed!');
    }
}

export const common = new commonComponents();