import { blogPosts, getBlogBySlug } from '@/data/content'
import { hizmetler } from '@/data/hizmetler'
import { SITE_CONFIG } from '@/data/site-config'
import { generatePageMeta, breadcrumbSchema } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ChevronRight, Calendar, Phone } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return blogPosts.map(b => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogBySlug(params.slug)
  if (!post) return {}
  return generatePageMeta({ title: post.metaTitle, description: post.description, path: `/blog/${post.slug}`, image: post.image })
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug)
  if (!post) notFound()
  const otherPosts = blogPosts.filter(p => p.slug !== post.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BlogPosting',
        headline: post.title, description: post.description, datePublished: post.date,
        author: { '@type': 'Organization', name: SITE_CONFIG.name },
        publisher: { '@type': 'Organization', name: SITE_CONFIG.name },
        url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Anasayfa', url: SITE_CONFIG.url },
        { name: 'Blog', url: `${SITE_CONFIG.url}/blog` },
        { name: post.title, url: `${SITE_CONFIG.url}/blog/${post.slug}` },
      ])) }} />

      <div className="bg-dark-50 border-b border-dark-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Anasayfa</Link><ChevronRight size={14} />
            <Link href="/blog" className="hover:text-primary-600">Blog</Link><ChevronRight size={14} />
            <span className="text-primary-600 font-medium line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2">
          <div className="h-64 md:h-80 relative rounded-2xl overflow-hidden mb-6">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
            <div className="absolute top-4 left-4"><span className="bg-accent-400 text-primary-800 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span></div>
          </div>
          <div className="flex items-center gap-2 text-dark-400 text-sm mb-4"><Calendar size={14} />{new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-dark-800 mb-6">{post.title}</h1>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* İç linkler */}
          <div className="mt-8 bg-primary-50 rounded-2xl p-6">
            <h3 className="font-heading text-lg font-bold text-primary-700 mb-4">İlgili Hizmetlerimiz</h3>
            <div className="flex flex-wrap gap-3">
              {hizmetler.map(h => (
                <Link key={h.slug} href={`/hizmetler/${h.slug}`} className="bg-white px-4 py-2 rounded-full text-sm text-dark-600 hover:text-primary-600 hover:shadow transition">{h.name}</Link>
              ))}
              <Link href="/fiyat-hesaplama" className="bg-accent-100 px-4 py-2 rounded-full text-sm text-accent-700 hover:bg-accent-200 font-semibold transition">Fiyat Hesapla</Link>
              <Link href="/teklif-al" className="bg-primary-100 px-4 py-2 rounded-full text-sm text-primary-700 hover:bg-primary-200 font-semibold transition">Teklif Al</Link>
            </div>
          </div>
        </article>

        <aside className="space-y-6">
          <div className="bg-primary-700 text-white rounded-2xl p-6 text-center">
            <h3 className="font-heading font-bold text-lg mb-2">Hemen Bilgi Alın</h3>
            <p className="text-blue-200 text-sm mb-4">Nakliyat ihtiyacınız için bizi arayın</p>
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="block bg-accent-400 text-primary-800 py-3 rounded-xl font-bold">{SITE_CONFIG.phone}</a>
          </div>
          <div className="bg-dark-50 rounded-2xl p-6">
            <h3 className="font-heading font-bold text-primary-700 mb-4">Diğer Yazılar</h3>
            {otherPosts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="block text-sm text-dark-600 hover:text-primary-600 py-2 border-b border-dark-100 last:border-0 transition">
                {p.title}
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </>
  )
}
