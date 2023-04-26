// {project}/cypress/integration/cart/is-available.spec.js
// const infoLogin = require('../fixtures/info-login.json');

describe("service is available", function () {
  beforeEach("should be available on localhost:3000", function () {
    cy.visit("/");
  });
  it("open burger-constructor page", () => {
    cy.contains("Соберите бургер");
  });

  it("open/close modal window", () => {
    cy.get("[class^=BurgerIngredients_link]").first().click();
    cy.contains("Детали ингредиента");
    cy.contains("Калории");
    cy.contains("Углеводы");
    cy.wait(2000);
    cy.get("[class^=Modal_closeIcon]").children().last().click();

    cy.get("[class^=BurgerIngredients_link]").last().click();
    cy.contains("Детали ингредиента");
    cy.contains("Белки");
    cy.contains("Жиры");
    cy.wait(2000);
    cy.get("[class^=Modal_closeIcon]").children().last().click();
  });

  it("drag and drop ingredient", () => {
    cy.get("[class^=BurgerIngredients_link]").first().trigger("dragstart");
    cy.get("[class^=BurgerConstructor_constructorBurger]").trigger("drop");
    cy.get("#sauceId").children().first().trigger("dragstart");
    cy.get("[class^=BurgerConstructor_constructorBurger]").trigger("drop");
    cy.get("[class^=BurgerIngredients_link]").last().trigger("dragstart");
    cy.get("[class^=BurgerConstructor_constructorBurger]").trigger("drop");
    cy.get("[class^=BurgerIngredients_link]")
      .last()
      .prev()
      .trigger("dragstart");
    cy.get("[class^=BurgerConstructor_constructorBurger]").trigger("drop");
    cy.get("[class^=BurgerIngredients_link]").eq(1).trigger("dragstart");
    cy.get("[class^=BurgerConstructor_constructorBurger]").trigger("drop");
    
  });
  it('make request order', () => {
    const email = 'qqq3@qqq.ru';
      const password = '123456';
    cy.get("[class^=BurgerIngredients_link]").first().trigger("dragstart");
    cy.get("[class^=BurgerConstructor_constructorBurger]").trigger("drop");
    cy.get("#sauceId").children().first().trigger("dragstart");
    cy.get("[class^=BurgerConstructor_constructorBurger]").trigger("drop");
    cy.get('.button').contains('Оформить заказ').click();

    cy.contains('Вход');
    cy.get('[class*=input_type_email]').children().last().type(email)
    cy.get('[class*=input_type_password]').children().first().next().type(password)
    cy.get('[class^=button]').click();
    cy.wait(2000);
    cy.get('.button').contains('Оформить заказ').click();
    cy.wait(20000);
    cy.contains('Идентификатор заказа');
    cy.get('[class^=Modal_closeIcon]').children().last().click();
  })
});
