import { profile } from "console";
import { type } from "os";

describe("empty spec", () => {
  it("passes", () => {
    cy.visit("/");
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get(".modal-dialog").should("be.visible");
    cy.wait(500);
    cy.get("#registerName").type("test7").should("have.value", "test7"),
      cy
        .get("#registerEmail")
        .type("test7@stud.noroff.no")
        .should("have.value", "test7@stud.noroff.no"),
      cy
        .get("#registerPassword")
        .type("12345678")
        .should("have.value", "12345678"),
      cy
        .get("#registerAvatar")
        .type(
          "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        )
        .should(
          "have.value",
          "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        );
    cy.get("#registerForm button").contains("Create Profile").click();
    cy.log("created a new user");
    cy.wait(2000);
    cy.get("[data-auth='logout']").click();
    cy.clearLocalStorage();
    cy.log("User logged out");

    cy.wait(2000);
    cy.get(".modal-dialog").should("be.visible");
    cy.wait(500);
    cy.get("#registerForm [data-auth='login']").click();
    cy.wait(2000);
    cy
      .get("#loginEmail")
      .type("test101@stud.noroff.no")
      .should("have.value", "test101@stud.noroff.no"),
      cy
        .get("#loginPassword")
        .type("12345678")
        .should("have.value", "12345678");
    cy.get("#loginForm button").contains("Login").click();
    cy.log("User logged in");
    cy.wait(500);
    cy.get("#footerActions").contains("New Post").click();
    cy.wait(5000);
    cy.get("#postTitle").type("Hello").should("have.value", "Hello"),
      cy.get("#postTags").type("New").should("have.value", "New"),
      cy
        .get("#postBody")
        .type("Hello World")
        .should("have.value", "Hello World");
    cy.wait(5000);
    cy.get("[data-action='publish']").click();
    cy.log("created new post");
  });
});
