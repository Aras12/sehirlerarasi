import Image from 'next/image'
import { meta } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata = meta({
  title: 'Galeri: Taşıma, Ambalaj ve Araçlarımız',
  description: 'BarajTrans şehirler arası nakliyat galerisi: ambalajlama, asansörlü taşıma, ofis taşıma, parça eşya ve kapalı kasa kamyonlarımızdan görseller.',
  path: '/galeri',
})

const imgs = [
  ['/img/hizmet/evden-eve-nakliyat-afis.webp', 'Şehirler arası evden eve nakliyat kamyonu'],
  ['/img/hizmet/ambalajlama-afis.webp', 'Eşyaların profesyonel ambalajlanması'],
  ['/img/hizmet/asansorlu-tasima-afis.webp', 'Asansörlü eşya taşıma'],
  ['/img/hizmet/ofis-tasima-afis.webp', 'Ofis taşıma'],
  ['/img/hizmet/parca-esya-afis.webp', 'Parça eşya taşıma'],
  ['/img/hizmet/sehirler-arasi-evden-eve-nakliyat.webp', 'Şehirler arası ev taşıma'],
  ['/img/hizmet/profesyonel-ambalajlama.webp', 'Koli ve streç ile paketleme'],
  ['/img/hizmet/asansorlu-tasimacilik.webp', 'Dış cephe asansörü ile taşıma'],
  ['/img/hizmet/mobilya-montaj-demontaj.webp', 'Mobilya montaj ve demontaj'],
  ['/img/hizmet/esya-depolama.webp', 'Eşya depolama'],
  ['/img/hizmet/beyaz-esya-tasimaciligi.webp', 'Beyaz eşya taşıma'],
  ['/img/hizmet/turkiye-geneli-guvenli-tasima.webp', 'Türkiye geneli güvenli taşıma'],
]

export default function Galeri() {
  return (
    <>
      <PageHero title="Galeri" crumbs={[{ href: '/galeri', name: 'Galeri' }]} imageAlt="BarajTrans galeri" />
      <div className="wrap py-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {imgs.map(([src, alt]) => (
            <figure key={src} className="card overflow-hidden">
              <div className="relative aspect-square"><Image src={src} alt={alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" /></div>
              <figcaption className="p-3 text-xs font-semibold text-navy-900">{alt}</figcaption>
            </figure>
          ))}
        </div>
        <CtaBand />
      </div>
    </>
  )
}
