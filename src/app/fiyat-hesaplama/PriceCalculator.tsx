'use client'
import { useState } from 'react'
import { SITE_CONFIG } from '@/data/site-config'
import { Calculator, Phone, ArrowRight, CheckCircle, Fuel, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

// Şehirler ve Adana'ya km mesafeleri
const sehirler: { name: string; km: number }[] = [
  { name: 'Adana (Şehir İçi)', km: 20 },
  { name: 'Mersin', km: 70 },
  { name: 'Osmaniye', km: 100 },
  { name: 'Hatay', km: 190 },
  { name: 'Gaziantep', km: 220 },
  { name: 'Kahramanmaraş', km: 190 },
  { name: 'Kayseri', km: 330 },
  { name: 'Niğde', km: 250 },
  { name: 'Konya', km: 350 },
  { name: 'Ankara', km: 490 },
  { name: 'Antalya', km: 540 },
  { name: 'Eskişehir', km: 640 },
  { name: 'İzmir', km: 880 },
  { name: 'Bursa', km: 780 },
  { name: 'İstanbul', km: 940 },
  { name: 'Bodrum', km: 970 },
  { name: 'Marmaris', km: 900 },
  { name: 'Kuşadası', km: 870 },
  { name: 'Edremit', km: 960 },
  { name: 'Denizli', km: 680 },
  { name: 'Muğla', km: 830 },
  { name: 'Trabzon', km: 810 },
  { name: 'Samsun', km: 700 },
  { name: 'Diyarbakır', km: 470 },
  { name: 'Malatya', km: 420 },
  { name: 'Erzurum', km: 760 },
  { name: 'Van', km: 960 },
  { name: 'Sivas', km: 480 },
  { name: 'Tekirdağ', km: 1010 },
  { name: 'Edirne', km: 1120 },
  { name: 'Diğer', km: 600 },
]

const evTipleri = [
  { label: '1+1 Daire', value: '1+1', hacimM3: 12 },
  { label: '2+1 Daire', value: '2+1', hacimM3: 20 },
  { label: '3+1 Daire', value: '3+1', hacimM3: 30 },
  { label: '4+1 Daire', value: '4+1', hacimM3: 40 },
  { label: 'Villa / Müstakil', value: 'villa', hacimM3: 55 },
  { label: 'Ofis / İşyeri', value: 'ofis', hacimM3: 25 },
  { label: 'Kamyonet (Az Eşya)', value: 'kamyonet', hacimM3: 6 },
]

// Sabit maliyetler
const MAZOT_LITRE_TL = 80
const YAKIT_TUKETIM_KM = 3.5 // km başına litre (büyük kamyon)
const ISCILIK_ADAM_BASI = 2500
const ISCI_SAYISI = 4
const ASANSOR_BIR_TARAF = 3000
const VERGI_YOL_ORANI = 0.12 // %12 vergi + yol masrafları
const KAR_ORANI = 0.25 // %25

export default function PriceCalculator() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [evTipi, setEvTipi] = useState('')
  const [cikisKat, setCikisKat] = useState(0)
  const [varisKat, setVarisKat] = useState(0)
  const [asansorCikis, setAsansorCikis] = useState(false)
  const [asansorVaris, setAsansorVaris] = useState(false)
  const [paketleme, setPaketleme] = useState(true)
  const [result, setResult] = useState<any>(null)

  const hesapla = () => {
    const toCity = sehirler.find(s => s.name === to)
    const tip = evTipleri.find(t => t.value === evTipi)
    if (!toCity || !tip) return

    // 1. Yakıt maliyeti (gidiş + dönüş)
    const toplamKm = toCity.km * 2
    const yakitLitre = toplamKm / YAKIT_TUKETIM_KM
    const yakitMaliyet = yakitLitre * MAZOT_LITRE_TL

    // Büyük ev = büyük araç, küçük ev = kamyonet (yakıt düşer)
    const aracCarpan = tip.hacimM3 <= 10 ? 0.5 : tip.hacimM3 <= 20 ? 0.75 : 1.0
    const yakitFinal = yakitMaliyet * aracCarpan

    // 2. İşçilik
    const adamSayisi = tip.hacimM3 <= 10 ? 2 : ISCI_SAYISI
    const iscilik = adamSayisi * ISCILIK_ADAM_BASI

    // 3. Asansör
    let asansorMaliyet = 0
    if (asansorCikis) asansorMaliyet += ASANSOR_BIR_TARAF
    if (asansorVaris) asansorMaliyet += ASANSOR_BIR_TARAF

    // 4. Kat taşıma ek ücreti (asansör yoksa yüksek kat)
    let katEk = 0
    if (!asansorCikis && cikisKat > 2) katEk += (cikisKat - 2) * 300
    if (!asansorVaris && varisKat > 2) katEk += (varisKat - 2) * 300

    // 5. Paketleme maliyeti
    const paketlemeMaliyet = paketleme ? tip.hacimM3 * 80 : 0

    // 6. Ara toplam
    const araToplam = yakitFinal + iscilik + asansorMaliyet + katEk + paketlemeMaliyet

    // 7. Vergi + yol masrafları
    const vergiYol = araToplam * VERGI_YOL_ORANI

    // 8. Maliyet toplamı
    const toplamMaliyet = araToplam + vergiYol

    // 9. %25 kar
    const kar = toplamMaliyet * KAR_ORANI

    // 10. Nihai fiyat
    const nihaiFiyat = toplamMaliyet + kar

    // Yuvarla
    const minFiyat = Math.round(nihaiFiyat / 500) * 500
    const maxFiyat = Math.round(minFiyat * 1.15 / 500) * 500

    setResult({
      mesafe: toCity.km,
      toplamKm,
      yakitFinal: Math.round(yakitFinal),
      iscilik,
      adamSayisi,
      asansorMaliyet,
      katEk,
      paketlemeMaliyet: Math.round(paketlemeMaliyet),
      vergiYol: Math.round(vergiYol),
      kar: Math.round(kar),
      minFiyat,
      maxFiyat,
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-dark-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nereden */}
            <div>
              <label className="block text-sm font-semibold text-dark-700 mb-2">Nereden *</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 text-dark-700 focus:border-primary-500 focus:outline-none transition">
                <option value="">Çıkış şehri...</option>
                <option value="Adana">Adana</option>
              </select>
              <p className="text-xs text-dark-400 mt-1">Şu an sadece Adana çıkışlı hesaplama</p>
            </div>

            {/* Nereye */}
            <div>
              <label className="block text-sm font-semibold text-dark-700 mb-2">Nereye *</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 text-dark-700 focus:border-primary-500 focus:outline-none transition">
                <option value="">Varış şehri...</option>
                {sehirler.map(s => <option key={s.name} value={s.name}>{s.name} ({s.km} km)</option>)}
              </select>
            </div>

            {/* Ev Tipi */}
            <div>
              <label className="block text-sm font-semibold text-dark-700 mb-2">Ev / Eşya Tipi *</label>
              <select value={evTipi} onChange={e => setEvTipi(e.target.value)}
                className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 text-dark-700 focus:border-primary-500 focus:outline-none transition">
                <option value="">Tip seçin...</option>
                {evTipleri.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>

            {/* Kat bilgileri */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-2">Çıkış Kat</label>
                <input type="number" min={0} max={30} value={cikisKat} onChange={e => setCikisKat(Number(e.target.value))}
                  className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 text-dark-700 focus:border-primary-500 focus:outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-2">Varış Kat</label>
                <input type="number" min={0} max={30} value={varisKat} onChange={e => setVarisKat(Number(e.target.value))}
                  className="w-full border-2 border-dark-200 rounded-xl px-4 py-3 text-dark-700 focus:border-primary-500 focus:outline-none transition" />
              </div>
            </div>
          </div>

          {/* Ek Hizmetler */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex items-center gap-3 bg-dark-50 px-4 py-3 rounded-xl cursor-pointer hover:bg-primary-50 transition">
              <input type="checkbox" checked={asansorCikis} onChange={e => setAsansorCikis(e.target.checked)} className="w-5 h-5 text-primary-600 rounded" />
              <div>
                <span className="text-sm font-medium text-dark-700">Çıkış Asansör</span>
                <span className="text-xs text-dark-400 block">+₺{ASANSOR_BIR_TARAF.toLocaleString('tr-TR')}</span>
              </div>
            </label>
            <label className="flex items-center gap-3 bg-dark-50 px-4 py-3 rounded-xl cursor-pointer hover:bg-primary-50 transition">
              <input type="checkbox" checked={asansorVaris} onChange={e => setAsansorVaris(e.target.checked)} className="w-5 h-5 text-primary-600 rounded" />
              <div>
                <span className="text-sm font-medium text-dark-700">Varış Asansör</span>
                <span className="text-xs text-dark-400 block">+₺{ASANSOR_BIR_TARAF.toLocaleString('tr-TR')}</span>
              </div>
            </label>
            <label className="flex items-center gap-3 bg-dark-50 px-4 py-3 rounded-xl cursor-pointer hover:bg-primary-50 transition">
              <input type="checkbox" checked={paketleme} onChange={e => setPaketleme(e.target.checked)} className="w-5 h-5 text-primary-600 rounded" />
              <div>
                <span className="text-sm font-medium text-dark-700">Profesyonel Paketleme</span>
                <span className="text-xs text-dark-400 block">Eşya hacmine göre hesaplanır</span>
              </div>
            </label>
          </div>

          <button onClick={hesapla} disabled={!to || !evTipi}
            className="w-full mt-6 bg-primary-600 hover:bg-primary-700 disabled:bg-dark-300 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition">
            <Calculator size={22} /> Fiyat Hesapla
          </button>

          {/* Sonuç */}
          {result && (
            <div className="mt-6 animate-fade-in">
              {/* Fiyat */}
              <div className="bg-accent-50 border-2 border-accent-300 rounded-2xl p-6 text-center mb-4">
                <p className="text-dark-600 text-sm mb-1">Tahmini Nakliyat Ücreti ({to})</p>
                <p className="font-heading text-4xl md:text-5xl font-extrabold text-primary-700">
                  ₺{result.minFiyat.toLocaleString('tr-TR')}
                  <span className="text-lg font-normal text-dark-400 ml-1">- ₺{result.maxFiyat.toLocaleString('tr-TR')}</span>
                </p>
                <p className="text-dark-400 text-xs mt-2">* Tahmini fiyattır. Kesin fiyat için ücretsiz keşif yaptırın.</p>
              </div>

              {/* Maliyet detayı */}
              <div className="bg-dark-50 rounded-xl p-5 mb-4">
                <h4 className="font-heading font-bold text-dark-700 mb-3 text-sm">Maliyet Detayı</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-dark-500">Mesafe (tek yön)</span><span className="font-medium">{result.mesafe} km</span></div>
                  <div className="flex justify-between"><span className="text-dark-500">Yakıt (gidiş-dönüş {result.toplamKm} km)</span><span className="font-medium">₺{result.yakitFinal.toLocaleString('tr-TR')}</span></div>
                  <div className="flex justify-between"><span className="text-dark-500">İşçilik ({result.adamSayisi} kişi × ₺{ISCILIK_ADAM_BASI.toLocaleString('tr-TR')})</span><span className="font-medium">₺{result.iscilik.toLocaleString('tr-TR')}</span></div>
                  {result.asansorMaliyet > 0 && <div className="flex justify-between"><span className="text-dark-500">Asansör</span><span className="font-medium">₺{result.asansorMaliyet.toLocaleString('tr-TR')}</span></div>}
                  {result.katEk > 0 && <div className="flex justify-between"><span className="text-dark-500">Kat taşıma ek ücreti</span><span className="font-medium">₺{result.katEk.toLocaleString('tr-TR')}</span></div>}
                  {result.paketlemeMaliyet > 0 && <div className="flex justify-between"><span className="text-dark-500">Paketleme</span><span className="font-medium">₺{result.paketlemeMaliyet.toLocaleString('tr-TR')}</span></div>}
                  <div className="flex justify-between"><span className="text-dark-500">Vergi ve yol masrafları (%12)</span><span className="font-medium">₺{result.vergiYol.toLocaleString('tr-TR')}</span></div>
                  <div className="border-t border-dark-200 pt-2 mt-2 flex justify-between font-bold text-dark-700">
                    <span>Toplam (kâr dahil %25)</span>
                    <span className="text-primary-600">₺{result.minFiyat.toLocaleString('tr-TR')}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition">
                  <Phone size={18} /> Hemen Ara
                </a>
                <Link href="/teklif-al" className="bg-accent-400 hover:bg-accent-500 text-primary-800 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition">
                  Online Teklif Al <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Alt bilgi */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Mazot Fiyatı', desc: `Güncel: ${MAZOT_LITRE_TL} ₺/lt bazında hesaplanır` },
            { title: 'İşçilik', desc: `${ISCI_SAYISI} kişilik ekip, adam başı ₺${ISCILIK_ADAM_BASI.toLocaleString('tr-TR')}` },
            { title: 'Asansör', desc: `Tek taraf ₺${ASANSOR_BIR_TARAF.toLocaleString('tr-TR')}, gerekirse eklenir` },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-dark-100 text-center">
              <CheckCircle className="text-accent-500 mx-auto mb-2" size={28} />
              <h3 className="font-heading font-bold text-dark-800 mb-1">{item.title}</h3>
              <p className="text-dark-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
