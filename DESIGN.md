# SE Primer — Tasarım (DESIGN.md)

> 3 mobil ekranın tasarım notu ve dışa aktarımları.
> Ekranlar `design/` klasöründedir:
> - [`screen-1-giris.svg`](design/screen-1-giris.svg) — Giriş / kişiselleştirme
> - [`screen-2-sahne.svg`](design/screen-2-sahne.svg) — Sahne (karar + sonuç)
> - [`screen-3-son.svg`](design/screen-3-son.svg) — Son (kabul kriteri)
>
> Not: Bu SVG'ler, Stitch'te yeniden çizmek için referans mockup'lardır (ödev Stitch çıktısını istiyorsa aynı düzeni Stitch'e taşıyıp PNG'lerini buraya ekle).

## Tasarım dili

- **Dünya:** Gece nöbeti. Karanlık odada parlayan "Primer" — poster görselinin ruhu. Tek, bilinçli koyu tema.
- **Renk:** derin lacivert zemin (`#0B1220`), turuncu vurgu (`#FB923C`, karar/aksiyon), teal (`#2DD4BF`, tutor/başarı). Anlam renkleri: kırmızı `ÇÖKTÜ`, amber `RİSKLİ`, yeşil `AYAKTA`.
- **Tipografi:** başlık `Archivo` (800), gövde `IBM Plex Sans`, log/veri `IBM Plex Mono` — mühendislik/terminal hissi.
- **Hareket:** az. Karar → sonuç geçişinde yumuşak kaydırma; `prefers-reduced-motion` kapatır.

## Ekran 1 · Giriş (kişiselleştirme)

- Künye şeridi: `YZM301 · SE Primer`.
- Başlık: "Kişiye uyum sağlayan kitap — bu kez yazılım mühendisi için".
- 3 soru: **Seviye** (Yeni / Orta / Deneyimli), **Rol** (Backend / Frontend / Full-stack / Öğrenci), **Hedef** (serbest metin).
- Birincil buton: "Nöbete başla →".
- Alt not: *"Her seçim bir durum geçişi. Her son bir kabul kriteri."*

## Ekran 2 · Sahne (karar + sonuç)

- **Sabit durum çubuğu:** saat (`08:00`), faz, (deneyimli için) sayaç, sistem durumu rozeti.
- İlerleme çizgileri (3 adım).
- Sahne kartı: başlık + kısa kriz metni.
- Karar etiketi (`Karar 1 · Mimari`) + soru.
- **Tutor paneli:** teal kesikli çerçeve, "cevabı söylemez, sorar". Soru + düşünme seçenekleri → takip sorusu.
- İki karar butonu (A / B).
- Seçimden sonra: **log kutusu** — `ne oldu ›` ve `neden ›` satırları (mono), "Devam →".

## Ekran 3 · Son (kabul kriteri)

- Verdikt: "Son A · İyi — sistem ayakta, veri güvende" (yeşil) **veya** "Son B · Kötü — KVKK ihlali" (kırmızı).
- **Kabul kriteri listesi:** ✓ / ✕ ile 4 madde (her son bir kabul kriteri).
- Kişiselleştirme özeti (seviye · rol · hedef).
- "Yeniden oyna".

## Erişilebilirlik

- Tüm interaktif ögelerde görünür odak halkası; radyolar klavyeyle gezilebilir.
- Durum çubuğu `aria-live="polite"`.
- Renk tek başına anlam taşımaz: durum hem metin hem rozet; kriterler hem ✓/✕ hem renk.
