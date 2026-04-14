import Link from 'next/link'
import { SITE_CONFIG } from '@/data/site-config'
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const popularRoutes = [
  { name: 'İstanbul Nakliyat', href: '/iller/istanbul-sehirler-arasi-nakliyat' },
  { name: 'Ankara Nakliyat', href: '/iller/ankara-sehirler-arasi-nakliyat' },
  { name: 'İzmir Nakliyat', href: '/iller/izmir-sehirler-arasi-nakliyat' },
  { name: 'Antalya Nakliyat', href: '/iller/antalya-sehirler-arasi-nakliyat' },
  { name: 'Mersin Nakliyat', href: '/iller/mersin-sehirler-arasi-nakliyat' },
  { name: 'Gaziantep Nakliyat', href: '/iller/gaziantep-sehirler-arasi-nakliyat' },
  { name: 'Konya Nakliyat', href: '/iller/konya-sehirler-arasi-nakliyat' },
  { name: 'Bursa Nakliyat', href: '/iller/bursa-sehirler-arasi-nakliyat' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size={36} />
              <span className="font-heading font-bold text-xl">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-dark-300 text-sm leading-relaxed mb-4">
              Adana merkezli şehirler arası nakliyat firması. Türkiye geneli sigortalı, ambalajlı ve profesyonel evden eve nakliyat hizmeti.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="flex items-center gap-2 text-accent-400 hover:text-accent-300 transition">
                <Phone size={16} /> {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-dark-300 hover:text-white transition">
                <Mail size={16} /> {SITE_CONFIG.email}
              </a>
              <p className="flex items-center gap-2 text-dark-300">
                <MapPin size={16} /> {SITE_CONFIG.address}
              </p>
              <p className="flex items-center gap-2 text-dark-300">
                <Clock size={16} /> {SITE_CONFIG.workingHours}
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hizmetler/evden-eve-nakliyat" className="text-dark-300 hover:text-accent-400 transition">Evden Eve Nakliyat</Link></li>
              <li><Link href="/hizmetler/asansorlu-tasima" className="text-dark-300 hover:text-accent-400 transition">Asansörlü Taşıma</Link></li>
              <li><Link href="/hizmetler/sehir-ici-nakliye" className="text-dark-300 hover:text-accent-400 transition">Şehir İçi Nakliye</Link></li>
              <li><Link href="/hizmetler/kamyonet-nakliye" className="text-dark-300 hover:text-accent-400 transition">Kamyonet Nakliye</Link></li>
              <li><Link href="/hizmetler/ofis-tasima" className="text-dark-300 hover:text-accent-400 transition">Ofis Taşıma</Link></li>
              <li><Link href="/hizmetler/esya-depolama" className="text-dark-300 hover:text-accent-400 transition">Eşya Depolama</Link></li>
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Popüler Güzergahlar</h3>
            <ul className="space-y-2 text-sm">
              {popularRoutes.map(route => (
                <li key={route.href}>
                  <Link href={route.href} className="text-dark-300 hover:text-accent-400 transition">
                    Adana → {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hakkimizda" className="text-dark-300 hover:text-accent-400 transition">Hakkımızda</Link></li>
              <li><Link href="/blog" className="text-dark-300 hover:text-accent-400 transition">Blog</Link></li>
              <li><Link href="/galeri" className="text-dark-300 hover:text-accent-400 transition">Galeri</Link></li>
              <li><Link href="/sss" className="text-dark-300 hover:text-accent-400 transition">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/fiyat-hesaplama" className="text-dark-300 hover:text-accent-400 transition">Fiyat Hesapla</Link></li>
              <li><Link href="/teklif-al" className="text-dark-300 hover:text-accent-400 transition">Teklif Al</Link></li>
              <li><Link href="/iletisim" className="text-dark-300 hover:text-accent-400 transition">İletişim</Link></li>
            </ul>
            <h3 className="font-heading font-bold text-lg mt-6 mb-3">Turistik Bölgeler</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/turistik/adana-bodrum-nakliyat" className="text-dark-300 hover:text-accent-400 transition">Bodrum Nakliyat</Link></li>
              <li><Link href="/turistik/adana-marmaris-nakliyat" className="text-dark-300 hover:text-accent-400 transition">Marmaris Nakliyat</Link></li>
              <li><Link href="/turistik/adana-kusadasi-nakliyat" className="text-dark-300 hover:text-accent-400 transition">Kuşadası Nakliyat</Link></li>
              <li><Link href="/turistik/adana-fethiye-nakliyat" className="text-dark-300 hover:text-accent-400 transition">Fethiye Nakliyat</Link></li>
              <li><Link href="/turistik/adana-alanya-nakliyat" className="text-dark-300 hover:text-accent-400 transition">Alanya Nakliyat</Link></li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-accent-400">
              <Shield size={18} />
              <span className="text-sm font-semibold">Sigortalı Taşımacılık</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-dark-400">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Tüm hakları saklıdır.</p>
          <p className="mt-2 md:mt-0">Adana Şehirler Arası Evden Eve Nakliyat</p>
        </div>
      </div>
    </footer>
  )
}
