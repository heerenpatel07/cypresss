/// <references type="cypress" />

describe('My First Test', () => {

    
    before(function () {
        cy.fixture('example').then(function(data){
           globalThis.data=data
        })
    })

    it('Open yahoomail', () => {

        cy.visit('https://login.yahoo.com/?.src=ym&pspid=1197806870&activity=header-signin&.lang=en-US&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2Fd')
        cy.get('input.phone-no').type(globalThis.data.yahId)
        cy.get('input#login-signin').click()
        cy.get('input.password').type(globalThis.data.yahPass)
        cy.get('button').contains('Next').click()

        cy.wait(6000)
        cy.get('span').contains('Deleted Items').click()

        cy.wait(2000)
        cy.get('ul.M_0 li').should('have.length.greaterThan', 1).then(n => {
            cy.get('ul li.G_e:nth-child(1)').click()
            cy.wait(2000)
            cy.get('.hd_n div.M_1MYwXA:nth-child(3)').click().then(
                cy.get('button').contains('OK').click()
            )
        })
    })
})