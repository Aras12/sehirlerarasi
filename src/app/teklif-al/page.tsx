import { sayfalar } from '@/lib/content'
import { meta } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import QuoteForm from '@/components/QuoteForm'
import { ilOptions } from '@/components/Sidebar'
import { ShieldCheck } from 'lucide-react'

const t = sayfalar.teklif
export const metadata = meta({ title: t.metaTitle, description: t.metaDescription, path: '/teklif-al' })

export default function TeklifAl() {
  return (
    <>
      <PageHero title={t.h1} lead={t.intro[0]} crumbs={[{ href: '/teklif-al', name: 'Teklif Al' }]} imageAlt="Şehirler arası nakliyat fiyat teklifi" />
      <div className="wrap grid gap-10 py-10 lg:grid-cols-[1fr_380px]">
        <QuoteForm iller={ilOptions()} title="Taşınma bilgilerinizi yazın" />
        <div className="prose-bt">
          {t.intro.slice(1).map((p: string, i: number) => <p key={i}>{p}</p>)}
          <ul className="space-y-2">
            {['Ücretsiz keşif', 'Yazılı ve değişmeyen fiyat', 'Sigorta poliçesi', 'Ambalaj ve montaj dahil'].map((x) => (
              <li key={x} className="flex items-center gap-2 font-semibold text-navy-900"><ShieldCheck className="h-5 w-5 text-sun-600" /> {x}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
