// describe('Api Alurapic', () => {
//     it('Dados da API', () => {
//             cy.request({
//                 method: 'POST',
//                 url: 'https://alurapic-api.onrender.com/user/login',
//                 body: Cypress.env()
//             }).then((res) => {
//                 expect(res.status).to.be.equal(200)
//                 expect(res.body).is.not.empty
//                 expect(res.body).to.have.property('id')
//                 expect(res.body.id).to.be.equal(130)
//             })
//     })
// })



describe('Api Alurapic', () => {

    // código comentado omitido…
    
        it('Fotos do usuário', () => {
            cy.request({
                method: 'GET' ,
                url: ' https://alurapic-api.onrender.com/00123/photos?page=1'
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body[3]).to.have.property('description')
                expect(res.body[3].description).to.be.equal('flor')
                
            })
        })
    })
    
    