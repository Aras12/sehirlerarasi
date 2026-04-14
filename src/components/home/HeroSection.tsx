import { SITE_CONFIG } from '@/data/site-config'
import { Phone, Shield, Clock, Award } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-primary-700 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
            <Shield size={16} className="text-accent-400" />
            <span>Sigortalı ve Güvenli Taşımacılık</span>
          </div>

          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Adana Şehirler Arası
            <span className="text-accent-300 block mt-2">Evden Eve Nakliyat</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Baraj Taşımacılık ile Adana&apos;dan Türkiye&apos;nin her köşesine profesyonel, sigortalı ve ambalajlı nakliyat hizmeti. Eşyalarınız güvende, taşınmanız kolay!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl shadow-accent-500/30 hover:scale-105"
            >
              <Phone size={22} />
              Hemen Ara: {SITE_CONFIG.phone}
            </a>
            <Link href="/iletisim" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition backdrop-blur-sm border border-white/20">
              Ücretsiz Teklif Alın
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Shield, label: 'Sigortalı Taşıma', sub: 'Tam Teminat' },
              { icon: Clock, label: '7/24 Hizmet', sub: 'Her Gün Açığız' },
              { icon: Award, label: 'Profesyonel Ekip', sub: '10+ Yıl Tecrübe' },
              { icon: Phone, label: 'Ücretsiz Keşif', sub: 'Yerinde Fiyat' },
            ].map((badge, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <badge.icon className="text-accent-400 mx-auto mb-2" size={28} />
                <div className="font-semibold text-sm">{badge.label}</div>
                <div className="text-xs text-blue-200">{badge.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 30C1440 30 1320 0 1080 0C840 0 720 30 480 30C240 30 120 0 0 0L0 60Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
