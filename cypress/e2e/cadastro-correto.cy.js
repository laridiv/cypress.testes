import Cadastro from'../support/pages/cadastro/pagina-cadastro'

describe('Página de cadastro', () => {
  it('pasPreencher os campos do formulário corretamente para cadastrar um novo usuário.', () => {
//     cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
//     cy.contains('a', 'Register now').click();
//     cy.get('[data-test="email"]').type('Larissa@gmail.com')
//     cy.get('[data-test="fullName"]').type('Larii Pessoa')
//     cy.get('[data-test="registerUserName"]').type('00123')
//     cy.get('[data-test="registerPassword"]').type('12345678')
//     cy.contains('button', 'Register').click();

Cadastro.acessarPaginaDeCadastro();
Cadastro.preencherFormulario();
Cadastro.submeterCadastro();
   })
})
