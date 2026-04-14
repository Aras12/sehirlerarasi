import { SITE_CONFIG } from '@/data/site-config'
import { generatePageMeta } from '@/lib/seo'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata = generatePageMeta({
  title: 'İletişim | Adana Şehirler Arası Nakliyat',
  description: 'Baraj Taşımacılık iletişim bilgileri. Adana şehirler arası nakliyat için bizi arayın veya mesaj bırakın.',
  path: '/iletisim',
  keywords: ['adana nakliyat iletişim', 'özgür nakliyat telefon', 'nakliyat firması adana'],
})

export default function IletisimPage() {
  return (
    <>
      <section className="bg-primary-700 py-10">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-3">İletişim</h1>
          <p className="text-blue-200">Nakliyat ihtiyacınız için bize ulaşın</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-dark-800 mb-6">Bize Ulaşın</h2>
            <div className="space-y-6">
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="flex items-start gap-4 bg-accent-50 rounded-2xl p-5 hover:shadow-md transition">
                <div className="w-12 h-12 bg-accent-400 rounded-xl flex items-center justify-center flex-shrink-0"><Phone className="text-primary-800" size={24}/></div>
                <div>
                  <h3 className="font-heading font-bold text-dark-800">Telefon</h3>
                  <p className="text-primary-600 font-bold text-lg">{SITE_CONFIG.phone}</p>
                  <p className="text-dark-400 text-sm">Hemen arayın, ücretsiz bilgi alın</p>
                </div>
              </a>

              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 bg-green-50 rounded-2xl p-5 hover:shadow-md transition">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0"><MessageCircle className="text-white" size={24}/></div>
                <div>
                  <h3 className="font-heading font-bold text-dark-800">WhatsApp</h3>
                  <p className="text-green-600 font-bold">WhatsApp ile Yazın</p>
                  <p className="text-dark-400 text-sm">Fotoğraf göndererek teklif alın</p>
                </div>
              </a>

              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-4 bg-primary-50 rounded-2xl p-5 hover:shadow-md transition">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0"><Mail className="text-white" size={24}/></div>
                <div>
                  <h3 className="font-heading font-bold text-dark-800">E-posta</h3>
                  <p className="text-primary-600 font-bold">{SITE_CONFIG.email}</p>
                  <p className="text-dark-400 text-sm">Detaylı bilgi için mail atın</p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-dark-50 rounded-2xl p-5">
                <div className="w-12 h-12 bg-dark-200 rounded-xl flex items-center justify-center flex-shrink-0"><MapPin className="text-dark-600" size={24}/></div>
                <div>
                  <h3 className="font-heading font-bold text-dark-800">Adres</h3>
                  <p className="text-dark-600">{SITE_CONFIG.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-dark-50 rounded-2xl p-5">
                <div className="w-12 h-12 bg-dark-200 rounded-xl flex items-center justify-center flex-shrink-0"><Clock className="text-dark-600" size={24}/></div>
                <div>
                  <h3 className="font-heading font-bold text-dark-800">Çalışma Saatleri</h3>
                  <p className="text-dark-600">{SITE_CONFIG.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map + links */}
          <div>
            <div className="bg-dark-100 rounded-2xl overflow-hidden h-80 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204648.45!2d35.2!3d37.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1528900ef12a1e2f%3A0x1a0e6a5b0c4c6d7f!2sAdana!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Baraj Taşımacılık Adana Konum"
              />
            </div>

            <div className="bg-accent-50 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-primary-700 mb-4">Hızlı Bağlantılar</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/fiyat-hesaplama" className="bg-white rounded-lg px-4 py-3 text-sm text-dark-700 hover:text-primary-600 hover:shadow transition text-center font-medium">Fiyat Hesapla</Link>
                <Link href="/teklif-al" className="bg-white rounded-lg px-4 py-3 text-sm text-dark-700 hover:text-primary-600 hover:shadow transition text-center font-medium">Teklif Al</Link>
                <Link href="/hizmetler" className="bg-white rounded-lg px-4 py-3 text-sm text-dark-700 hover:text-primary-600 hover:shadow transition text-center font-medium">Hizmetlerimiz</Link>
                <Link href="/sss" className="bg-white rounded-lg px-4 py-3 text-sm text-dark-700 hover:text-primary-600 hover:shadow transition text-center font-medium">S.S.S</Link>
                <Link href="/galeri" className="bg-white rounded-lg px-4 py-3 text-sm text-dark-700 hover:text-primary-600 hover:shadow transition text-center font-medium">Galeri</Link>
                <Link href="/blog" className="bg-white rounded-lg px-4 py-3 text-sm text-dark-700 hover:text-primary-600 hover:shadow transition text-center font-medium">Blog</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
