'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeftRight, Calculator } from 'lucide-react'
import mesafeler from '@/content/mesafeler.json'
import { homeTypes, estimate, formatTl, liftFee, floorFee, driveHours, deliveryPlan } from '@/data/pricing'
import { waLink } from '@/data/site-config'
import WhatsAppIcon from './WhatsAppIcon'

type Opt = { code: string; name: string }
const M = mesafeler as Record<string, Record<string, number>>
const dist = (a: string, b: string) => (a === b ? 0 : M[a]?.[b] ?? M[b]?.[a] ?? 0)
const floors = ['Giriş', '1', '2', '3', '4', '5', '6', '7', '8+']
const fv = (f: string) => (f === 'Giriş' ? 0 : f === '8+' ? 9 : Number(f))

function busy(value: string) {
  if (!value) return null
  const d = new Date(`${value}T12:00:00`)
  const r: string[] = []
  const last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()
  if (d.getDate() <= 3 || d.getDate() >= last - 2) r.push('ay başı / ay sonu')
  if (d.getDay() === 0 || d.getDay() === 6) r.push('hafta sonu')
  if (d.getMonth() >= 5 && d.getMonth() <= 8) r.push('yaz sezonu')
  return r.length ? `Seçtiğiniz gün yoğun döneme denk geliyor (${r.join(', ')}). En az bir hafta önceden yer ayırtmanızı öneririz.` : 'Seçtiğiniz gün sakin bir döneme denk geliyor.'
}

