'use client'
import { useState } from 'react'
import { tabArticles } from '@/data/content'
import Link from 'next/link'
import { Calculator, Send, ArrowRight } from 'lucide-react'

export default function TabArticles() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-14 bg-white" id="makaleler">
      <div className="container mx-auto px-4">
        {/* Giriş Yazısı */}
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary-700 mb-5 text-center">
            Adana Şehirler Arası Nakliyat
          </h2>
          <div className="text-dark-600 text-base md:text-lg leading-relaxed text-center space-y-3">
            <p>
              <strong>Baraj Taşımacılık</strong> olarak Adana merkezli şehirler arası evden eve nakliyat hizmetimizle
              Türkiye&#39;nin 81 iline güvenli, sigortalı ve profesyonel taşımacılık yapıyoruz.
              Yılların deneyimi, modern araç filomuz ve uzman kadromuzla eşyalarınızı özenle paketliyor,
              zamanında ve hasarsız teslim ediyoruz.
            </p>
            <p>
              Adana şehirler arası nakliyat, evden eve nakliyat, asansörlü taşımacılık, 
              kamyonet nakliye, şehir içi nakliye ve eşya depolama 
              hizmetlerimiz hakkında aşağıdaki sekmelerden detaylı bilgi alabilirsiniz.
            </p>
          </div>
        </div>

        {/* Tab Başlıkları */}
        <div className="border-b-2 border-dark-100 mb-0">
          <div className="flex overflow-x-auto gap-0 -mb-[2px]" style={{ scrollbarWidth: 'none' }}>
            {tabArticles.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`whitespace-nowrap px-4 md:px-5 py-3 text-sm md:text-base font-heading font-semibold border-b-[3px] transition-all flex-shrink-0 ${
                  activeTab === i
                    ? 'border-accent-500 text-primary-700 bg-accent-50/60'
                    : 'border-transparent text-dark-400 hover:text-dark-600 hover:border-dark-200'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab İçeriği */}
        <div className="bg-dark-50 rounded-b-2xl p-6 md:p-8 border border-t-0 border-dark-100 animate-fade-in">
          <div className="max-w-4xl">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-700 mb-4">
              {tabArticles[activeTab].title}
            </h3>
            <div
              className="prose max-w-none text-dark-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: tabArticles[activeTab].content }}
            />

            {/* CTA Butonları */}
            <div className="mt-6 pt-4 border-t border-dark-200 flex flex-wrap gap-3">
              <Link href="/fiyat-hesaplama" className="inline-flex items-center gap-1.5 bg-accent-400 hover:bg-accent-500 text-primary-800 px-4 py-2 rounded-lg text-sm font-bold transition">
                <Calculator size={16} /> Fiyat Hesapla
              </Link>
              <Link href="/teklif-al" className="inline-flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition">
                <Send size={16} /> Teklif Al
              </Link>
              <Link href="/hizmetler" className="inline-flex items-center gap-1.5 bg-white border border-dark-200 hover:border-primary-300 text-dark-700 hover:text-primary-600 px-4 py-2 rounded-lg text-sm font-medium transition">
                Tüm Hizmetler <ArrowRight size={14} />
              </Link>
              <Link href="/sss" className="inline-flex items-center gap-1.5 bg-white border border-dark-200 hover:border-primary-300 text-dark-700 hover:text-primary-600 px-4 py-2 rounded-lg text-sm font-medium transition">
                Sıkça Sorulan Sorular <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
