describe('Uitloggen test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
    });

    it('Laat de user uitloggen', () => {
        cy.get('.login__account').eq(2).click();
        cy.get('.app__log , button').click()
    });
});
