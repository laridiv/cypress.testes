
describe('Página de login', () => {
  it('Preencher os campos do login corretamente e realizar login.', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

    cy.get('[data-test="loginUserName"]').type('00123')
    cy.get('[data-test="loginPassword"]').type('12345678')
   
    cy.contains('button', 'login').click();
  })
})