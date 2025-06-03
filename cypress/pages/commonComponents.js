
class commonComponents{
    elements = {
        continueBtn:() => cy.get('[data-qa="continue-button"]'),
        scrollUpBtn:() => cy.get('#scrollUp'),
        subscribeField:() => cy.get('#susbscribe_email'),
        subscribeBtn:() => cy.get('#subscribe')
    }

    verifySubscriptionFieldExists(){
        cy.contains('Subscription').should('be.visible');
    }

    enterEmailAndSubscribe(email) {
        this.elements.subscribeField().should('be.visible').type(email);
        this.elements.subscribeBtn().should('be.visible').click();
        cy.get('.alert-success').should('contain', 'You have been successfully subscribed!');
    }
}


export const common = new commonComponents();