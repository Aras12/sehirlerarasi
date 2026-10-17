import Link from 'next/link'
import Image from 'next/image'
import { blog } from '@/lib/content'
import { meta } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata = meta({
  title: 'Taşınma Rehberi: Şehirler Arası Nakliyat Blogu',
  description: 'Şehirler arası taşınma öncesi kontrol listesi, eşya paketleme, sigorta, fiyatlar, parça eşya gönderimi ve nakliyeci seçimi üzerine güncel rehber yazılar.',
  path: '/blog',
})

export default function BlogIndex() {
  return (
    <>
      <PageHero title="Taşınma Rehberi" lead="Şehir değiştirmeden önce bilmeniz gereken her şey, adım adım." crumbs={[{ href: '/blog', name: 'Blog' }]} imageAlt="Şehirler arası taşınma rehberi" />
      <div className="wrap py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blog.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group card overflow-hidden">
              <div className="relative aspect-[16/10]"><Image src={p.image} alt={p.title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover" /></div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase text-sun-700">{p.category}</p>
                <h2 className="mt-1 font-bold text-navy-900 group-hover:text-navy-600">{p.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <CtaBand />
      </div>
    </>
  )
}
