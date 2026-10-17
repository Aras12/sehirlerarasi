import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { iller, ilByCode, routeForCode, hizmetler } from '@/lib/content'
import { meta, serviceSchema } from '@/lib/seo'
import { estimate, formatTl, driveHours, deliveryPlan } from '@/data/pricing'
import { SITE_CONFIG } from '@/data/site-config'
import PageHero from '@/components/PageHero'
import PriceTable from '@/components/PriceTable'
import Faq from '@/components/Faq'
import Sidebar from '@/components/Sidebar'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'

type P = { params: { slug: string } }

export function generateStaticParams() {
  return iller.map((i) => ({ slug: i.slug }))
}

export function generateMetadata({ params }: P) {
  const il = iller.find((i) => i.slug === params.slug)
  if (!il) return {}
  return meta({ title: il.metaTitle, description: il.metaDescription, path: `/iller/${il.slug}` })
}

// Başlıklar her ilde aynı kalıp olmasın diye plaka koduna göre dönüşümlü seçilir.
const H = {
  nakliyat: ['{il} Şehirler Arası Nakliyat', '{il} Şehirler Arası Evden Eve Nakliyat', '{il} Çıkışlı ve Varışlı Şehirler Arası Nakliyat'],
  fiyat: ['{il} Şehirler Arası Ev Taşıma Fiyatları', '{il} Şehirler Arası Nakliyat Fiyatları {yil}', '{il} Ev Taşıma Ücretleri Nasıl Belirlenir?'],
  parca: ['{il} Şehirler Arası Parça Eşya Taşıma', '{il} Parça Eşya ve Ambar Nakliye', 'Az Eşya İçin {il} Parsiyel Taşıma'],
  sigorta: ['{il} Şehirler Arası Sigortalı Taşıma', '{il} Sigortalı ve Ambalajlı Ev Taşıma', 'Eşyanız Güvencede: {il} Sigortalı Nakliyat'],
  ipucu: ['{a} Taşınmadan Önce Bilmeniz Gerekenler', '{il} Taşınması İçin Pratik Öneriler', '{il} Ev Taşıma Rehberi'],
}

