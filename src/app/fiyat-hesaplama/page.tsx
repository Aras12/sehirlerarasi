import { generatePageMeta } from '@/lib/seo'
import PriceCalculator from './PriceCalculator'

export const metadata = generatePageMeta({
  title: 'Nakliyat Fiyat Hesaplama | Şehirler Arası Nakliyat Ücreti',
  description: 'Online nakliyat fiyat hesaplama aracı. Şehirler arası ev taşıma, kamyonet nakliye ve asansörlü taşıma fiyatlarını anında hesaplayın.',
  path: '/fiyat-hesaplama',
  keywords: ['nakliyat fiyat hesaplama', 'şehirler arası nakliyat fiyatları', 'ev taşıma ücreti hesaplama', 'nakliye fiyat'],
})

export default function FiyatHesaplamaPage() {
  return (
    <>
      <section className="bg-primary-700 py-10">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-3">Nakliyat Fiyat Hesaplama</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">Online fiyat hesaplama aracımız ile tahmini nakliyat ücretinizi hemen öğrenin. Kesin fiyat için ücretsiz keşif hizmeti alabilirsiniz.</p>
        </div>
      </section>
      <PriceCalculator />
    </>
  )
}
