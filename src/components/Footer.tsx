import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE_CONFIG, waLink } from '@/data/site-config'
import { hizmetler, rotalar, turistik, iller } from '@/lib/content'
import WhatsAppIcon from './WhatsAppIcon'

const popularIl = ['34', '06', '35', '33', '07', '42', '27', '38', '16', '31', '44', '21']

export default function Footer() {
  return (
    <footer className="mt-16 bg-navy-950 text-navy-100">
      <div className="bg-sun-400">
        <div className="wrap flex flex-col items-center justify-between gap-4 py-6 text-navy-950 md:flex-row">
          <p className="text-center text-lg font-bold md:text-left">Şehirler arası taşınmanız için ücretsiz keşif ve yazılı fiyat alın.</p>
          <div className="flex flex-wrap justify-center gap-2">
            <a href={SITE_CONFIG.phoneHref} className="btn bg-navy-900 text-white hover:bg-navy-800"><Phone className="h-4 w-4" /> {SITE_CONFIG.phone}</a>
            <a href={waLink('Merhaba, şehirler arası nakliyat için fiyat almak istiyorum.')} target="_blank" rel="noopener noreferrer" className="btn-wa"><WhatsAppIcon /> WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="inline-block rounded-xl bg-white p-2">
            <Image src="/img/genel/barajtrans-logo.webp" alt="BarajTrans logosu" width={900} height={300} className="h-12 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-navy-200">
            BarajTrans, Adana Çukurova merkezli şehirler arası evden eve nakliyat firmasıdır. Türkiye&apos;nin 81 iline sigortalı, ambalajlı ve aktarmasız taşıma yapar.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li><a href={SITE_CONFIG.phoneHref} className="flex items-center gap-2 font-semibold text-white"><Phone className="h-4 w-4 text-sun-400" /> {SITE_CONFIG.phone}</a></li>
            <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><WhatsAppIcon className="h-4 w-4 text-[#3ddc84]" /> WhatsApp ile yazın</a></li>
            <li><a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4 text-sun-400" /> {SITE_CONFIG.email}</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sun-400" /> {SITE_CONFIG.address}</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-sun-400" /> {SITE_CONFIG.workingHours}</li>
          </ul>
          <a href="https://adanafirmarehberi.com.tr/firma/baraj-nakliyat" target="_blank" rel="noopener" title="Turuncu Sayfalar Adana firma rehberi üyesidir" className="mt-5 inline-block">
            <Image src="/img/genel/turuncu-sayfalar-uyesi.webp" alt="Turuncu Sayfalar üyesidir - Adana firma rehberi" width={360} height={240} className="h-24 w-auto rounded-lg" />
          </a>
        </div>
        <FootCol title="Hizmetler" links={hizmetler.slice(0, 10).map((h) => ({ href: `/hizmetler/${h.slug}`, label: h.name }))} more={{ href: '/hizmetler', label: 'Tüm hizmetler' }} />
        <FootCol title="Popüler rotalar" links={rotalar.slice(0, 10).map((r) => ({ href: `/rotalar/${r.slug}`, label: `Adana ${r.to} Nakliyat` }))} more={{ href: '/rotalar', label: 'Tüm rotalar' }} />
        <div className="space-y-8">
          <FootCol title="Tatil bölgeleri" links={turistik.slice(0, 6).map((t) => ({ href: `/turistik/${t.slug}`, label: `Adana ${t.name} Nakliyat` }))} more={{ href: '/turistik', label: 'Tüm tatil bölgeleri' }} />
          <FootCol
            title="Kurumsal"
            links={[
              { href: '/hakkimizda', label: 'Hakkımızda' },
              { href: '/sss', label: 'Sıkça Sorulan Sorular' },
              { href: '/galeri', label: 'Galeri' },
              { href: '/blog', label: 'Blog' },
              { href: '/iletisim', label: 'İletişim' },
            ]}
          />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap py-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy-300">Şehirler arası nakliyat</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-navy-300">
            {popularIl.map((c) => {
              const il = iller.find((i) => i.code === c)!
              return (
                <li key={c}><Link href={`/iller/${il.slug}`} className="hover:text-white">{il.name} Şehirler Arası Nakliyat</Link></li>
              )
            })}
            <li><Link href="/iller" className="font-semibold text-sun-300 hover:text-white">Tüm iller →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pb-36 lg:pb-0">
        <div className="wrap flex flex-col justify-between gap-2 py-5 text-xs text-navy-300 sm:flex-row">
          <span>© {new Date().getFullYear()} BarajTrans · Şehirler Arası Evden Eve Nakliyat</span>
          <span>{SITE_CONFIG.domain}</span>
        </div>
      </div>
    </footer>
  )
}

function FootCol({ title, links, more }: { title: string; links: { href: string; label: string }[]; more?: { href: string; label: string } }) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold uppercase tracking-wider text-white">{title}</p>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}><Link href={l.href} className="text-navy-200 hover:text-sun-300">{l.label}</Link></li>
        ))}
        {more && <li><Link href={more.href} className="font-semibold text-sun-300 hover:text-white">{more.label} →</Link></li>}
      </ul>
    </div>
  )
}
