import Link from 'next/link'
import { turistik } from '@/lib/content'
import { meta } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata = meta({
  title: 'Tatil Bölgelerine Nakliyat: Yazlık ve Sahil Taşıma',
  description: "Adana'dan Bodrum, Fethiye, Alanya, Marmaris, Kaş, Didim, Manavgat, Kemer, Ayvalık ve diğer tatil bölgelerine yazlık ve ev taşıma.",
  path: '/turistik',
})

export default function TuristikIndex() {
  return (
    <>
      <PageHero title="Tatil Bölgelerine Nakliyat" lead="Yazlığa, sahile ya da emeklilik için tatil kasabasına taşınanlar için." crumbs={[{ href: '/turistik', name: 'Tatil Bölgeleri' }]} imageAlt="Tatil bölgelerine yazlık eşyası taşıma" />
      <div className="wrap py-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {turistik.map((t) => (
            <Link key={t.slug} href={`/turistik/${t.slug}`} className="card p-5 hover:border-sun-300">
              <p className="text-lg font-bold text-navy-900">Adana ⇄ {t.name}</p>
              <p className="mt-1 text-sm text-slate-600">{t.il} · yaklaşık {t.km} km</p>
            </Link>
          ))}
        </div>
        <CtaBand />
      </div>
    </>
  )
}
