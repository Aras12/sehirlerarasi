import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SITE_CONFIG, waLink } from '@/data/site-config'
import WhatsAppIcon from './WhatsAppIcon'

export default function CtaBand({ title = 'Taşınma tarihinizi şimdiden ayırtın', text = 'Ücretsiz keşif yapalım, ambalaj ve sigorta dahil yazılı fiyatı verelim.', wa }: { title?: string; text?: string; wa?: string }) {
  return (
    <div className="relative mt-12 overflow-hidden rounded-3xl bg-navy-800 p-7 text-white sm:p-10">
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sun-400/20" aria-hidden />
      <p className="relative text-2xl font-bold">{title}</p>
      <p className="relative mt-2 max-w-2xl text-navy-100">{text}</p>
      <div className="relative mt-5 flex flex-wrap gap-2">
        <a href={SITE_CONFIG.phoneHref} className="btn-sun"><Phone className="h-4 w-4" /> {SITE_CONFIG.phone}</a>
        <a href={waLink(wa ?? 'Merhaba, şehirler arası nakliyat için fiyat almak istiyorum.')} target="_blank" rel="noopener noreferrer" className="btn-wa"><WhatsAppIcon /> WhatsApp</a>
        <Link href="/teklif-al" className="btn border border-white/30 text-white hover:bg-white/10">Online teklif al</Link>
      </div>
    </div>
  )
}
