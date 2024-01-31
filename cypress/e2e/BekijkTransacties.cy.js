describe('Bekijk transacties', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
    });

    it('User logt in en gaat naar transactie pagina', () => {
        cy.get('.login__account').eq(2).click();
        cy.visit('http://localhost:3000/transactions');
    });
});
