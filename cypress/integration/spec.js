describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Great success!')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('关于我们').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /blog', () => {
		cy.get('nav a').contains('博客').click();
		cy.url().should('include', '/blog');
	});
});