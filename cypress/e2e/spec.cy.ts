describe('Adding a new computer', () => {

  context('Given the user is on the homepage', () => {
    before(() => {
      cy.visit('/')
    })

    context('When the user clicks on the "Add a new computer" button', () => {
      before(() => {
        cy.get('#add').click()
      })

      it('Then the user should be redirected to the add computer page', () => {
       cy.url().should('include', '/computers/new')
      })
    })

    context('When the user enters a computer name, introduced date, discontinued date and company name', () => {
      before(() => {
          cy.get('#name').type('Test Computer')
          cy.get('#introduced').type('2023-04-16')
          cy.get('#discontinued').type('2023-04-18')
          cy.get('#company').select('3')
      })

        it('And clicks on the "Create this computer" button', () => {
        cy.contains('Create this computer').click()
        })
      it('Then the user should be redirected to the homepage', () => {
       cy.url().should('include', '/computers')
      })
      it('And the computer name should be displayed in a confirmation alert', () => {
        cy.contains('Done ! Computer Test Computer has been created').should('exist')
      })
    })
  })
})






describe('Adding a new computer without computer name', () => {

  context('Given the user is on the homepage', () => {
    before(() => {
      cy.visit('/')
    })

    context('When the user clicks on the "Add a new computer" button', () => {
      before(() => {
        cy.get('#add').click()
      })

      it('Then the user should be redirected to the add computer page', () => {
       cy.url().should('include', '/computers/new')
      })
    })

    context('When the user enters introduced date, discontinued date and company name', () => {
      before(() => {
          cy.get('#introduced').type('2023-04-16')
          cy.get('#discontinued').type('2023-04-18')
          cy.get('#company').select('3')
      })

        it('And clicks on the "Create this computer" button', () => {
        cy.contains('Create this computer').click()
        })
      it('Then the user should remain in the add computer page ', () => {
      cy.contains("Create this computer").should('exist')
      cy.contains("Add a computer").should('exist')
      })
      it('And the user should see an error indicating that the computer name is required', () => {
        cy.get('.error').should('exist')
      })
    })
  })
})




describe('editing a computer name', () => {
  context('Given the user is on the homepage', () => {
    before(() => {
      cy.visit('/')
    })
  

    context('When the user clicks on the a computer name', () => {
      before(() => {
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').invoke('text').as('textFunction');
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
      })

      it('Then the user should be redirected to the add computer page to edit the computer record', () => {
       cy.url().should('not.include', '/computers/new').and('include', '/computers/')
      })
    })

    context('When the user edits computername, introduced date, discontinued date and company name', () => {
      before(() => {
          
          cy.get('#name').type('1')
          cy.get('#introduced').clear().type('2023-04-16')
          cy.get('#discontinued').clear().type('2023-04-18')
          cy.get('#company').select('3')
      })

        it('And clicks on the "Save this computer" button', () => {
        cy.contains('Save this computer').click()
        })
      it('Then the user should be redirected to the homepage', () => {
      cy.url().should('include', '/computers')
      })
      it('And the new computer name and details should be displayed in a confirmation alert', () => {
        
        cy.contains('1 has been updated ').should('exist')
      })
    })
  })
})