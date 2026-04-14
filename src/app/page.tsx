import HeroSlider from '@/components/home/HeroSlider'
import TabArticles from '@/components/home/TabArticles'
import { SITE_CONFIG } from '@/data/site-config'
import { hizmetler } from '@/data/hizmetler'
import { iller } from '@/data/iller'
import { ilceler } from '@/data/ilceler'
import { tabArticles } from '@/data/content'
import { faqs, testimonials, blogPosts } from '@/data/content'
import { faqSchema, reviewSchema } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Building2, MapPin, Truck, Briefcase, Warehouse, Star, ChevronRight, Phone, ArrowRight, Shield, CheckCircle, Calculator } from 'lucide-react'

const iconMap: Record<string, any> = { Home, Building2, MapPin, Truck, Briefcase, Warehouse }
const serviceImages: Record<string, string> = {
  'evden-eve-nakliyat': '/images/hizmetler/evden-eve-nakliyat.jpg',
  'asansorlu-tasima': '/images/hizmetler/asansorlu-tasima.jpg',
  'sehir-ici-nakliye': '/images/hizmetler/sehir-ici-nakliye.jpg',
  'kamyonet-nakliye': '/images/hizmetler/kamyonet-nakliye.jpg',
  'ofis-tasima': '/images/hizmetler/ofis-tasima.png',
  'esya-depolama': '/images/hizmetler/esya-depolama.png',
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema(testimonials)) }} />

      <HeroSlider />

      {/* === GİRİŞ YAZISI + TAB MAKALELER === */}
      <TabArticles />

      {/* === HIZMETLER === */}
      <section className="py-16 bg-white" id="hizmetler">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Nakliyat Hizmetlerimiz
            </h2>
            <p className="text-dark-500 max-w-2xl mx-auto">Adana ve Türkiye genelinde profesyonel <strong>şehirler arası nakliyat</strong> çözümlerimiz ile yanınızdayız.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hizmetler.map((h) => {
              const Icon = iconMap[h.icon] || Truck
              return (
                <Link key={h.slug} href={`/hizmetler/${h.slug}`} className="group bg-white border-2 border-dark-100 hover:border-primary-500 rounded-2xl overflow-hidden card-hover">
                  <div className="h-44 relative overflow-hidden">
                    <Image src={serviceImages[h.slug] || '/images/galeri/galeri1.jpg'} alt={`${h.name} - Baraj Taşımacılık Adana`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-accent-400 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary-800" size={22} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-xl font-bold text-dark-800 mb-2 group-hover:text-primary-600 transition">{h.name}</h3>
                    <p className="text-dark-500 text-sm leading-relaxed mb-3">{h.shortDesc}</p>
                    <span className="text-primary-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Detaylı Bilgi <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* === FIYAT HESAPLAMA CTA === */}
      <section className="py-12 bg-accent-400">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-800 mb-2">
              Nakliyat Fiyatınızı Hemen Hesaplayın!
            </h2>
            <p className="text-primary-700">Online fiyat hesaplama aracımız ile tahmini nakliyat ücretinizi öğrenin.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/fiyat-hesaplama" className="flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg">
              <Calculator size={20} /> Fiyat Hesapla
            </Link>
            <Link href="/teklif-al" className="flex items-center gap-2 bg-white hover:bg-dark-50 text-primary-700 px-6 py-3 rounded-xl font-bold transition shadow-lg">
              Teklif Al
            </Link>
          </div>
        </div>
      </section>

      {/* === ILLER GRID === */}
      <section className="py-16 bg-white" id="iller">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Şehirler Arası Nakliyat Güzergahlarımız
            </h2>
            <p className="text-dark-500">Adana&apos;dan Türkiye&apos;nin <strong>81 iline</strong> şehirler arası evden eve nakliyat hizmeti</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {iller.map((il) => (
              <Link key={il.slug} href={`/iller/${il.slug}`}
                className="bg-dark-50 hover:bg-primary-50 border border-dark-100 hover:border-primary-300 rounded-lg px-3 py-2.5 text-center text-sm font-medium text-dark-700 hover:text-primary-700 transition group">
                <span className="text-xs text-dark-400 group-hover:text-primary-500 block">{String(il.plaka).padStart(2, '0')}</span>
                {il.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-dark-400 text-sm">Adana çıkışlı tüm güzergahlarda <strong className="text-primary-600">sigortalı</strong> ve <strong className="text-accent-600">ambalajlı</strong> taşımacılık</p>
          </div>
        </div>
      </section>

      {/* === ADANA İLÇELER === */}
      <section className="py-12 bg-dark-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-700 mb-6 text-center">
            Adana İlçeleri Nakliyat
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {ilceler.map((ilce) => (
              <Link key={ilce.slug} href={`/ilceler/${ilce.slug}`}
                className="bg-white hover:bg-accent-50 border border-dark-100 hover:border-accent-300 rounded-full px-4 py-2 text-sm font-medium text-dark-600 hover:text-accent-700 transition">
                {ilce.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === YORUMLAR (Rich Snippet) === */}
      <section className="py-16 bg-white" id="yorumlar">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Müşteri Yorumları
            </h2>
            <div className="flex items-center justify-center gap-2 text-accent-500">
              {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
              <span className="text-dark-600 font-semibold ml-2">4.9 / 5</span>
              <span className="text-dark-400">({testimonials.length} değerlendirme)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-dark-50 rounded-2xl p-6 hover:shadow-lg transition" itemScope itemType="https://schema.org/Review">
                <div className="flex gap-1 mb-3 text-accent-500">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-dark-600 text-sm leading-relaxed mb-4 italic" itemProp="reviewBody">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-dark-200 pt-3">
                  <div className="font-semibold text-dark-800 text-sm" itemProp="author">{t.name}</div>
                  <div className="text-dark-400 text-xs">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SSS (FAQ Rich Snippet) === */}
      <section className="py-16 bg-dark-50" id="sss">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-700 mb-8 text-center">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-heading font-semibold text-dark-800 hover:text-primary-600 transition" itemProp="name">
                  {faq.question}
                  <ChevronRight size={20} className="text-dark-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-dark-600 text-sm leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/sss" className="text-primary-600 font-semibold hover:text-primary-700 transition">
              Tüm Soruları Gör →
            </Link>
          </div>
        </div>
      </section>

      {/* === BLOG === */}
      <section className="py-16 bg-white" id="blog">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Nakliyat Blog
            </h2>
            <p className="text-dark-500">Taşınma rehberleri, fiyat bilgileri ve nakliyat ipuçları</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="bg-dark-50 rounded-2xl overflow-hidden card-hover">
                  <div className="h-40 bg-primary-100 relative overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-accent-600 bg-accent-50 px-2 py-1 rounded">{post.category}</span>
                    <h3 className="font-heading font-bold text-dark-800 mt-2 mb-2 group-hover:text-primary-600 transition line-clamp-2">{post.title}</h3>
                    <p className="text-dark-500 text-sm line-clamp-2">{post.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === BOTTOM CTA === */}
      <section className="py-16 bg-primary-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Hemen Taşının!</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">Adana şehirler arası nakliyat için bizi arayın, ücretsiz keşif ve fiyat teklifi alın.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-800 px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl">
              <Phone size={22} /> {SITE_CONFIG.phone}
            </a>
            <Link href="/teklif-al" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition border border-white/20">
              Online Teklif Al
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
