# ALK Group Frontend Plan

Bu repo, Figma tasarımlarının Next.js ile pixel perfect frontend'e dönüştürülmesi için başlangıç çalışma alanıdır.

## Öncelik Sırası

1. Figma tasarımını doğru analiz etmek
2. Next.js frontend'i pixel perfect çıkarmak
3. Responsive davranışları netleştirmek
4. Component yapısını temiz kurmak
5. Swagger ile API entegrasyonuna geçmek

## Ana Hedef

İlk teslimde odak tamamen görsel doğruluk olacak:

- spacing, radius, border, shadow ve typography değerleri tasarımla eşleşecek
- component isimleri ve klasör yapısı sürdürülebilir olacak
- desktop ve mobile kırılımlar net uygulanacak
- gereksiz UI library bağımlılığı eklenmeyecek
- mobil tasarım Figma'da yoksa bile senior UI/UX bakışıyla üretilecek
- mock veri ile ekranlar bitirilecek, API sonra bağlanacak

## Önerilen Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- gerektiğinde `module.scss` veya çok sınırlı inline style
- `clsx`
- `tailwind-merge`
- `swiper`
- `zod` (API aşamasında faydalı)
- `openapi-typescript` veya benzeri araç (Swagger aşamasında)

## Uygulama Prensipleri

- Önce layout ve tasarım tokenları çıkarılır
- Sonra sayfa iskeleti kurulur
- Sonra reusable componentler ayrılır
- En son fine-tune ile pixel perfect düzeltmeler yapılır
- Tasarımda olmayan efektler eklenmez
- Renk, ölçü, font ve boşluklar tahmine göre değil kaynağa göre yazılır
- Tailwind ana stil sistemi olur
- Normal CSS veya inline style sadece Tailwind ile temiz çözülemeyen alanlarda kullanılır
- Her component sayfadan bağımsız çalışacak şekilde yazılır
- Page dosyaları component compose eder, business logic component içine gömülmez

## Stil Kuralları

- Öncelik Tailwind utility class
- Karmaşık selector gerekiyorsa `*.module.scss`
- Dinamik tekil değer gerekiyorsa sınırlı inline style
- Global style sadece reset, token ve temel katmanlar için kullanılır
- Component içi stiller component klasöründe tutulur

## Component Mimarisi

- Her UI parçası ayrı component olarak yazılır
- Componentler prop ile beslenir, sayfaya hardcode bağlanmaz
- Section componentleri gerektiğinde farklı sayfalarda tekrar render edilebilir olmalı
- Slider yapıları generic wrapper mantığında kurulmalı
- Kart, buton, badge, heading, input gibi atomlar ayrı tutulmalı

## Mobil Yaklaşımı

- Mobil tasarım yoksa desktop tasarımdan bilinçli türetim yapılır
- Önce içerik hiyerarşisi korunur
- Sonra spacing ve stacking mantığı mobil için optimize edilir
- Tıklanabilir alanlar gerçek cihaz ergonomisine göre ayarlanır
- Tipografi, boşluk ve component oranları rastgele küçültülmez
- Her ekran mobilde de tasarlanmış gibi doğal görünmelidir

## Swiper Kullanımı

- Slider veya carousel gereken yerlerde `swiper` kullanılabilir
- Swiper sadece gerçekten kaydırmalı deneyim gereken componentlerde kullanılmalı
- Navigation, pagination ve breakpoints tasarım diline göre özelleştirilmeli
- Varsayılan Swiper görünümü doğrudan bırakılmamalı

## Figma'dan Kodlama Akışı

1. Ekranı section bazında parçala
2. Typography, spacing, radius, color tokenlarını çıkar
3. Reusable componentleri tespit et
4. Auto layout mantığını CSS'e çevir
5. Responsive davranışı belirle
6. Sayfayı kaba halden ince ayara taşı
7. Son kontrolde Figma ile yan yana karşılaştır

## Pixel Perfect Kontrol Listesi

- font size / line-height eşleşiyor mu
- spacing sistemi tutarlı mı
- container genişlikleri doğru mu
- kart, buton, input yükseklikleri aynı mı
- hover/focus/disabled halleri tanımlı mı
- mobil kırılımda layout bozuluyor mu
- metin taşması ve kırılması doğru mu
- ikon ölçüleri tutarlı mı

## Sonraki Aşama: Swagger

Frontend stabil olduktan sonra:

1. Swagger şeması alınır
2. Type üretimi yapılır
3. API client katmanı yazılır
4. Mock veri kaldırılır
5. Loading, error ve empty state'ler tamamlanır

## Repo Notu

Bu repoda proje başladığında:

- `src/components`
- `src/components/ui`
- `src/components/sections`
- `src/app`
- `src/lib`
- `src/styles`
- `src/types`

yapısı korunmalı.

Önerilen ek yapı:

- `src/lib/utils`
- `src/lib/constants`
- `src/lib/mappers`
- `public/images`
- `public/icons`

## Yerel Skilller

Bu repo içinde iki yerel skill hazırlandı:

- `figma-next-pixel-perfect`
- `swagger-contract-integration`

İkisi de `.codex/skills` altında duruyor.
