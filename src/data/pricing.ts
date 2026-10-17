/**
 * Şehirler arası nakliyat TAHMİNİ fiyat modeli.
 *
 * Fiyat = ev tipine göre işçilik/ambalaj tabanı + mesafe (km) × km ücreti × ev tipi katsayısı.
 * Tüm sitedeki fiyat tabloları (il, rota, fiyatlar sayfası) ve hesaplama aracı
 * bu dosyadan hesaplanır; rakamları değiştirmek için sadece burayı düzenleyin.
 * Sitede her zaman "tahmini" olarak gösterilir, kesin fiyat keşifle verilir.
 */
export type HomeType = { id: string; label: string; short: string; base: [number, number]; factor: number; note: string }

export const homeTypes: HomeType[] = [
  { id: 'parca', label: 'Parça eşya (parsiyel)', short: 'Parça Eşya', base: [6000, 9000], factor: 0.35, note: 'Birkaç mobilya, beyaz eşya veya koli' },
  { id: '1+1', label: '1+1 ev', short: '1+1', base: [18000, 24000], factor: 0.7, note: 'Yaklaşık 15-20 parça eşya' },
  { id: '2+1', label: '2+1 ev', short: '2+1', base: [24000, 32000], factor: 0.85, note: 'Yaklaşık 25-35 parça eşya' },
  { id: '3+1', label: '3+1 ev', short: '3+1', base: [30000, 40000], factor: 1, note: 'Yaklaşık 40-55 parça eşya' },
  { id: '4+1', label: '4+1 ev', short: '4+1', base: [38000, 50000], factor: 1.15, note: 'Yaklaşık 55-70 parça eşya' },
  { id: '5+1', label: '5+1 ev / villa', short: '5+1 / Villa', base: [46000, 62000], factor: 1.3, note: 'Dubleks, villa ve müstakil ev' },
]

/** Tam kamyon için km başına ücret aralığı (₺). */
export const perKm: [number, number] = [45, 60]
/** Şehir içi taşımalarda (aynı il) mesafe yerine eklenen sabit (₺). */
export const sameCityExtra: [number, number] = [2000, 4000]
/** Asansörlü taşıma gereken her adres için (₺). */
export const liftFee = 4000
/** Asansörsüz binada 2. kattan sonraki her kat için (₺). */
export const floorFee = 750

const round = (v: number) => Math.round(v / 500) * 500

export function estimate(km: number, typeId: string): [number, number] {
  const t = homeTypes.find((h) => h.id === typeId) ?? homeTypes[2]
  if (km <= 0) return [round(t.base[0] + sameCityExtra[0]), round(t.base[1] + sameCityExtra[1])]
  return [round(t.base[0] + km * perKm[0] * t.factor), round(t.base[1] + km * perKm[1] * t.factor)]
}

export const formatTl = (v: number) => new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 }).format(v) + ' ₺'

/** Kamyon için yaklaşık yol süresi (saat), molalar dahil. */
export function driveHours(km: number): string {
  if (km <= 0) return 'Aynı gün'
  const h = km / 62 + Math.floor(km / 300) * 0.5
  if (h < 2) return 'Yaklaşık 1-2 saat'
  const lo = Math.floor(h)
  return `Yaklaşık ${lo}-${lo + 1} saat`
}

/** Teslim planı: tam araçla yükleme gününe göre. */
export function deliveryPlan(km: number): string {
  if (km <= 150) return 'Aynı gün yükleme ve teslim'
  if (km <= 550) return 'Aynı gün veya ertesi sabah teslim'
  if (km <= 900) return 'Ertesi gün teslim'
  return '1-2 gün içinde teslim'
}

export const priceFactors = [
  { title: 'Mesafe', text: 'İki şehir arasındaki karayolu mesafesi yakıt, otoyol ve şoförün yolda geçirdiği süreyi belirler.' },
  { title: 'Eşya hacmi', text: 'Ev tipi ve eşya yoğunluğu aracın büyüklüğünü ve ekip sayısını belirler.' },
  { title: 'Tam araç mı, parsiyel mi', text: 'Aracı sadece size ayırmak hızlıdır; yükü başka yüklerle paylaşmak daha ekonomiktir ama süre uzar.' },
  { title: 'Kat ve asansör', text: 'Asansörsüz yüksek katlarda mobil taşıma asansörü kurulur, işçilik süresi kısalır ama ek ücret çıkar.' },
  { title: 'Ek hizmetler', text: 'Depolama, piyano, kasa gibi özel eşyalar ve ekstra ambalaj ayrıca hesaplanır.' },
  { title: 'Tarih', text: 'Ay başı, ay sonu, hafta sonu ve yaz ayları yoğun dönemdir; esnek tarih fiyatı düşürür.' },
]
