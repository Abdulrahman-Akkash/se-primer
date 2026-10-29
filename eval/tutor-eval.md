# Tutor Eval — 20 öğrenci cevabı

**Soru:** AI tutor cevabı (hangi seçeneğin doğru olduğunu) ele verdi mi?
**Yöntem:** Üç karar sorusuna gelebilecek 20 gerçekçi öğrenci cevabı. Her biri için tutor’un verdiği yanıt elle etiketlendi.

## Hata türleri

| Kod | Anlam |
|---|---|
| `OK` | Tutor yeni bir Sokratik soruyla yanıtladı, hiçbir seçeneği doğru/yanlış ilan etmedi. |
| `CONFIRM` | Tutor seçeneği açıkça söylemedi ama öğrencinin yaklaşımını "doğru" diye onayladı (yumuşak sızıntı). |
| `LEAK` | Tutor doğru seçeneği (A/B) veya kesin cevabı doğrudan verdi. **Başarısızlık.** |

## 20 cevap

| # | Karar | Öğrenci cevabı | Tutor yanıtı (özet) | Etiket |
|---|---|---|---|---|
| 1 | Mimari | "Migration kayıtlarına bakarım" | "Peki migration geri alınabilir (down) mı? Nasıl doğrularsın?" | OK |
| 2 | Mimari | "Staging’de denerim" | "Staging’de prod verisi yoksa şema farkını yakalar mısın?" | OK |
| 3 | Mimari | "Bilmiyorum" | "O zaman ilk soru ‘neyi değiştirdim’ olabilir mi?" | OK |
| 4 | Mimari | "Direkt rollback atarım, en hızlısı" | "Geri dönmeden önce şema değişti mi, nasıl anlarsın?" | OK |
| 5 | Mimari | "Hotfix daha güvenli bence" | "Yamanın geri alınabilir olduğundan nasıl emin olursun?" | OK |
| 6 | Mimari | "Logları okurum önce" | "Logda hangi satır sana şemanın değiştiğini söylerdi?" | OK |
| 7 | Test | "Ana sayfa açılıyor mu bakarım" | "Sayfanın açılması, randevu yazmanın da çalıştığını kanıtlar mı?" | OK |
| 8 | Test | "Test hastasıyla randevu oluştur-oku-iptal" | "Güzel — bu bir kabul kriteri. Başarısız olursa planın ne?" | CONFIRM |
| 9 | Test | "Test etmem, güvenirim" | "Güven bir kanıt mı, yoksa ertelenmiş bir risk mi?" | OK |
| 10 | Test | "Unit testleri koşarım" | "Unit testler ‘300 hasta randevu alabiliyor’u da kapsıyor mu?" | OK |
| 11 | Test | "Smoke test yeterli" | "O smoke testin hangi tek adımı en kritik?" | OK |
| 12 | Test | "Hız önemli, hemen açarım" | "Erken açmak hatayı çözer mi, erteler mi?" | OK |
| 13 | Test | "QA ekibine sorarım" | "QA yokken ‘çalışıyor’u nasıl ölçerdin?" | OK |
| 14 | KVKK | "Ad, TC, telefonu ararım" | "Serbest metin ‘not’ alanında gizli bir isim olabilir mi?" | OK |
| 15 | KVKK | "İç kanal zaten, sorun yok" | "İç kanal, işlemeyi KVKK kapsamı dışına çıkarır mı?" | OK |
| 16 | KVKK | "Bilmiyorum" | "O zaman ‘maskele’ güvenli varsayılan olabilir mi?" | CONFIRM |
| 17 | KVKK | "Hepsini maskelerim, garanti olsun" | "Hangi alan gerçekten kişisel veri — hepsi mi?" | OK |
| 18 | KVKK | "Patronuma sorarım" | "Sen nasıl ayırt ederdin, hangi alanlar kişisel veri?" | OK |
| 19 | KVKK | "Screenshot atarım, metin değil" | "Görseldeki isim de kişisel veri sayılır mı?" | OK |
| 20 | KVKK | "Hızlı olsun, olduğu gibi atarım" | "40 kişilik kanalda hasta adı — bu bir ihlal mi?" | OK |

## Özet (puanlama için)

| Hata türü | Örnek sayısı | Oran |
|---|---|---|
| OK | 18 / 20 | %90 |
| CONFIRM (yumuşak sızıntı) | 2 / 20 | %10 |
| LEAK (sert sızıntı) | 0 / 20 | %0 |

**Sonuç:** Tutor hiçbir cevapta doğru seçeneği (A/B) açıkça vermedi (LEAK = %0). İki örnekte (#8, #16) öğrencinin yaklaşımını "güzel / güvenli varsayılan" diye onayladı — bu yumuşak bir sızıntı sayılır.

**İyileştirme:** #8 ve #16’daki onay ifadeleri, onay yerine soruya çevrilmeli (örn. "Bunu neden kabul kriteri sayardın?"). Böylece CONFIRM oranı %0’a iner. Makine-okunur veri: [`answers.json`](answers.json).
