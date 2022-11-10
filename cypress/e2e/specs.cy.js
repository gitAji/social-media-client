describe("My First Test", () => {
  it('finds the content "type"', () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should("include", "/commands/actions");
    // Get an input, type into it and verify
    // that the value has been updated
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
    cy.get(".action-focus")
      .focus()
      .should("have.class", "focus")
      .prev()
      .should("have.attr", "style", "color: orange;");

    cy.get(".action-form").find('[type="text"]').type("HALFOFF");
    cy.get(".action-form")
      .submit()
      .next()
      .should("contain", "Your form has been submitted!");
    cy.get('.action-check [type="checkbox"]')
      .check(["checkbox1", "checkbox3"])
      .uncheck(["checkbox1", "checkbox3"])
      .should("not.be.checked");
  });
});
