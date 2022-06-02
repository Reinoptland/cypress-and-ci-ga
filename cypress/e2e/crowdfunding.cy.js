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
  });
});
