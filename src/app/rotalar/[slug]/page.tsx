import { notFound } from 'next/navigation'
import Link from 'next/link'
import { rotalar, ilByCode, adana } from '@/lib/content'
import { meta, serviceSchema } from '@/lib/seo'
import { driveHours, deliveryPlan, estimate, formatTl } from '@/data/pricing'
import { SITE_CONFIG } from '@/data/site-config'
import PageHero from '@/components/PageHero'
import PriceTable from '@/components/PriceTable'
import Article from '@/components/Article'
import Faq from '@/components/Faq'
import Sidebar from '@/components/Sidebar'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'

type P = { params: { slug: string } }

export function generateStaticParams() {
  return rotalar.map((r) => ({ slug: r.slug }))
}

export function generateMetadata({ params }: P) {
  const r = rotalar.find((x) => x.slug === params.slug)
  if (!r) return {}
  return meta({ title: r.metaTitle, description: r.metaDescription, path: `/rotalar/${r.slug}` })
}

const vehicles = [
  { n: 'Pikap', d: 'Birkaç parça eşya, koli veya tek beyaz eşya' },
  { n: 'Kamyonet', d: 'Öğrenci evi, 1+1 ve az eşyalı daireler' },
  { n: 'Kapalı kasa kamyon', d: '2+1 ve 3+1 evler, aktarmasız tam araç' },
  { n: 'Ambar (parsiyel)', d: 'Az eşyayı başka yüklerle paylaşarak ekonomik gönderim' },
]

export default function RoutePage({ params }: P) {
  const r = rotalar.find((x) => x.slug === params.slug)
  if (!r) notFound()
  const il = ilByCode(r.code)
  const [lo] = estimate(r.km, '2+1')
  const others = rotalar.filter((x) => x.slug !== r.slug).slice(0, 8)
  return (
    <>
      <JsonLd data={serviceSchema(`Adana ${r.to} Şehirler Arası Nakliyat`, r.metaDescription, `/rotalar/${r.slug}`, [adana.name, r.to])} />
      <PageHero title={r.h1} lead={r.lead} crumbs={[{ href: '/rotalar', name: 'Rotalar' }, { href: `/rotalar/${r.slug}`, name: `Adana ⇄ ${r.to}` }]} image={r.code === '33' ? '/img/genel/mersin-sehirler-arasi-nakliyat.webp' : undefined} imageAlt={r.imgAlt} badge="İki yönlü rota">
        <dl className="mt-6 grid max-w-2xl grid-cols-3 gap-3 text-white">
          <div className="rounded-xl bg-white/10 p-3"><dt className="text-xs text-navy-200">Mesafe</dt><dd className="font-bold">{r.km} km</dd></div>
          <div className="rounded-xl bg-white/10 p-3"><dt className="text-xs text-navy-200">Yol süresi</dt><dd className="font-bold">{driveHours(r.km).replace('Yaklaşık ', '')}</dd></div>
          <div className="rounded-xl bg-white/10 p-3"><dt className="text-xs text-navy-200">2+1 ev</dt><dd className="font-bold">{formatTl(lo)}+</dd></div>
        </dl>
      </PageHero>

      <div className="wrap grid gap-10 py-10 lg:grid-cols-[1fr_340px]">
        <article className="prose-bt min-w-0">
          <Article
            sections={r.sections}
            after={{
              match: /fiyat|ücret/i,
              node: (
                <>
                  <PriceTable km={r.km} from="Adana" to={r.to} caption={`Adana ⇄ ${r.to} tahmini taşıma fiyatları (${SITE_CONFIG.priceUpdated})`} />
                  <p className="text-sm text-slate-500">Teslim: {deliveryPlan(r.km)}. Fiyatlar iki yön için de geçerli tahmini aralıktır; kesin fiyat keşif sonrası yazılı verilir.</p>
                </>
              ),
            }}
          />
          <h2>Bu rotada hangi araç?</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {vehicles.map((v) => (
              <div key={v.n} className="rounded-2xl border border-slate-200 p-4">
                <p className="!mb-1 font-bold text-navy-900">{v.n}</p>
                <p className="!mb-0 text-sm">{v.d}</p>
              </div>
            ))}
          </div>
          {r.ipuclari?.length > 0 && (
            <>
              <h2>Adana {r.to} taşınmasında pratik ipuçları</h2>
              <ul>{r.ipuclari.map((t) => <li key={t}>{t}</li>)}</ul>
            </>
          )}
          <div className="my-8 flex flex-wrap gap-2">
            <Link href={`/iller/${adana.slug}`} className="btn-ghost">Adana nakliyat</Link>
            {il && <Link href={`/iller/${il.slug}`} className="btn-ghost">{r.to} nakliyat</Link>}
            <Link href={`/fiyat-hesaplama?nereden=01&nereye=${r.code}`} className="btn-sun">Bu rota için fiyat hesapla</Link>
          </div>
        </article>
        <Sidebar from="01" to={r.code} wa={`Merhaba, Adana ${r.to} arası nakliyat için fiyat almak istiyorum.`} />
      </div>

      <div className="wrap">
        <Faq items={r.faq} title={`Adana ${r.to} nakliyat soruları`} />
        <section className="py-10">
          <h2 className="text-xl font-bold text-navy-900">Diğer rotalar</h2>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {others.map((o) => <Link key={o.slug} href={`/rotalar/${o.slug}`} className="card px-4 py-3 text-sm font-semibold text-navy-900 hover:border-sun-300">Adana ⇄ {o.to}</Link>)}
          </div>
        </section>
        <CtaBand title={`${r.ek.a} taşınma planınızı yapalım`} wa={`Merhaba, Adana ${r.to} arası nakliyat için fiyat almak istiyorum.`} />
      </div>
    </>
  )
}
