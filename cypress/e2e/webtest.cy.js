describe("Test-1 Theme Toggle", () => {
  it("toggles the theme", () => {
    // Arrange: Başlangıç durumunu ayarlayın
    cy.visit("http://localhost:5173/"); // Uygulamanızın doğru URL'sini kullanın

    // Assert: Sayfanın başlangıçta blue mode'da olduğunu doğrulayın
    cy.get("header").should("have.attr", "value", "");

    // Act: Tema değiştirme düğmesine tıklayın
    cy.get('[data-cy="theme-toggle"]').click();

    // Assert: Tema değişikliğini doğrulayın (dark mode'a geçtiğini)
    cy.get("header").should("have.attr", "value", "dark");

    // Act: Tekrar tıklayarak blue mode'a dönün
    cy.get('[data-cy="theme-toggle"]').click();

    // Assert: Tekrar blue mode'a döndüğünü doğrulayın
    cy.get("header").should("have.attr", "value", "");
  });
});
describe("Test-2 Language Toggle", () => {
  it("toggles the language", () => {
    // Arrange: Başlangıç durumunu ayarlayın
    cy.visit("http://localhost:5173/"); // Uygulamanızın doğru URL'sini kullanın

    // Assert: Başlangıç dilinin doğru olduğunu doğrulayın
    cy.get("header").contains("Merhaba!");

    // Act: Dil değiştirme düğmesine tıklayın
    cy.get('button[data-cy="language-toggle"]').click();

    // Assert: Dil değişikliğini doğrulayın (başka bir dile geçtiğini)
    cy.get("header").contains("Hi!");

    // Act: Tekrar tıklayarak başlangıç diline dönün
    cy.get('button[data-cy="language-toggle"]').click();

    // Assert: Tekrar başlangıç diline döndüğünü doğrulayın
    cy.get("header").contains("Merhaba!");
  });
});
