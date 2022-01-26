describe('Trees Statistics', () => {

  describe('as Guest', () => {
    it('check daily view is configured as true', () => {
      cy
        .visit(`/`)
        .currentURL().should('equal', `/`)
        .get('[data-cy=daily-radio]', { timeout: 1000 }).should('exist')
    })
  })
})