export default function IlPage({ params }: P) {
  const il = iller.find((i) => i.slug === params.slug)
  if (!il) notFound()
  const n = parseInt(il.code, 10)
  const h = (k: keyof typeof H) => H[k][n % 3].replace('{il}', il.name).replace('{a}', il.ek.a).replace('{yil}', '2026')
  const isAdana = il.code === '01'
  const route = routeForCode(il.code)
  const [lo] = estimate(il.kmAdana, '2+1')
  const komsu = il.komsu.map(ilByCode).filter(Boolean)
  const featured = ['evden-eve-nakliyat', 'parca-esya-tasima', 'ambar-nakliye', 'kamyonet-nakliye', 'asansorlu-tasima', 'sigortali-tasima'].map((s) => hizmetler.find((x) => x.slug === s)!)
  const image = il.code === '33' ? '/img/genel/mersin-sehirler-arasi-nakliyat.webp' : undefined
  return (
    <>
      <JsonLd data={serviceSchema(`${il.name} Şehirler Arası Nakliyat`, il.metaDescription, `/iller/${il.slug}`, il.name)} />
      <PageHero title={il.h1} lead={il.intro[0]} crumbs={[{ href: '/iller', name: 'İller' }, { href: `/iller/${il.slug}`, name: il.name }]} image={image} imageAlt={il.imgAlt} badge={il.region}>
        {!isAdana && (
          <dl className="mt-6 grid max-w-2xl grid-cols-3 gap-3 text-white">
            <div className="rounded-xl bg-white/10 p-3"><dt className="text-xs text-navy-200">Adana mesafe</dt><dd className="font-bold">{il.kmAdana} km</dd></div>
            <div className="rounded-xl bg-white/10 p-3"><dt className="text-xs text-navy-200">Yol süresi</dt><dd className="font-bold">{driveHours(il.kmAdana).replace('Yaklaşık ', '')}</dd></div>
            <div className="rounded-xl bg-white/10 p-3"><dt className="text-xs text-navy-200">2+1 ev</dt><dd className="font-bold">{formatTl(lo)}+</dd></div>
          </dl>
        )}
      </PageHero>

      <div className="wrap grid gap-10 py-10 lg:grid-cols-[1fr_340px]">
        <article className="prose-bt min-w-0">
          {il.intro.slice(1).map((p, i) => <p key={i}>{p}</p>)}

          <h2>{h('nakliyat')}</h2>
          {il.nakliyat.map((p, i) => <p key={i}>{p}</p>)}

          <h2>{h('fiyat')}</h2>
          {il.fiyat.map((p, i) => <p key={i}>{p}</p>)}
          {isAdana ? null : (
            <>
              <PriceTable km={il.kmAdana} from="Adana" to={il.name} caption={`Adana ⇄ ${il.name} tahmini ev taşıma fiyatları (${SITE_CONFIG.priceUpdated})`} />
              <p className="text-sm text-slate-500">Teslim: {deliveryPlan(il.kmAdana)}. Tablo karayolu mesafesine göre hesaplanmış tahmini aralıktır; kesin fiyat ücretsiz keşif sonrası yazılı verilir.</p>
            </>
          )}

          <h2>{h('parca')}</h2>
          {il.parca.map((p, i) => <p key={i}>{p}</p>)}

          <h2>{h('sigorta')}</h2>
          {il.sigorta.map((p, i) => <p key={i}>{p}</p>)}

          <h2>{h('ipucu')}</h2>
          <ul>{il.ipucu.map((p) => <li key={p}>{p}</li>)}</ul>

          {route && (
            <div className="not-prose my-8 rounded-2xl bg-navy-900 p-6 text-white">
              <p className="text-lg font-bold">Adana ⇄ {il.name} rota sayfası</p>
              <p className="mt-1 text-sm text-navy-100">Bu güzergahta pikap, kamyonet ve ambar seçenekleri, yol süresi ve ayrıntılı fiyatlar.</p>
              <Link href={`/rotalar/${route.slug}`} className="btn-sun mt-4">Rotayı incele</Link>
            </div>
          )}

          <h2>{il.name} İlçelerine Nakliyat</h2>
          <p>{il.ek.in ?? il.name} tüm ilçelerine ev, ofis ve parça eşya taşıması yapıyoruz:</p>
          <p className="not-prose flex flex-wrap gap-2">
            {il.ilceler.map((x) => <span key={x} className="chip">{x}</span>)}
          </p>
        </article>
        <Sidebar from={isAdana ? '01' : il.code} to={isAdana ? '' : '01'} wa={`Merhaba, ${il.name} şehirler arası nakliyat için fiyat almak istiyorum.`} />
      </div>

      <section className="bg-navy-50/60 py-12">
        <div className="wrap">
          <h2 className="text-2xl font-extrabold text-navy-900">{il.name} için hizmetlerimiz</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {featured.map((s) => (
              <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="card overflow-hidden transition hover:border-sun-300">
                <div className="relative aspect-square"><Image src={s.image} alt={`${il.name} ${s.name.toLocaleLowerCase('tr')}`} fill sizes="(max-width:640px) 50vw, 16vw" className="object-cover" /></div>
                <p className="p-3 text-sm font-bold text-navy-900">{s.name}</p>
              </Link>
            ))}
          </div>
          {komsu.length > 0 && (
            <>
              <h2 className="mt-10 text-xl font-bold text-navy-900">Yakın illere şehirler arası nakliyat</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {komsu.map((k) => <Link key={k.code} href={`/iller/${k.slug}`} className="btn-ghost !py-2">{k.name} Nakliyat</Link>)}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="wrap">
        <Faq items={il.faq} title={`${il.name} nakliyat hakkında sık sorulanlar`} />
        <CtaBand title={`${il.ek.a} ya da ${il.ek.dan} taşınıyor musunuz?`} wa={`Merhaba, ${il.name} nakliyat için fiyat almak istiyorum.`} />
      </div>
    </>
  )
}
