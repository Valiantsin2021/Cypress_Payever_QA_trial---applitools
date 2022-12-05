describe(`Should make visual regression testing of Restful Booker Platform`, () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: "Restful Booker Platform",
      testName: Cypress.currentTest.title,
    });
  });
  it(`Opens https://automationintesting.online/ and make visual check of the page`, () => {
    cy.visit(Cypress.env("testAuto"));
    cy.eyesCheckWindow({
      tag: "Home page",
      target: "window",
      fully: true,
    });
    cy.get(".pigeon-overlays")
      .scrollIntoView()
      .then(($el) => {
        cy.eyesCheckWindow({
          target: "region",
          element: $el,
        });
      });
  });
  afterEach(() => {
    cy.eyesClose();
  });
});
