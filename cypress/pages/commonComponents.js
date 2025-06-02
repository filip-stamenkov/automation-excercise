
class commonComponents{
    elements = {
        continueBtn:() => cy.get('[data-qa="continue-button"]'),
    }
}


export const common = new commonComponents();