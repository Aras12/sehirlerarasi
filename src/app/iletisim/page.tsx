import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { meta } from '@/lib/seo'
import { SITE_CONFIG, waLink } from '@/data/site-config'
import PageHero from '@/components/PageHero'
import QuoteForm from '@/components/QuoteForm'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import { ilOptions } from '@/components/Sidebar'

export const metadata = meta({
  title: 'İletişim: BarajTrans Şehirler Arası Nakliyat',
  description: `BarajTrans iletişim: ${SITE_CONFIG.phone}, WhatsApp ve e-posta. Adana Çukurova merkezli şehirler arası nakliyat için ücretsiz keşif ve fiyat teklifi.`,
  path: '/iletisim',
})

export default function Iletisim() {
  const rows = [
    { Icon: Phone, t: 'Telefon', v: SITE_CONFIG.phone, href: SITE_CONFIG.phoneHref },
    { Icon: Mail, t: 'E-posta', v: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
    { Icon: MapPin, t: 'Adres', v: SITE_CONFIG.address },
    { Icon: Clock, t: 'Çalışma saatleri', v: SITE_CONFIG.workingHours },
  ]
  return (
    <>
      <PageHero title="İletişim" lead="Telefon, WhatsApp ya da form: hangisi kolayınıza gelirse." crumbs={[{ href: '/iletisim', name: 'İletişim' }]} imageAlt="BarajTrans iletişim" />
      <div className="wrap grid gap-10 py-10 lg:grid-cols-2">
        <div className="space-y-4">
          {rows.map(({ Icon, t, v, href }) => (
            <div key={t} className="card flex items-center gap-4 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sun-100 text-navy-800"><Icon className="h-5 w-5" /></span>
              <span><span className="block text-xs font-semibold uppercase text-slate-500">{t}</span>{href ? <a href={href} className="text-lg font-bold text-navy-900 hover:text-navy-600">{v}</a> : <span className="text-lg font-bold text-navy-900">{v}</span>}</span>
            </div>
          ))}
          <div className="flex flex-wrap gap-2">
            <a href={SITE_CONFIG.phoneHref} className="btn-sun"><Phone className="h-4 w-4" /> Hemen Ara</a>
            <a href={waLink('Merhaba, nakliyat için bilgi almak istiyorum.')} target="_blank" rel="noopener noreferrer" className="btn-wa"><WhatsAppIcon /> WhatsApp</a>
          </div>
        </div>
        <QuoteForm iller={ilOptions()} />
      </div>
    </>
  )
}
