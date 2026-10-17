import Link from 'next/link'
import { Phone, Calculator, Boxes } from 'lucide-react'
import { iller, trSort } from '@/lib/content'
import { SITE_CONFIG, waLink } from '@/data/site-config'
import QuoteForm from './QuoteForm'
import WhatsAppIcon from './WhatsAppIcon'

export const ilOptions = () => trSort(iller, (i) => i.name).map((i) => ({ code: i.code, name: i.name }))

/** İç sayfalarda sağ sütun: teklif formu + hızlı iletişim + araçlar. */
export default function Sidebar({ from = '01', to = '', wa }: { from?: string; to?: string; wa?: string }) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-24">
      <QuoteForm iller={ilOptions()} from={from} to={to} compact />
      <div className="card space-y-2 p-5">
        <p className="font-bold text-navy-900">Hemen ulaşın</p>
        <a href={SITE_CONFIG.phoneHref} className="btn-sun w-full"><Phone className="h-4 w-4" /> {SITE_CONFIG.phone}</a>
        <a href={waLink(wa ?? 'Merhaba, şehirler arası nakliyat için fiyat almak istiyorum.')} target="_blank" rel="noopener noreferrer" className="btn-wa w-full"><WhatsAppIcon /> WhatsApp</a>
        <Link href="/fiyat-hesaplama" className="btn-ghost w-full"><Calculator className="h-4 w-4" /> Fiyat hesaplama</Link>
        <Link href="/esya-hacmi-hesaplama" className="btn-ghost w-full"><Boxes className="h-4 w-4" /> Eşya hacmi hesaplama</Link>
      </div>
    </aside>
  )
}
