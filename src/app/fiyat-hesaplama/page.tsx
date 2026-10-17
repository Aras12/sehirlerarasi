import { Suspense } from 'react'
import { sayfalar } from '@/lib/content'
import { meta } from '@/lib/seo'
import { priceFactors } from '@/data/pricing'
import PageHero from '@/components/PageHero'
import PriceCalculator from '@/components/PriceCalculator'
import { ilOptions } from '@/components/Sidebar'
import CtaBand from '@/components/CtaBand'

const h = sayfalar.hesaplama
export const metadata = meta({ title: h.metaTitle, description: h.metaDescription, path: '/fiyat-hesaplama' })

export default function FiyatHesaplama() {
  return (
    <>
      <PageHero title={h.h1} lead={h.intro[0]} crumbs={[{ href: '/fiyat-hesaplama', name: 'Fiyat Hesaplama' }]} imageAlt="Şehirler arası nakliyat fiyat hesaplama" />
      <div className="wrap grid gap-10 py-10 lg:grid-cols-[1fr_380px]">
        <Suspense><PriceCalculator iller={ilOptions()} /></Suspense>
        <div className="prose-bt">
          {h.intro.slice(1).map((p: string, i: number) => <p key={i}>{p}</p>)}
          <h2>Bilmeniz gerekenler</h2>
          <ul>{h.notes.map((n: string) => <li key={n}>{n}</li>)}</ul>
        </div>
      </div>
      <section className="bg-navy-50/60 py-12">
        <div className="wrap">
          <h2 className="text-2xl font-extrabold text-navy-900">Fiyatı neler etkiler?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {priceFactors.map((f) => <div key={f.title} className="card p-5"><p className="font-bold text-navy-900">{f.title}</p><p className="mt-1 text-sm text-slate-600">{f.text}</p></div>)}
          </div>
        </div>
      </section>
      <div className="wrap"><CtaBand /></div>
    </>
  )
}
