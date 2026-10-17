import Image from 'next/image'
import Breadcrumbs, { Crumb } from './Breadcrumbs'

/** İç sayfa başlığı: görsel arka plan + lacivert örtü + başlık. */
export default function PageHero({ title, lead, crumbs, image = '/img/genel/sehirler-arasi-evden-eve-nakliyat-banner.webp', imageAlt, badge, children }: { title: string; lead?: string; crumbs: Crumb[]; image?: string; imageAlt: string; badge?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover object-right opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/30" aria-hidden />
      <div className="wrap relative py-10 sm:py-14">
        <Breadcrumbs items={crumbs} />
        {badge && <span className="mt-5 inline-block rounded-full bg-sun-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy-950">{badge}</span>}
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">{title}</h1>
        {lead && <p className="mt-3 max-w-2xl text-base text-navy-100 sm:text-lg">{lead}</p>}
        {children}
      </div>
    </section>
  )
}
