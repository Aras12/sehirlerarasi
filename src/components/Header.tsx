import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, MapPin, Phone, Clock } from 'lucide-react'
import { SITE_CONFIG, waLink } from '@/data/site-config'
import { hizmetler } from '@/lib/content'
import { buildNav } from './nav'
import MobileMenu from './MobileMenu'
import WhatsAppIcon from './WhatsAppIcon'

export default function Header() {
  const nav = buildNav(hizmetler.map((h) => ({ slug: h.slug, name: h.name })))
  return (
    <header className="sticky top-0 z-40 bg-white/95 shadow-sm backdrop-blur">
      <div className="hidden bg-navy-900 text-xs text-navy-100 md:block">
        <div className="wrap flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-sun-400" aria-hidden /> Merkez: Çukurova / Adana · 81 ile hizmet</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-sun-400" aria-hidden /> {SITE_CONFIG.workingHours}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={waLink('Merhaba, şehirler arası nakliyat için bilgi almak istiyorum.')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
              <WhatsAppIcon className="h-3.5 w-3.5 text-[#3ddc84]" /> WhatsApp
            </a>
            <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-1.5 font-semibold text-white">
              <Phone className="h-3.5 w-3.5 text-sun-400" aria-hidden /> {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="wrap flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="shrink-0" aria-label="BarajTrans anasayfa">
          <Image src="/img/genel/barajtrans-logo.webp" alt="BarajTrans şehirler arası evden eve nakliyat logosu" width={900} height={300} priority className="h-11 w-auto lg:h-14" />
        </Link>
        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[14px] font-semibold text-navy-900">
            {nav.map((item) => (
              <li key={item.href} className="group relative">
                <Link href={item.href} className="flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 hover:bg-navy-50 hover:text-navy-600">
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4 opacity-60" aria-hidden />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className={`card grid gap-0.5 p-2 ${item.children.length > 8 ? 'w-[560px] grid-cols-2' : 'w-72'}`}>
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block rounded-lg px-3 py-2 text-[13px] font-medium text-slate-700 hover:bg-sun-50 hover:text-navy-800">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={SITE_CONFIG.phoneHref} className="btn-ghost hidden whitespace-nowrap !px-4 xl:inline-flex">
            <Phone className="h-4 w-4" aria-hidden /> {SITE_CONFIG.phone}
          </a>
          <Link href="/teklif-al" className="btn-sun whitespace-nowrap !px-4">Teklif Al</Link>
        </div>
        <MobileMenu nav={nav} />
      </div>
    </header>
  )
}
