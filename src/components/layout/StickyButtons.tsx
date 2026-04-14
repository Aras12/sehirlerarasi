'use client'
import { SITE_CONFIG } from '@/data/site-config'
import { Phone, MessageCircle } from 'lucide-react'

export default function StickyButtons() {
  return (
    <div className="sticky-buttons">
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent('Merhaba, nakliyat hizmeti hakkında bilgi almak istiyorum.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110"
        aria-label="WhatsApp ile iletişime geçin"
      >
        <MessageCircle className="text-white" size={26} />
      </a>
      <a
        href={`tel:${SITE_CONFIG.phoneClean}`}
        className="w-14 h-14 bg-accent-500 hover:bg-accent-600 rounded-full flex items-center justify-center shadow-lg shadow-accent-500/30 transition-all hover:scale-110 animate-pulse-slow"
        aria-label="Hemen arayın"
      >
        <Phone className="text-white" size={24} />
      </a>
    </div>
  )
}
