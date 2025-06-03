
class commonComponents{
    elements = {
        continueBtn:() => cy.get('[data-qa="continue-button"]'),
        scrollUpBtn:() => cy.get('#scrollUp')
    }
}


export const common = new commonComponents();