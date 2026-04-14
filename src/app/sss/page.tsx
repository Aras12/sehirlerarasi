import { faqs } from '@/data/content'
import { SITE_CONFIG } from '@/data/site-config'
import { generatePageMeta, faqSchema } from '@/lib/seo'
import Link from 'next/link'
import { ChevronRight, Phone } from 'lucide-react'

export const metadata = generatePageMeta({
  title: 'Sıkça Sorulan Sorular | Nakliyat SSS',
  description: 'Şehirler arası nakliyat hakkında sıkça sorulan sorular ve cevapları. Nakliyat fiyatları, sigorta, paketleme ve taşıma süreci hakkında bilgi.',
  path: '/sss',
  keywords: ['nakliyat sss', 'şehirler arası nakliyat soruları', 'evden eve nakliyat bilgi', 'nakliye fiyatları soru cevap'],
})

export default function SSSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <section className="bg-primary-700 py-10">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-3">Sıkça Sorulan Sorular</h1>
          <p className="text-blue-200">Nakliyat hizmetlerimiz hakkında merak edilen sorular</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white rounded-xl shadow-sm border border-dark-100 group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-heading font-semibold text-dark-800 hover:text-primary-600 transition" itemProp="name">
                {faq.question}
                <ChevronRight size={20} className="text-dark-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-5 text-dark-600 text-sm leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 rounded-2xl p-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-primary-700 mb-3">Sorunuzu bulamadınız mı?</h2>
          <p className="text-dark-600 mb-6">Bizi arayın veya teklif formunu doldurun, size yardımcı olalım.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2"><Phone size={18}/>{SITE_CONFIG.phone}</a>
            <Link href="/teklif-al" className="bg-accent-400 hover:bg-accent-500 text-primary-800 px-6 py-3 rounded-xl font-bold">Teklif Al</Link>
            <Link href="/fiyat-hesaplama" className="bg-white border-2 border-primary-300 text-primary-700 px-6 py-3 rounded-xl font-bold hover:bg-primary-50 transition">Fiyat Hesapla</Link>
          </div>
        </div>
      </div>
    </>
  )
}
