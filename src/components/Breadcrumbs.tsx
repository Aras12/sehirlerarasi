import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import JsonLd from './JsonLd'
import { pageUrl } from '@/data/site-config'

export type Crumb = { href: string; name: string }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ href: '/', name: 'Anasayfa' }, ...items]
  return (
    <nav aria-label="Sayfa yolu" className="text-xs text-navy-100">
      <ol className="flex flex-wrap items-center gap-1">
        {all.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3 w-3 opacity-60" aria-hidden />}
            {i < all.length - 1 ? (
              <Link href={c.href} className="hover:text-white hover:underline">
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-white">
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: pageUrl(c.href) })),
        }}
      />
    </nav>
  )
}
