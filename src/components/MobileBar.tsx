'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, FileText, Truck, Calculator, Phone } from 'lucide-react'
import { SITE_CONFIG, waLink } from '@/data/site-config'
import WhatsAppIcon from './WhatsAppIcon'

const items = [
  { href: '/', label: 'Anasayfa', Icon: Home },
  { href: '/teklif-al', label: 'Teklif Al', Icon: FileText },
  { href: '/hizmetler', label: 'Hizmetler', Icon: Truck },
  { href: '/fiyat-hesaplama', label: 'Hesaplama', Icon: Calculator },
]

/** Mobilde altta sabit: üstte Ara + WhatsApp butonları, altta kısayol menüsü. Masaüstünde sağ altta balonlar. */
export default function MobileBar() {
  const pathname = usePathname()
  const wa = waLink('Merhaba, şehirler arası nakliyat için fiyat almak istiyorum.')
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
        <div className="grid grid-cols-2 gap-2 bg-white/95 px-2 py-2 shadow-[0_-4px_16px_rgba(11,31,69,.12)] backdrop-blur">
          <a href={SITE_CONFIG.phoneHref} className="flex items-center justify-center gap-2 rounded-xl bg-sun-400 py-3 text-sm font-extrabold uppercase tracking-wide text-navy-950 shadow-lg ring-1 ring-black/5">
            <Phone className="h-5 w-5" /> Hemen Ara
          </a>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#1a9e4b] py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg ring-1 ring-black/5">
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp
          </a>
        </div>
        <nav aria-label="Hızlı menü" className="grid grid-cols-4 bg-navy-950 pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_14px_rgba(0,0,0,.25)]">
          {items.map(({ href, label, Icon }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link key={href} href={href} aria-current={active ? 'page' : undefined} className={`flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium ${active ? 'bg-sun-400 text-navy-950' : 'text-navy-200'}`}>
                <Icon className="h-5 w-5" aria-hidden /> {label}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex">
        <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile yazın" className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a9e4b] text-white shadow-xl ring-4 ring-white transition hover:scale-105">
          <WhatsAppIcon className="h-7 w-7" />
        </a>
        <a href={SITE_CONFIG.phoneHref} aria-label="Hemen arayın" className="flex h-14 w-14 items-center justify-center rounded-full bg-sun-400 text-navy-950 shadow-xl ring-4 ring-white transition hover:scale-105">
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </>
  )
}
