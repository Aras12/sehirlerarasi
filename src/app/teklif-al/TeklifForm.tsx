'use client'
import { useState, useRef } from 'react'
import { SITE_CONFIG } from '@/data/site-config'
import { Send, Phone, CheckCircle, MapPin, Home } from 'lucide-react'
import Link from 'next/link'

const FORM_EMAIL = 'barajadananak@gmail.com'

export default function TeklifForm() {
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const ad = fd.get('ad') as string
    const tel = fd.get('tel') as string
    const cikis = fd.get('cikis') as string
    const varis = fd.get('varis') as string
    const cikisKat = fd.get('cikisKat') as string
    const varisKat = fd.get('varisKat') as string
    const evTipi = fd.get('evTipi') as string
    const tarih = fd.get('tarih') as string
    const not_ = fd.get('not') as string

    const ekler: string[] = []
    if (fd.get('asansor')) ekler.push('Asansörlü Taşıma')
    if (fd.get('paketleme')) ekler.push('Profesyonel Paketleme')
    if (fd.get('sigorta')) ekler.push('Sigortalı Taşıma')
    if (fd.get('depolama')) ekler.push('Eşya Depolama')

    const subject = encodeURIComponent(`Nakliyat Teklif Talebi - ${ad}`)
    const body = encodeURIComponent(
      `NAKLIYAT TEKLİF TALEBİ\n` +
      `========================\n\n` +
      `Ad Soyad: ${ad}\n` +
      `Telefon: ${tel}\n\n` +
      `Çıkış Adresi: ${cikis}\n` +
      `Çıkış Kat: ${cikisKat}\n` +
      `Varış Adresi: ${varis}\n` +
      `Varış Kat: ${varisKat}\n\n` +
      `Ev Tipi: ${evTipi}\n` +
      `Tahmini Tarih: ${tarih || 'Belirtilmedi'}\n` +
      `Ek Hizmetler: ${ekler.length > 0 ? ekler.join(', ') : 'Yok'}\n\n` +
      `Not: ${not_ || 'Yok'}\n\n` +
      `---\nBu talep sehirlerarasinakliye.org.tr üzerinden gönderilmiştir.`
    )

    window.open(`mailto:${FORM_EMAIL}?subject=${subject}&body=${body}`, '_self')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
          <h2 className="font-heading text-2xl font-bold text-dark-800 mb-3">Talebiniz Yönlendirildi!</h2>
          <p className="text-dark-600 mb-2">E-posta uygulamanız açılacaktır. Gönderdikten sonra en kısa sürede sizinle iletişime geçeceğiz.</p>
          <p className="text-dark-400 text-sm mb-6">E-posta açılmadıysa doğrudan <strong>{FORM_EMAIL}</strong> adresine mail atabilirsiniz.</p>
          <a href={`tel:${SITE_CONFIG.phoneClean}`} className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold transition">
            <Phone size={18} /> Acil: {SITE_CONFIG.phone}
          </a>
          <div className="mt-4">
            <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">← Anasayfaya Dön</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-dark-100">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark-100">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Send className="text-primary-600" size={20} />
            </div>
            <div>
              <h2 className="font-heading font-bold text-dark-800">Nakliyat Teklif Formu</h2>
              <p className="text-dark-400 text-sm">Doldurun, <strong>{FORM_EMAIL}</strong> adresine iletilsin</p>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="font-heading font-semibold text-dark-700 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary-600 text-white rounded-full text-xs flex items-center justify-center">1</span> Kişisel Bilgiler
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-600 mb-1">Ad Soyad *</label>
                  <input name="ad" type="text" required className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 focus:border-primary-500 focus:outline-none transition" placeholder="Ad Soyad" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-600 mb-1">Telefon *</label>
                  <input name="tel" type="tel" required className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 focus:border-primary-500 focus:outline-none transition" placeholder="05XX XXX XX XX" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-dark-700 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary-600 text-white rounded-full text-xs flex items-center justify-center">2</span> Adres Bilgileri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-dark-600 mb-1">Çıkış Adresi *</label><input name="cikis" type="text" required className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 focus:border-primary-500 focus:outline-none transition" placeholder="Örn: Adana / Seyhan" /></div>
                <div><label className="block text-sm font-medium text-dark-600 mb-1">Varış Adresi *</label><input name="varis" type="text" required className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 focus:border-primary-500 focus:outline-none transition" placeholder="Örn: İstanbul / Kadıköy" /></div>
                <div><label className="block text-sm font-medium text-dark-600 mb-1">Çıkış Kat</label><input name="cikisKat" type="number" min={0} max={30} defaultValue={0} className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 focus:border-primary-500 focus:outline-none transition" /></div>
                <div><label className="block text-sm font-medium text-dark-600 mb-1">Varış Kat</label><input name="varisKat" type="number" min={0} max={30} defaultValue={0} className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 focus:border-primary-500 focus:outline-none transition" /></div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-dark-700 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary-600 text-white rounded-full text-xs flex items-center justify-center">3</span> Taşıma Detayları
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-600 mb-1">Ev Tipi *</label>
                  <select name="evTipi" required className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 focus:border-primary-500 focus:outline-none transition">
                    <option value="">Seçin...</option>
                    <option>1+1 Daire</option><option>2+1 Daire</option><option>3+1 Daire</option>
                    <option>4+1 Daire</option><option>Villa / Müstakil</option><option>Ofis / İşyeri</option><option>Kamyonet (Az Eşya)</option>
                  </select>
                </div>
                <div><label className="block text-sm font-medium text-dark-600 mb-1">Tahmini Tarih</label><input name="tarih" type="date" className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 focus:border-primary-500 focus:outline-none transition" /></div>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                {['Asansörlü Taşıma', 'Profesyonel Paketleme', 'Sigortalı Taşıma', 'Eşya Depolama'].map((item, i) => (
                  <label key={item} className="flex items-center gap-2 bg-dark-50 px-4 py-2 rounded-lg cursor-pointer hover:bg-primary-50 transition">
                    <input name={['asansor','paketleme','sigorta','depolama'][i]} type="checkbox" className="w-4 h-4 text-primary-600 rounded" />
                    <span className="text-sm text-dark-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div><label className="block text-sm font-medium text-dark-600 mb-1">Not</label><textarea name="not" rows={3} className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 focus:border-primary-500 focus:outline-none transition resize-none" placeholder="Ek bilgi, özel istekler..." /></div>

            <button type="submit" className="w-full bg-accent-400 hover:bg-accent-500 text-primary-800 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg">
              <Send size={20} /> Teklif Talep Et
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <p className="text-dark-400 text-sm mb-2">Hızlı teklif için doğrudan arayın</p>
          <a href={`tel:${SITE_CONFIG.phoneClean}`} className="inline-flex items-center gap-2 text-primary-600 font-bold text-lg">{SITE_CONFIG.phone}</a>
        </div>
      </div>
    </div>
  )
}
