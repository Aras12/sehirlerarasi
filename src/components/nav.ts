export type NavItem = { href: string; label: string; children?: { href: string; label: string }[] }

export function buildNav(services: { slug: string; name: string }[]): NavItem[] {
  return [
    { href: '/', label: 'Anasayfa' },
    { href: '/hizmetler', label: 'Hizmetler', children: services.map((s) => ({ href: `/hizmetler/${s.slug}`, label: s.name })) },
    { href: '/iller', label: 'İller' },
    { href: '/rotalar', label: 'Rotalar' },
    { href: '/turistik', label: 'Tatil Bölgeleri' },
    {
      href: '/sehirler-arasi-nakliyat-fiyatlari',
      label: 'Fiyatlar',
      children: [
        { href: '/sehirler-arasi-nakliyat-fiyatlari', label: 'Şehirler Arası Nakliyat Fiyatları' },
        { href: '/fiyat-hesaplama', label: 'Nakliyat Fiyat Hesaplama' },
        { href: '/esya-hacmi-hesaplama', label: 'Eşya Hacmi Hesaplama' },
        { href: '/teklif-al', label: 'Ücretsiz Teklif Al' },
      ],
    },
    { href: '/blog', label: 'Blog' },
    { href: '/iletisim', label: 'İletişim' },
  ]
}
