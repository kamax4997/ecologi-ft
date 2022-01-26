// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const { parse: parseQueryParams } = require('qs')

// NOTE: add to the Chainable interface all the custom cypress commands
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    currentURL(options?: any): Chainable
  }
}

Cypress.Commands.add('currentURL', (options = {}) => {
return cy.window().location('pathname', { timeout: 120000, ...options })
})
