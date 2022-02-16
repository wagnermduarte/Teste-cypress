const { cyan } = require("colorette");

describe("Tickets",() => {
 beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))
 it("fill all the text input fields", () =>{
  
  cy.contains("First Name").should("exist");
  cy.contains("Last Name").should("exist");
  cy.contains("Email").should("exist");
  cy.contains("Ticket Quantity").should("exist");
  cy.contains("Ticket Type").should("exist");
  
  //cy.get('#submit').should("disabled");
  cy.get('#first-name').type("João");
  cy.get('#last-name').type("da Silva"); 
  cy.get('#email').type("exemplodeemail-email.com");
  cy.get('#email.invalid').should("exist");
  cy.get("#email").clear();
  cy.get('#email').type("exemplodeemail@email.com");
  
  cy.get('#ticket-quantity').select("2");
  cy.get('#friend').click();
  cy.get('#friend').click();
  cy.get('#publication').click();
  cy.get('#vip').click();

  cy.get('#agree').click();
  //cy.get('[type="submit"]').click();
  
 })
})
