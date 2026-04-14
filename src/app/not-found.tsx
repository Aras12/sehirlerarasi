import Link from 'next/link'
import { Home, Phone, ArrowLeft } from 'lucide-react'
import { SITE_CONFIG } from '@/data/site-config'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="font-heading text-8xl font-extrabold text-primary-200 mb-4">404</div>
        <h1 className="font-heading text-2xl font-bold text-dark-800 mb-3">Sayfa Bulunamadı</h1>
        <p className="text-dark-500 mb-8 max-w-md mx-auto">Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya dönerek aradığınızı bulabilirsiniz.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold transition">
            <Home size={18} /> Ana Sayfa
          </Link>
          <a href={`tel:${SITE_CONFIG.phoneClean}`} className="flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-800 px-6 py-3 rounded-xl font-bold transition">
            <Phone size={18} /> Bizi Arayın
          </a>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <Link href="/hizmetler" className="text-primary-600 hover:text-primary-700">Hizmetlerimiz</Link>
          <span className="text-dark-300">•</span>
          <Link href="/fiyat-hesaplama" className="text-primary-600 hover:text-primary-700">Fiyat Hesapla</Link>
          <span className="text-dark-300">•</span>
          <Link href="/iletisim" className="text-primary-600 hover:text-primary-700">İletişim</Link>
        </div>
      </div>
    </div>
  )
}
