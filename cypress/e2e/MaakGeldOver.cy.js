describe('Maak geld over', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
    });

    it('User kan geld overmaken met euro', () => {
        cy.get('.login__account').eq(2).click();
        cy.visit('http://localhost:3000/transfer');

        cy.get('select[name="toaccount"]').select('Sara Ravestein')
        cy.get('.transfer__currency').select('€')
        cy.get('.amount-input').type(10)
        cy.get('textarea[name="description"]').type('test overboeken')
        cy.get('button[type="submit"]').click()

    });
})
