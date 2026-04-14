import { generatePageMeta } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/data/site-config'

export const metadata = generatePageMeta({
  title: 'Galeri | Adana Şehirler Arası Nakliyat Fotoğrafları',
  description: 'Baraj Taşımacılık galeri sayfası. Şehirler arası nakliyat, evden eve taşıma ve asansörlü taşımacılık çalışmalarımızdan fotoğraflar.',
  path: '/galeri',
  keywords: ['nakliyat galeri', 'evden eve nakliyat fotoğrafları', 'asansörlü taşımacılık görselleri'],
})

const images = [
  { src: '/images/galeri/galeri1.jpg', alt: 'Adana şehirler arası evden eve nakliyat' },
  { src: '/images/galeri/galeri2.jpg', alt: 'Profesyonel paketleme hizmeti' },
  { src: '/images/galeri/galeri3.jpg', alt: 'Modern nakliyat araç filosu' },
  { src: '/images/galeri/galeri4.jpg', alt: 'Asansörlü taşımacılık hizmeti' },
  { src: '/images/galeri/galeri5.jpg', alt: 'Dış cephe asansörü ile taşıma' },
  { src: '/images/galeri/galeri6.jpg', alt: 'Adana nakliye araçları' },
  { src: '/images/galeri/galeri7.jpg', alt: 'Eşya paketleme ve yükleme' },
  { src: '/images/galeri/galeri8.png', alt: 'Mobil asansör kiralama' },
  { src: '/images/slider/slide1.png', alt: 'Şehirler arası nakliyat hizmeti' },
  { src: '/images/slider/slide2.jpg', alt: 'Güvenli eşya taşımacılığı' },
  { src: '/images/slider/slide3.jpg', alt: 'Sigortalı nakliyat' },
  { src: '/images/hizmetler/evden-eve-nakliyat.jpg', alt: 'Adana evden eve nakliyat' },
]

export default function GaleriPage() {
  return (
    <>
      <section className="bg-primary-700 py-10">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-3">Galeri</h1>
          <p className="text-blue-200">Nakliyat çalışmalarımızdan fotoğraflar</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
              <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-colors duration-300 flex items-end">
                <p className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent-50 rounded-2xl p-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-primary-700 mb-3">Siz de güvenle taşının!</h2>
          <p className="text-dark-600 mb-6">Profesyonel ekibimizle eşyalarınızı sigortalı olarak taşıyoruz.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2"><Phone size={18}/>{SITE_CONFIG.phone}</a>
            <Link href="/teklif-al" className="bg-accent-400 hover:bg-accent-500 text-primary-800 px-6 py-3 rounded-xl font-bold">Online Teklif Al</Link>
          </div>
        </div>
      </div>
    </>
  )
}
