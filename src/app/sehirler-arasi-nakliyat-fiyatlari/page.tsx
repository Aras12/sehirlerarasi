import Link from 'next/link'
import { sayfalar, rotalar, trSort } from '@/lib/content'
import { meta } from '@/lib/seo'
import { estimate, formatTl, homeTypes } from '@/data/pricing'
import { SITE_CONFIG } from '@/data/site-config'
import PageHero from '@/components/PageHero'
import Article from '@/components/Article'
import CtaBand from '@/components/CtaBand'

const f = sayfalar.fiyatlar
export const metadata = meta({ title: f.metaTitle, description: f.metaDescription, path: '/sehirler-arasi-nakliyat-fiyatlari' })

const cols = ['parca', '1+1', '2+1', '3+1', '4+1']

export default function Fiyatlar() {
  const list = trSort(rotalar, (r) => r.to)
  return (
    <>
      <PageHero title={f.h1} lead={f.intro[0]} crumbs={[{ href: '/sehirler-arasi-nakliyat-fiyatlari', name: 'Nakliyat Fiyatları' }]} imageAlt="Şehirler arası nakliyat fiyatları tablosu" badge={SITE_CONFIG.priceUpdated} />
      <div className="wrap py-10">
        <div className="prose-bt max-w-3xl">{f.intro.slice(1).map((p: string, i: number) => <p key={i}>{p}</p>)}</div>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-card">
          <table className="w-full min-w-[720px] text-left text-sm">
            <caption className="bg-navy-900 px-4 py-3 text-left font-bold text-white">Adana çıkışlı ve varışlı tahmini fiyatlar ({SITE_CONFIG.priceUpdated})</caption>
            <thead className="bg-navy-50 text-navy-900">
              <tr><th className="px-4 py-3">Rota</th><th className="px-4 py-3">Km</th>{cols.map((c) => <th key={c} className="px-4 py-3">{homeTypes.find((h) => h.id === c)!.short}</th>)}</tr>
            </thead>
            <tbody>
              {list.map((r) => (
                <tr key={r.slug} className="border-t border-slate-100 odd:bg-white even:bg-slate-50/60">
                  <td className="px-4 py-3 font-semibold"><Link href={`/rotalar/${r.slug}`} className="text-navy-700 hover:underline">Adana ⇄ {r.to}</Link></td>
                  <td className="px-4 py-3">{r.km}</td>
                  {cols.map((c) => { const [lo, hi] = estimate(r.km, c); return <td key={c} className="whitespace-nowrap px-4 py-3">{formatTl(lo)} - {formatTl(hi)}</td> })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">Tablodaki rakamlar karayolu mesafesine göre hesaplanmış tahmini aralıklardır. Kat, asansör ve özel eşya durumuna göre değişir; kesin fiyat ücretsiz keşif sonrası yazılı verilir. Kendi adresleriniz için <Link href="/fiyat-hesaplama" className="font-semibold text-navy-600 underline">fiyat hesaplama aracını</Link> kullanabilirsiniz.</p>
        <article className="prose-bt mt-10 max-w-3xl"><Article sections={f.sections} /></article>
        <CtaBand />
      </div>
    </>
  )
}
