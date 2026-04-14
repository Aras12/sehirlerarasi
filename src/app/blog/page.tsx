import { blogPosts } from '@/data/content'
import { generatePageMeta } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'

export const metadata = generatePageMeta({
  title: 'Nakliyat Blog | Taşınma Rehberi ve İpuçları',
  description: 'Şehirler arası nakliyat, taşınma rehberi, nakliyat fiyatları ve taşıma ipuçları hakkında blog yazıları.',
  path: '/blog',
  keywords: ['nakliyat blog', 'taşınma rehberi', 'nakliyat fiyatları', 'ev taşıma ipuçları'],
})

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary-700 py-10">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-3">Nakliyat Blog</h1>
          <p className="text-blue-200">Taşınma rehberleri, fiyat bilgileri ve nakliyat ipuçları</p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition card-hover border border-dark-100">
                <div className="h-52 relative overflow-hidden bg-primary-100">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-400 text-primary-800 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-dark-400 text-sm mb-3">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h2 className="font-heading text-xl font-bold text-dark-800 group-hover:text-primary-600 transition mb-3">{post.title}</h2>
                  <p className="text-dark-500 text-sm leading-relaxed mb-4">{post.description}</p>
                  <span className="text-primary-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Devamını Oku <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
