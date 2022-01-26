// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// TODO: figure out how to make this work as a module
// then turn on isolatedModules on the cypress tsConfig
// also enable linting on cypress
require('./commands')

// NOTE: add to the Chainable interface all the custom cypress commands
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    currentURL(options?: any): Chainable
  }
}

Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('uncaught:exception', err)
  // returning false here prevents Cypress from
  // failing the test
  return false
})

