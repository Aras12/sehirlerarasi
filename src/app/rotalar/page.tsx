import Link from 'next/link'
import { rotalar, trSort } from '@/lib/content'
import { meta } from '@/lib/seo'
import { estimate, formatTl, driveHours } from '@/data/pricing'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata = meta({
  title: 'Adana Çıkışlı Şehirler Arası Nakliyat Rotaları',
  description: 'Adana ile Ankara, İstanbul, İzmir, Eskişehir, Konya ve diğer iller arasında iki yönlü nakliyat rotaları: mesafe, yol süresi, araç seçenekleri ve tahmini fiyatlar.',
  path: '/rotalar',
})

export default function RotalarPage() {
  return (
    <>
      <PageHero title="Şehirler Arası Nakliyat Rotaları" lead="Her rota iki yönlüdür: Adana'dan gidiş ve Adana'ya dönüş taşımaları aynı sayfada." crumbs={[{ href: '/rotalar', name: 'Rotalar' }]} imageAlt="Adana çıkışlı şehirler arası nakliyat rotaları" />
      <div className="wrap py-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trSort(rotalar, (r) => r.to).map((r) => (
            <Link key={r.slug} href={`/rotalar/${r.slug}`} className="card p-5 transition hover:border-sun-300">
              <p className="text-lg font-bold text-navy-900">Adana ⇄ {r.to}</p>
              <p className="mt-1 text-sm text-slate-600">{r.km} km · {driveHours(r.km)}</p>
              <p className="mt-2 text-sm font-semibold text-navy-600">2+1 ev {formatTl(estimate(r.km, '2+1')[0])}&apos;den başlayan tahmini fiyat</p>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">Listede olmayan bir güzergah mı? 81 ilin tamamına taşıma yapıyoruz; <Link href="/iller" className="font-semibold text-navy-600 underline">il sayfalarından</Link> bakabilir ya da teklif isteyebilirsiniz.</p>
        <CtaBand />
      </div>
    </>
  )
}
