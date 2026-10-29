// SE Primer — E2E testleri. Her kabul kriteri (spec.md §5) burada bir test.
// Çalıştırma:  npm test   (statik sunucu + cypress run)

describe('SE Primer', () => {
  beforeEach(() => cy.visit('/'));

  it('KÖ-1 · giriş kişiselleştirmeyi uygular ve kriz sahnesini açar', () => {
    cy.get('[data-testid=intro]').should('be.visible');
    cy.get('#lv-new').check({ force: true });   // Yeni başladım
    cy.get('#r-be').check({ force: true });      // Backend
    cy.get('#goal').type('sakin kalmak');
    cy.get('[data-testid=start]').click();

    cy.get('[data-testid=scene]').should('be.visible')
      .and('contain', '08:00');
    // "yeni" seviyede tutor ipucu otomatik görünür
    cy.get('[data-testid=tutor]').should('be.visible');
    cy.get('[data-testid=clock]').should('have.text', '08:00');
    cy.get('[data-testid=status]').should('have.text', 'ÇÖKTÜ');
  });

  it('KÖ-2 · her karardan sonra ne oldu/neden + durum güncellenir', () => {
    cy.get('[data-testid=start]').click();
    cy.get('[data-testid="choice-A"]').click(); // rollback
    cy.get('[data-testid=consequence]').should('be.visible');
    cy.get('#cWhat').should('not.be.empty');
    cy.get('#cWhy').should('not.be.empty');
    cy.get('[data-testid=clock]').should('not.have.text', '08:00'); // saat ilerledi
    cy.get('[data-testid=status]').should('not.have.text', 'ÇÖKTÜ'); // durum değişti
  });

  it('KÖ-3 · iyi son (A/A/A) — veri güvende', () => {
    cy.get('[data-testid=start]').click();
    play('A'); play('A'); play('A');
    cy.get('[data-testid=ending]').should('be.visible')
      .and('have.attr', 'data-ending', 'good');
    cy.get('#endVerdict').should('contain', 'veri güvende');
    cy.get('.crit li.pass').should('have.length.greaterThan', 0);
  });

  it('KÖ-4 · kötü son (B/B/B) — KVKK ihlali', () => {
    cy.get('[data-testid=start]').click();
    play('B'); play('B'); play('B');
    cy.get('[data-testid=ending]').should('be.visible')
      .and('have.attr', 'data-ending', 'bad');
    cy.get('#endVerdict').should('contain', 'KVKK');
    cy.get('.crit li.fail').should('have.length.greaterThan', 0);
  });

  it('KÖ-4b · sonu belirleyen geçiş KVKK kararıdır (B/B/A → iyi)', () => {
    cy.get('[data-testid=start]').click();
    play('B'); play('B'); play('A'); // sadece 3. karar iyi
    cy.get('[data-testid=ending]').should('have.attr', 'data-ending', 'good');
  });

  it('KÖ-5 · tutor cevabı vermez, soruyla yanıtlar', () => {
    cy.get('[data-testid=start]').click();
    cy.get('[data-testid=tutor]').should('be.visible');
    cy.get('#tutorOpts .btn').first().click();
    cy.get('#tutorFollow').should('be.visible').and('contain', '?'); // takip sorusu
  });

  it('Ek · deneyimli seviyede 60 sn süre baskısı görünür', () => {
    cy.get('#lv-exp').check({ force: true });
    cy.get('[data-testid=start]').click();
    cy.get('[data-testid=timer]').should('be.visible').and('contain', 'sn');
  });
});

// bir kararda A veya B seç ve "Devam" ile ilerle
function play(key) {
  cy.get(`[data-testid="choice-${key}"]`).click();
  cy.get('[data-testid=continue]').click();
}
