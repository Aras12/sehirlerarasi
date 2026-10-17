import { sayfalar } from '@/lib/content'
import { meta } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'

export const metadata = meta({
  title: 'Şehirler Arası Nakliyat Sıkça Sorulan Sorular',
  description: 'Şehirler arası nakliyat fiyatı, teslim süresi, sigorta, ambalaj, parça eşya ve ambar taşıma hakkında en çok sorulan sorular ve net cevaplar.',
  path: '/sss',
})

export default function SssPage() {
  return (
    <>
      <PageHero title="Sıkça Sorulan Sorular" lead="Taşınmadan önce en çok merak edilenler." crumbs={[{ href: '/sss', name: 'SSS' }]} imageAlt="Şehirler arası nakliyat soruları" />
      <div className="wrap max-w-4xl">
        <Faq items={sayfalar.sss} title="Merak edilenler" />
        <CtaBand />
      </div>
    </>
  )
}
