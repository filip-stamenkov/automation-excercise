class productsPage{

    elements = {
        featureItems:() => cy.get('.features_items'),
        firstProduct:() => cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a'),
        productName:() => cy.get('.product-information h2'),
        productCategory:() => cy.get('.product-information > :nth-child(3)'),
        productPrice:() => cy.get(':nth-child(5) > span'),
        productAvailability:() => cy.get('.product-information > :nth-child(6)'),
        productCondition:() => cy.get('.product-information > :nth-child(7)'),
        productBrand:() => cy.get('.product-information > :nth-child(8)')
    }

    containsProducts(){
        this.elements.featureItems().should('be.visible');
        this.elements.featureItems().children().should('have.length.greaterThan', 0);
    }

    clickFirstProduct(){
        this.elements.firstProduct().should('be.visible').click();
        cy.url().should('contain', '/product_details');
        cy.contains('Write Your Review').should('be.visible');
    }

    verifyProductDetailsVisible(){
        this.elements.productName().should('be.visible').and('not.be.empty');
        this.elements.productCategory().should('be.visible').and('contain', 'Category');
        this.elements.productPrice().should('be.visible').and('contain', 'Rs');
        this.elements.productAvailability().should('be.visible').and('contain', 'Availability');
        this.elements.productCondition().should('be.visible').and('contain', 'Condition');
        this.elements.productBrand().should('be.visible').and('contain', 'Brand');
    }
}

export const productsP = new productsPage();