// SE Primer — gösterim amaçlı yavaş demo. ~60 sn sürer; cypress/videos/ içine video üretir.
// Çalıştırma:  npm run demo
// (Test değildir; test suitinden excludeSpecPattern ile ayrılmıştır.)

const beat = 1600; // adımlar arası bekleme

describe('SE Primer — demo', () => {
  it('iyi ve kötü sonu baştan sona oynar', () => {
    cy.visit('/');
    cy.wait(beat);

    // --- Giriş: kişiselleştirme ---
    cy.get('#lv-new').check({ force: true }); cy.wait(beat);
    cy.get('#r-be').check({ force: true }); cy.wait(beat);
    cy.get('#goal').type('canlıda sakin kalmak', { delay: 70 }); cy.wait(beat);
    cy.get('[data-testid=start]').click(); cy.wait(beat);

    // --- İyi yol: A / A / A ---
    cy.get('[data-testid=tutor]').should('be.visible');
    cy.get('#tutorOpts .btn').first().click(); cy.wait(beat); // tutor soruya soruyla yanıt
    slowPlay('A');
    slowPlay('A');
    slowPlay('A');
    cy.get('[data-testid=ending]').should('have.attr', 'data-ending', 'good');
    cy.wait(beat * 2.5); // iyi sonu göster

    // --- Kötü yolu göster: B / B / B ---
    cy.get('[data-testid=restart]').click(); cy.wait(beat);
    cy.get('[data-testid=start]').click(); cy.wait(beat);
    slowPlay('B');
    slowPlay('B');
    slowPlay('B');
    cy.get('[data-testid=ending]').should('have.attr', 'data-ending', 'bad');
    cy.wait(beat * 3); // kötü sonu (KVKK ihlali) göster
  });
});

function slowPlay(key) {
  cy.get(`[data-testid="choice-${key}"]`).click();
  cy.wait(1800); // "ne oldu / neden oldu" okunsun
  cy.get('[data-testid=continue]').click();
  cy.wait(900);
}
