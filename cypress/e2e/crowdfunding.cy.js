describe("crowdfunding.cy.js", () => {
  it("should visit", () => {
    cy.visit("http://localhost:3000");
    cy.get("#backers").should("have.text", "5,007");
    cy.get(".section-menu__item__header > .group-btn > .btn-active").click();
    cy.contains("Pledge with no reward").click();
    cy.contains("Continue").click();
    cy.contains("Got it").click();
    cy.get("#backers").should("have.text", "5,008");
  });

  it("Should be able to buy a bamboo stand", () => {
    cy.visit("http://localhost:3000");
    cy.get(".section-menu__item__header > .group-btn > .btn-active").click();
    cy.contains("Bamboo Stand").click();
    cy.get(
      ".selected > .selected-pledge > .selected-pledge__content > .group-btn > .btn-disable"
    ).click();
    cy.get("#bamboo").clear();
    cy.get("#bamboo").type("500");
    cy.get(
      ".selected > .selected-pledge > .selected-pledge__content > .group-btn > .btn-active"
    ).click();
    cy.contains("Got it").click();
  });
});
