'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/data/site-config'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const navItems = [
  { label: 'Anasayfa', href: '/' },
  {
    label: 'Hizmetlerimiz', href: '/hizmetler',
    children: [
      { label: 'Evden Eve Nakliyat', href: '/hizmetler/evden-eve-nakliyat' },
      { label: 'Asansörlü Taşıma', href: '/hizmetler/asansorlu-tasima' },
      { label: 'Şehir İçi Nakliye', href: '/hizmetler/sehir-ici-nakliye' },
      { label: 'Kamyonet Nakliye', href: '/hizmetler/kamyonet-nakliye' },
      { label: 'Ofis Taşıma', href: '/hizmetler/ofis-tasima' },
      { label: 'Eşya Depolama', href: '/hizmetler/esya-depolama' },
    ]
  },
  { label: 'Hizmet Bölgeleri', href: '/iller/istanbul-sehirler-arasi-nakliyat' },
  { label: 'Fiyat Hesapla', href: '/fiyat-hesaplama' },
  { label: 'Blog', href: '/blog' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'S.S.S', href: '/sss' },
  { label: 'İletişim', href: '/iletisim' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="hidden md:block">{SITE_CONFIG.workingHours}</span>
          <div className="flex items-center gap-4 mx-auto md:mx-0">
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="flex items-center gap-1 hover:text-accent-400 transition">
              <Phone size={14} />
              {SITE_CONFIG.phone}
            </a>
            <span className="hidden sm:inline">|</span>
            <a href={`mailto:${SITE_CONFIG.email}`} className="hidden sm:block hover:text-accent-400 transition">
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Logo size={44} />
            <div>
              <div className="font-heading font-bold text-primary-600 text-lg md:text-xl leading-tight">
                {SITE_CONFIG.name}
              </div>
              <div className="text-[10px] md:text-xs text-dark-400 leading-tight">Şehirler Arası Nakliyat</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <div key={item.href} className="relative group"
                onMouseEnter={() => item.children && setDropdownOpen(true)}
                onMouseLeave={() => item.children && setDropdownOpen(false)}
              >
                <Link href={item.href} className="px-3 py-2 text-sm font-medium text-dark-600 hover:text-primary-600 transition flex items-center gap-1">
                  {item.label}
                  {item.children && <ChevronDown size={14} />}
                </Link>
                {item.children && dropdownOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border border-dark-100 animate-fade-in">
                    {item.children.map(child => (
                      <Link key={child.href} href={child.href} className="block px-4 py-2 text-sm text-dark-600 hover:bg-primary-50 hover:text-primary-600 transition">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="hidden md:flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition shadow-lg shadow-accent-500/25">
              <Phone size={16} />
              Hemen Ara
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-dark-600" aria-label="Menü">
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-dark-100 shadow-xl animate-fade-in">
            <nav className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map(item => (
                <div key={item.href}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-dark-700 font-medium hover:bg-primary-50 hover:text-primary-600 rounded-lg transition">
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map(child => (
                        <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm text-dark-500 hover:text-primary-600 transition">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="flex items-center justify-center gap-2 bg-accent-500 text-white px-4 py-3 rounded-lg font-semibold mt-4">
                <Phone size={18} />
                {SITE_CONFIG.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
