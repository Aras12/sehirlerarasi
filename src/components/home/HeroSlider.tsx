'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG } from '@/data/site-config'
import { Phone, ChevronLeft, ChevronRight, Shield, Calculator } from 'lucide-react'

const slides = [
  {
    image: '/images/slider/slide1.png',
    alt: 'Adana şehirler arası evden eve nakliyat - Baraj Taşımacılık',
    title: 'Adana Şehirler Arası',
    subtitle: 'Evden Eve Nakliyat',
    desc: 'Türkiye\'nin 81 iline sigortalı, ambalajlı ve profesyonel taşımacılık hizmeti.',
    cta: { label: 'Hemen Ara', href: `tel:${SITE_CONFIG.phoneClean}` },
    cta2: { label: 'Fiyat Hesapla', href: '/fiyat-hesaplama' },
  },
  {
    image: '/images/slider/slide2.jpg',
    alt: 'Asansörlü taşımacılık hizmeti Adana',
    title: 'Asansörlü Taşımacılık',
    subtitle: 'Güvenli ve Hızlı',
    desc: 'Yüksek katlı binalarda dış cephe asansörü ile eşyalarınızı güvenle taşıyoruz.',
    cta: { label: 'Detaylı Bilgi', href: '/hizmetler/asansorlu-tasima' },
    cta2: { label: 'Teklif Al', href: '/teklif-al' },
  },
  {
    image: '/images/slider/slide3.jpg',
    alt: 'Sigortalı nakliyat hizmeti - tüm eşyalar güvence altında',
    title: 'Sigortalı Nakliyat',
    subtitle: '%100 Güvence',
    desc: 'Tüm eşyalarınız yükleme anından teslimat anına kadar sigorta kapsamındadır.',
    cta: { label: 'Hemen Ara', href: `tel:${SITE_CONFIG.phoneClean}` },
    cta2: { label: 'Online Teklif Al', href: '/teklif-al' },
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(p => (p - 1 + slides.length) % slides.length)
  const next = () => setCurrent(p => (p + 1) % slides.length)
  const slide = slides[current]

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={s.image} alt={s.alt} fill className="object-cover" priority={i === 0} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/70 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-accent-400/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm mb-4 border border-accent-400/30">
            <Shield size={16} className="text-accent-300" />
            <span className="text-accent-200">Sigortalı ve Güvenli Taşımacılık</span>
          </div>

          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2 leading-tight animate-fade-in">
            {slide.title}
          </h1>
          <p className="font-heading text-2xl md:text-4xl font-bold text-accent-300 mb-4 animate-fade-in">
            {slide.subtitle}
          </p>
          <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed max-w-lg animate-fade-in">
            {slide.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <a href={slide.cta.href}
              className="flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-800 px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl shadow-accent-500/25 hover:scale-105">
              <Phone size={20} /> {slide.cta.label}
            </a>
            <Link href={slide.cta2.href}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition backdrop-blur-sm border border-white/20">
              <Calculator size={18} /> {slide.cta2.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition" aria-label="Önceki">
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition" aria-label="Sonraki">
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-accent-400 w-8' : 'bg-white/40 hover:bg-white/60'}`}
            aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50L1440 50L1440 25C1440 25 1320 0 1080 0C840 0 720 25 480 25C240 25 120 0 0 0L0 50Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
