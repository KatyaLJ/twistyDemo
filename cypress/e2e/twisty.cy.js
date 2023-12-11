beforeEach(() => {
  cy.viewport(1500,900)
  cy.clearCookies()
  cy.clearLocalStorage();
})
describe('Login Flow', () => {
  it('passes', () => {
    cy.visit('https://twisty.ai/')
    cy.title().should('eq', 'twisty is the AI sandbox for creating amazing videos using just text prompts and your imagination')
    //cy.get('#__next > div > div > div > div.sc-8c4f05eb-0.cDCRlR > div > div.sc-8c4f05eb-6.ichjOg > button > div').contains('Sign up').click()
    cy.get('.sc-c62bb006-2 > .sc-dd6c7c3c-0 > .sc-dd6c7c3c-1 > .sc-dd6c7c3c-3 > .sc-dd6c7c3c-4 > .sc-dd6c7c3c-7').contains('Get Started').click()
    // registro     cy.get('#__next > div > div > div > div.sc-60e21f4a-4.fWGneO > div > div.sc-ae8f10bd-1.jfGsUH > div > div > div > div:nth-child(2) > div > div > div.sc-f19a1eba-0.deTKHM').contains('Username').type('elvialeon')
    cy.get('.sc-ddc6c468-6').contains('Log in').click()
    cy.get('#__next > div > div > div > div.sc-60e21f4a-4.fWGneO > div > div.sc-ae8f10bd-1.jfGsUH > div > div > div > div:nth-child(2) > div > div > div.sc-f19a1eba-3.sVyWl > div > input').should('be.visible', {force: true}).type('elvia@olinadt.com', {force: true})
    cy.get('#__next > div > div > div > div.sc-60e21f4a-4.fWGneO > div > div.sc-ae8f10bd-1.jfGsUH > div > div > div > div:nth-child(3) > div > div > div.sc-f19a1eba-3.sVyWl > div > input').should('be.visible').type('Olinadt123.')
    cy.get('#__next > div > div > div > div.sc-60e21f4a-4.fWGneO > div > div.sc-ae8f10bd-1.jfGsUH > div > div > div > button > div > div').then(()=>{
      cy.get('#__next > div > div > div > div.sc-60e21f4a-4.fWGneO > div > div.sc-ae8f10bd-1.jfGsUH > div > div > div > button > div > div').should('be.visible').click()
    })
    cy.title().should('eq', 'twisty is the AI sandbox for creating amazing videos using just text prompts and your imagination')
  })
})