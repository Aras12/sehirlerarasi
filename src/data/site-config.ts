/**
 * Firma bilgileri tek yerden yönetilir. Telefon, adres vb. değişirse
 * sadece bu dosya güncellenir.
 */
export const SITE_CONFIG = {
  name: 'BarajTrans',
  slogan: 'Şehirler Arası Evden Eve Nakliyat',
  domain: 'sehirlerarasinakliye.org.tr',
  url: 'https://www.sehirlerarasinakliye.org.tr',
  description:
    'BarajTrans: Adana merkezli şehirler arası evden eve nakliyat. 81 ile sigortalı, ambalajlı ve aktarmasız taşıma; parça eşya, ambar ve kamyonet nakliye.',
  phone: '0537 409 24 06',
  phoneHref: 'tel:+905374092406',
  whatsapp: '905374092406',
  email: 'info@sehirlerarasinakliye.org.tr',
  /** Kapı numarası bilinmediği için sadece mahalle ve ilçe yazılıyor. */
  address: 'Beyazevler Mah., Çukurova / Adana',
  addressParts: { street: 'Beyazevler Mahallesi', district: 'Çukurova', city: 'Adana', country: 'TR' },
  workingHours: 'Haftanın 7 günü 07:00 - 22:00',
  /** Fiyat tablolarının ve hesaplama aracının güncellendiği ay. */
  priceUpdated: 'Ekim 2026',
}

export const waLink = (text?: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const pageUrl = (path = '/') => `${SITE_CONFIG.url}${path === '/' ? '' : path}`
