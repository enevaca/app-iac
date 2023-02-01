describe("Pruebas e2e", () => {
  beforeEach(() => {
    cy.visit("http://45.35.0.160:3110");
  });
  it("Login de usuario registrado y CRUD", () => {
    cy.get(".nav > :nth-child(3) > a").click();
    cy.get('[type="text"]').type("admin");
    cy.get('[type="password"]').type("hola123");
    cy.get(".form-submit").click();

    //listar
    cy.contains("Intérpretes").click();
    //nuevo registro
    cy.get(".col-12 > a").click();

    cy.get(".mb-3 > .form-control").type("Ricardo Arjona");
    cy.get(":nth-child(2) > .form-control").type("Mexicano");
    cy.get(".text-center > .btn").click();

    //Editar registros
    cy.get("tbody > :nth-child(1) > :nth-child(4) > :nth-child(1)").click();
    cy.get(".mb-3 > .form-control").clear();
    cy.get(".mb-3 > .form-control").type("Rata Blanca");
    cy.get(":nth-child(2) > .form-control").clear();
    cy.get(":nth-child(2) > .form-control").type("Argentina");
    cy.get(".text-center > .btn").click();
    //eliminar
    cy.get(":nth-child(1) > :nth-child(4) > :nth-child(2)").click();
    //salir
    cy.get(".text-danger").click();
    cy.get(".active").click();
  });
});
