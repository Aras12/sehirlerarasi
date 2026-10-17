'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import type { NavItem } from './nav'

export default function MobileMenu({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const [sub, setSub] = useState<string | null>(null)
  const pathname = usePathname()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobil-menu"
        aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy-100 text-navy-900"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {open && (
        <nav id="mobil-menu" aria-label="Mobil menü" className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto bg-white px-4 pb-40 pt-2">
          <ul className="divide-y divide-slate-100">
            {nav.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setSub(sub === item.href ? null : item.href)}
                      aria-expanded={sub === item.href}
                      className="flex w-full items-center justify-between py-3.5 text-left text-base font-semibold text-navy-900"
                    >
                      {item.label}
                      <ChevronDown className={`h-5 w-5 transition ${sub === item.href ? 'rotate-180' : ''}`} />
                    </button>
                    {sub === item.href && (
                      <ul className="mb-3 grid gap-1 rounded-xl bg-navy-50 p-2">
                        <li>
                          <Link href={item.href} className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy-700">
                            Tümü
                          </Link>
                        </li>
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className="block rounded-lg px-3 py-2 text-sm text-slate-700">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="block py-3.5 text-base font-semibold text-navy-900">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