export default function PriceCalculator({ iller, from: f0 = '01', to: t0 = '06', compact = false }: { iller: Opt[]; from?: string; to?: string; compact?: boolean }) {
  const [from, setFrom] = useState(f0)
  const [to, setTo] = useState(t0)
  const [type, setType] = useState('2+1')
  const [ff, setFf] = useState('2')
  const [tf, setTf] = useState('2')
  const [liftA, setLiftA] = useState(false)
  const [liftB, setLiftB] = useState(false)
  const [date, setDate] = useState('')

  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const a = q.get('nereden'), b = q.get('nereye'), ev = q.get('ev')
    if (a && M[a]) setFrom(a)
    if (b && M[b]) setTo(b)
    if (ev && homeTypes.some((h) => h.id === ev)) setType(ev)
    const onVol = (e: Event) => setType((e as CustomEvent<string>).detail)
    window.addEventListener('hacim-ev-tipi', onVol)
    return () => window.removeEventListener('hacim-ev-tipi', onVol)
  }, [])

  const name = (c: string) => iller.find((i) => i.code === c)?.name ?? ''
  const r = useMemo(() => {
    const km = dist(from, to)
    let [lo, hi] = estimate(km, type)
    const extra = (f: string, lift: boolean) => (lift ? liftFee : Math.max(0, fv(f) - 2) * floorFee)
    const ex = extra(ff, liftA) + extra(tf, liftB)
    lo += ex
    hi += ex
    return { km, lo, hi }
  }, [from, to, type, ff, tf, liftA, liftB])

  const t = homeTypes.find((h) => h.id === type)!
  const msg = `Merhaba, siteden fiyat hesapladım: ${name(from)} → ${name(to)}, ${t.label}, çıkış ${ff}. kat${liftA ? ' (asansörlü)' : ''}, varış ${tf}. kat${liftB ? ' (asansörlü)' : ''}${date ? `, tarih ${date}` : ''}. Tahmini ${formatTl(r.lo)} - ${formatTl(r.hi)}. Kesin fiyat almak istiyorum.`

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-2 bg-navy-800 px-5 py-3.5 text-white">
        <Calculator className="h-5 w-5 text-sun-400" aria-hidden />
        <p className="font-bold">Şehirler arası nakliyat fiyat hesaplama</p>
      </div>
      <div className={`grid gap-4 p-5 ${compact ? '' : 'md:grid-cols-2'}`}>
        <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-2 md:col-span-2">
          <label className="block">
            <span className="label">Nereden</span>
            <select className="field" value={from} onChange={(e) => setFrom(e.target.value)}>
              {iller.map((i) => <option key={i.code} value={i.code}>{i.name}</option>)}
            </select>
          </label>
          <button type="button" aria-label="Yönleri değiştir" onClick={() => { setFrom(to); setTo(from) }} className="mb-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-navy-600 hover:border-navy-400">
            <ArrowLeftRight className="h-4 w-4" />
          </button>
          <label className="block">
            <span className="label">Nereye</span>
            <select className="field" value={to} onChange={(e) => setTo(e.target.value)}>
              {iller.map((i) => <option key={i.code} value={i.code}>{i.name}</option>)}
            </select>
          </label>
        </div>
        <label className="block md:col-span-2">
          <span className="label">Ev tipi / eşya miktarı</span>
          <select className="field" value={type} onChange={(e) => setType(e.target.value)}>
            {homeTypes.map((h) => <option key={h.id} value={h.id}>{h.label} · {h.note}</option>)}
          </select>
        </label>
        {!compact && (
          <>
            <fieldset className="rounded-xl border border-slate-200 p-3">
              <legend className="px-1 text-xs font-semibold uppercase text-slate-600">Çıkış adresi</legend>
              <select className="field" value={ff} onChange={(e) => setFf(e.target.value)} aria-label="Çıkış katı">
                {floors.map((f) => <option key={f} value={f}>{f === 'Giriş' ? 'Giriş / bahçe katı' : `${f}. kat`}</option>)}
              </select>
              <label className="mt-2 flex items-center gap-2 text-sm"><input type="checkbox" checked={liftA} onChange={(e) => setLiftA(e.target.checked)} className="h-4 w-4 accent-navy-600" /> Asansörlü taşıma istiyorum</label>
            </fieldset>
            <fieldset className="rounded-xl border border-slate-200 p-3">
              <legend className="px-1 text-xs font-semibold uppercase text-slate-600">Varış adresi</legend>
              <select className="field" value={tf} onChange={(e) => setTf(e.target.value)} aria-label="Varış katı">
                {floors.map((f) => <option key={f} value={f}>{f === 'Giriş' ? 'Giriş / bahçe katı' : `${f}. kat`}</option>)}
              </select>
              <label className="mt-2 flex items-center gap-2 text-sm"><input type="checkbox" checked={liftB} onChange={(e) => setLiftB(e.target.checked)} className="h-4 w-4 accent-navy-600" /> Asansörlü taşıma istiyorum</label>
            </fieldset>
            <label className="block md:col-span-2">
              <span className="label">Taşınma tarihi (isteğe bağlı)</span>
              <input type="date" className="field" value={date} onChange={(e) => setDate(e.target.value)} />
              {busy(date) && <span className="mt-1.5 block text-xs text-slate-600">{busy(date)}</span>}
            </label>
          </>
        )}
      </div>
      <div className="border-t border-slate-100 bg-sun-50 p-5" aria-live="polite">
        <p className="text-sm text-slate-600">{name(from)} → {name(to)} · {r.km > 0 ? `${r.km} km · ${driveHours(r.km)} · ${deliveryPlan(r.km)}` : 'Aynı il içinde taşıma'}</p>
        <p className="mt-1 text-2xl font-extrabold text-navy-900 tabular-nums">{formatTl(r.lo)} – {formatTl(r.hi)}</p>
        <p className="mt-1 text-xs text-slate-500">Tahmini fiyattır. Ambalaj, söküm-takma ve sigorta dahildir; kesin fiyat ücretsiz keşifle yazılı verilir.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="btn-wa"><WhatsAppIcon /> Bu fiyatı WhatsApp&apos;tan sor</a>
          <Link href={`/teklif-al?nereden=${from}&nereye=${to}&ev=${encodeURIComponent(type)}`} className="btn-navy">Yazılı teklif iste</Link>
        </div>
      </div>
    </div>
  )
}
