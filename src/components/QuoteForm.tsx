'use client'

import { useEffect, useState } from 'react'
import { Send } from 'lucide-react'
import { homeTypes } from '@/data/pricing'
import { waLink } from '@/data/site-config'

type Opt = { code: string; name: string }

/** Teklif formu: sunucu gerektirmez, bilgileri hazır mesaj olarak WhatsApp'a gönderir. */
export default function QuoteForm({ iller, from = '01', to = '', title = 'Ücretsiz fiyat teklifi alın', compact = false }: { iller: Opt[]; from?: string; to?: string; title?: string; compact?: boolean }) {
  const [v, setV] = useState({ ad: '', tel: '', nereden: from, nereye: to, ev: '2+1', tarih: '', not: '' })
  const [err, setErr] = useState('')
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    setV((s) => ({ ...s, nereden: q.get('nereden') || s.nereden, nereye: q.get('nereye') || s.nereye, ev: q.get('ev') || s.ev }))
  }, [])
  const up = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setV({ ...v, [k]: e.target.value })
  const name = (c: string) => iller.find((i) => i.code === c)?.name ?? ''

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!v.ad.trim() || v.tel.replace(/\D/g, '').length < 10) return setErr('Lütfen adınızı ve geçerli bir telefon numarası yazın.')
    if (!v.nereye) return setErr('Lütfen taşınacağınız ili seçin.')
    setErr('')
    const t = homeTypes.find((h) => h.id === v.ev)
    const lines = [
      'Merhaba, web sitenizden fiyat teklifi istiyorum.',
      `Ad soyad: ${v.ad.trim()}`,
      `Telefon: ${v.tel.trim()}`,
      `Güzergah: ${name(v.nereden)} → ${name(v.nereye)}`,
      `Eşya: ${t?.label ?? v.ev}`,
    ]
    if (v.tarih) lines.push(`Tarih: ${v.tarih}`)
    if (v.not.trim()) lines.push(`Not: ${v.not.trim()}`)
    window.location.href = waLink(lines.join('\n'))
  }

  return (
    <form onSubmit={submit} noValidate className="card overflow-hidden">
      <p className="bg-sun-400 px-5 py-3.5 font-bold text-navy-950">{title}</p>
      <div className={`grid gap-3 p-5 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <label className="block"><span className="label">Ad soyad</span><input className="field" value={v.ad} onChange={up('ad')} autoComplete="name" required /></label>
        <label className="block"><span className="label">Telefon</span><input className="field" type="tel" value={v.tel} onChange={up('tel')} autoComplete="tel" placeholder="05xx xxx xx xx" required /></label>
        <label className="block"><span className="label">Nereden</span>
          <select className="field" value={v.nereden} onChange={up('nereden')}>{iller.map((i) => <option key={i.code} value={i.code}>{i.name}</option>)}</select>
        </label>
        <label className="block"><span className="label">Nereye</span>
          <select className="field" value={v.nereye} onChange={up('nereye')}><option value="">Seçin</option>{iller.map((i) => <option key={i.code} value={i.code}>{i.name}</option>)}</select>
        </label>
        <label className="block"><span className="label">Eşya miktarı</span>
          <select className="field" value={v.ev} onChange={up('ev')}>{homeTypes.map((h) => <option key={h.id} value={h.id}>{h.label}</option>)}</select>
        </label>
        <label className="block"><span className="label">Tarih</span><input className="field" type="date" value={v.tarih} onChange={up('tarih')} /></label>
        {!compact && (
          <label className="block sm:col-span-2"><span className="label">Not (kat, asansör, özel eşya)</span><textarea className="field" rows={3} value={v.not} onChange={up('not')} /></label>
        )}
        {err && <p role="alert" className="text-sm font-semibold text-red-700 sm:col-span-2">{err}</p>}
        <button type="submit" className={`btn-navy w-full ${compact ? '' : 'sm:col-span-2'}`}><Send className="h-4 w-4" /> Teklif iste (WhatsApp)</button>
        <p className={`text-xs text-slate-500 ${compact ? '' : 'sm:col-span-2'}`}>Gönder&apos;e basınca WhatsApp mesajınız hazır açılır; göndermeniz yeterli.</p>
      </div>
    </form>
  )
}
