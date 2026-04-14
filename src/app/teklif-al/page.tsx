import { generatePageMeta } from '@/lib/seo'
import TeklifForm from './TeklifForm'

export const metadata = generatePageMeta({
  title: 'Online Teklif Al | Şehirler Arası Nakliyat Teklif Formu',
  description: 'Şehirler arası nakliyat için online teklif alın. Formu doldurun, size en uygun fiyat teklifini hızla sunalım. Ücretsiz keşif imkanı.',
  path: '/teklif-al',
  keywords: ['nakliyat teklif al', 'online nakliyat teklifi', 'evden eve nakliyat fiyat teklifi', 'ücretsiz nakliyat teklifi'],
})

export default function TeklifAlPage() {
  return (
    <>
      <section className="bg-primary-700 py-10">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-3">Online Teklif Al</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">Formu doldurun, size özel nakliyat fiyat teklifimizi en kısa sürede iletilim.</p>
        </div>
      </section>
      <TeklifForm />
    </>
  )
}
