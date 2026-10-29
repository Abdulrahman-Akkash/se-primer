# SE Primer

**Yazılım mühendisliğini öğreten, oynanan bir kitap.** Oyuncu karar verir; uygulama o kararın teknik ve yasal sonucunu gösterir. Tek sağlık senaryosu, 3 karar, 2 son, cevabı söylemeyen bir AI tutor.

> YZM301 · Ödev · 1. Hafta — *"Her seçim bir durum geçişi. Her son bir kabul kriteri."*

## Teslim linkleri

| Teslim | Link |
|---|---|
| GitHub repo | https://github.com/Abdulrahman-Akkash/se-primer |
| Çalışan uygulama (telefonda oynanır) | https://abdulrahman-akkash.github.io/se-primer/ |
| Demo video (~42 sn) | [`demo/demo.mp4`](demo/demo.mp4) |

> Not: Çalışan uygulama GitHub Pages ile yayında (telefonda da açılır). Ödev Google AI Studio linki istiyorsa, `index.html` oraya da yüklenip linki buraya eklenebilir.

## Çalıştırma

```bash
# uygulamayı aç (telefon tarayıcısında da çalışır)
npm run serve        # http://localhost:8080

# E2E testler + demo video (cypress/videos/)
npm install
npm test
```

## İçindekiler

| Dosya | Ne |
|---|---|
| [`index.html`](index.html) | Çalışan uygulama (tek dosya, bağımlılıksız) |
| [`spec.md`](spec.md) | Problem, kapsam dışı, durum makinesi, 5 kabul örneği |
| [`DESIGN.md`](DESIGN.md) | 3 mobil ekranın tasarımı (Stitch) |
| [`eval/tutor-eval.md`](eval/tutor-eval.md) | 20 öğrenci cevabı, hata türleri, oran |
| [`cypress/e2e/primer.cy.js`](cypress/e2e/primer.cy.js) | Her yol için E2E test |

---

## Ürün kararı — yapmadığım 3 özellik

Zaman sınırlı. Kapsamı daraltmak bir mühendislik kararı; yapmadıklarımı ve nedenini açıkça yazıyorum.

1. **Kullanıcı hesabı / giriş yok.** — Öğrenme deneyimi tek oturumda tamamlanıyor; kimlik tutmak değeri artırmadan KVKK yüzeyini büyütürdü.
2. **İkinci senaryo yok.** — Tek senaryoyu derinleştirmek (gerçek sonuçlar, Sokratik tutor), iki yüzeysel senaryodan daha çok öğretiyor.
3. **Serbest metin tutor sohbeti yok.** — Sabit Sokratik seçenekler, tutor’un cevabı ele vermesini garanti engelliyor (eval: LEAK %0); serbest LLM sohbeti bu güvenceyi riske atardı.

## Kaynakça (seçme)

- Stephenson, N. (1995). *The Diamond Age: A Young Lady’s Illustrated Primer.* Bantam Spectra.
- Sommerville, I. (2016). *Software Engineering* (10. baskı), Böl. 5: durum makineleri. Pearson.
- 6698 sayılı Kişisel Verilerin Korunması Kanunu (2016). kvkk.gov.tr
- OpenAI (2025). *Introducing study mode* (Sokratik tutor davranışı). openai.com
- Cypress. *E2E testing, screenshots and videos.* docs.cypress.io
- Görsel: Primer yorumu, @seyyah (AI ile üretildi).
