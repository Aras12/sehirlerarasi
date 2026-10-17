import { sayfalar } from '@/lib/content'
import { meta } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import VolumeCalculator from '@/components/VolumeCalculator'
import CtaBand from '@/components/CtaBand'

const h = sayfalar.hacim
export const metadata = meta({ title: h.metaTitle, description: h.metaDescription, path: '/esya-hacmi-hesaplama' })

export default function Hacim() {
  return (
    <>
      <PageHero title={h.h1} lead={h.intro[0]} crumbs={[{ href: '/esya-hacmi-hesaplama', name: 'Eşya Hacmi Hesaplama' }]} imageAlt="Eşya hacmi hesaplama ve araç seçimi" />
      <div className="wrap py-10">
        <VolumeCalculator />
        <div className="prose-bt mt-10 max-w-3xl">
          {h.intro.slice(1).map((p: string, i: number) => <p key={i}>{p}</p>)}
          <h2>Hacmi doğru tahmin etmek için</h2>
          <ul>{h.tips.map((t: string) => <li key={t}>{t}</li>)}</ul>
        </div>
        <CtaBand />
      </div>
    </>
  )
}
