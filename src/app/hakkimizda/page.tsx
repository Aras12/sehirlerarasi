import { SITE_CONFIG } from '@/data/site-config'
import { generatePageMeta } from '@/lib/seo'
import Link from 'next/link'
import { Shield, Users, Truck, Award, Phone, CheckCircle } from 'lucide-react'

export const metadata = generatePageMeta({
  title: 'Hakkımızda | Baraj Taşımacılık - Adana Şehirler Arası Nakliyat',
  description: 'Baraj Taşımacılık hakkında. Adana merkezli şehirler arası nakliyat firması. Yılların tecrübesi, profesyonel ekip ve sigortalı taşımacılık.',
  path: '/hakkimizda',
  keywords: ['özgür nakliyat', 'adana nakliyat firması', 'şehirler arası nakliye firması adana'],
})

export default function HakkimizdaPage() {
  return (
    <>
      <section className="bg-primary-700 py-10">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-3">Hakkımızda</h1>
          <p className="text-blue-200">Adana&apos;nın güvenilir nakliyat firması</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2>Baraj Taşımacılık - Adana Şehirler Arası Nakliyat</h2>
            <p><strong>Baraj Taşımacılık</strong> olarak {new Date().getFullYear() - SITE_CONFIG.foundingYear} yılı aşkın süredir Adana merkezli şehirler arası nakliyat hizmeti sunmaktayız. Kuruluşumuzdan bu yana müşteri memnuniyetini ön planda tutarak, Türkiye&apos;nin 81 iline güvenli, hızlı ve ekonomik taşımacılık çözümleri sunuyoruz.</p>

            <h3>Misyonumuz</h3>
            <p>Nakliyat sektöründe en yüksek kalite standartlarında hizmet sunarak, müşterilerimizin taşınma sürecini stressiz ve sorunsuz hale getirmek. Her eşyayı kendi eşyamız gibi özenle taşımak temel prensiplerimizin başında gelir.</p>

            <h3>Vizyonumuz</h3>
            <p>Adana ve Türkiye genelinde en çok tercih edilen, müşteri memnuniyetiyle öne çıkan ve sektöre yön veren nakliyat firması olmak. Modern teknoloji ve profesyonel yaklaşımla hizmet kalitemizi sürekli artırmak.</p>

            <h3>Neden Bizi Tercih Etmelisiniz?</h3>
            <p>Sektördeki uzun yıllar deneyimimiz, profesyonel ve eğitimli ekibimiz, modern araç filomuz ve müşteri odaklı hizmet anlayışımızla Adana&apos;nın lider nakliyat firmalarından biriyiz. Tüm taşımalarımız sigortalı olarak gerçekleştirilmekte olup, eşyalarınızın güvenliği bizim önceliğimizdir.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Award, value: `${new Date().getFullYear() - SITE_CONFIG.foundingYear}+`, label: 'Yıl Tecrübe' },
              { icon: Users, value: '5000+', label: 'Mutlu Müşteri' },
              { icon: Truck, value: '81', label: 'İl Kapsama' },
              { icon: Shield, value: '%100', label: 'Sigortalı Taşıma' },
            ].map((stat, i) => (
              <div key={i} className="bg-primary-50 rounded-2xl p-6 text-center">
                <stat.icon className="text-primary-600 mx-auto mb-2" size={32} />
                <div className="font-heading text-3xl font-extrabold text-primary-700">{stat.value}</div>
                <div className="text-dark-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="bg-dark-50 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-primary-700 mb-6 text-center">Değerlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Sigortalı ve güvenli taşımacılık',
                'Şeffaf ve dürüst fiyatlandırma',
                'Profesyonel ve eğitimli personel',
                'Zamanında teslimat garantisi',
                'Modern ve bakımlı araç filosu',
                '7/24 müşteri desteği',
              ].map((v, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4">
                  <CheckCircle className="text-accent-500 flex-shrink-0" size={20} />
                  <span className="text-dark-700 font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-primary-700 mb-4">Bizimle İletişime Geçin</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2"><Phone size={18}/>{SITE_CONFIG.phone}</a>
              <Link href="/teklif-al" className="bg-accent-400 hover:bg-accent-500 text-primary-800 px-6 py-3 rounded-xl font-bold">Online Teklif Al</Link>
              <Link href="/iletisim" className="border-2 border-primary-300 text-primary-700 px-6 py-3 rounded-xl font-bold hover:bg-primary-50 transition">İletişim</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
