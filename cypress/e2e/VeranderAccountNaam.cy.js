describe('Naam veranderen user', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
    });

    it('User veranderd eigen naam', () => {
        cy.get('.login__account').eq(2).click();
        cy.visit('http://localhost:3000/settings');

        cy.get('.accountName-input').clear()
        cy.get('.accountName-input').type('Rekening van Jan Willem')
        cy.get('button[type="submit"]').click()
    });
})
