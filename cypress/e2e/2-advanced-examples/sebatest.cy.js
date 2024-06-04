/// <reference types="cypress-xpath" />

describe('Test Sebas', ()=> {
  beforeEach('SebasTest',()=>{
    cy.visit('https://digital-banking.onlab.internal') });

it('login',()=>{
  cy.wait(15000)
  cy.xpath('//*[@id="lab-document"]').type('rachel')
  cy.wait(5000)
  cy.get('#lab-password').type('Inversiones2022')
  cy.wait(4000)
  cy.get('#continue').click()
  cy.wait(8000)
})




/*
describe('Test Sebas', ()=> {
    beforeEach('SebasTest',()=>{
      cy.visit('https://www.google.com/?hl=es') });
    
    afterEach('limpiaremos el input en cada caso nuevo',()=>{
      cy.get('#APjFqb').clear();
    });  
      
    
    it('primner caso de prueba', ()=>{
    cy.xpath('//*[@id="APjFqb"]').type('ole')
    cy.get('#APjFqb').clear()
    cy.xpath('//*[@id="APjFqb"]').type('diario el sol')
    cy.contains('diario el sol policiales').click()
    cy.wait(3000)
    cy.scrollTo(0, 500)
    cy.wait(3000)
    cy.scrollTo(500,1200)
    
  } );

  it('este es un segundo caso de prueba', ()=>{
    cy.get('#APjFqb').type('club atletico river plate')
    cy.wait(3000)
  })
*/
} );