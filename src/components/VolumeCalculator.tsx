'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { volumeRooms, vehicles, homeTypeForVolume } from '@/data/volume'
import { waLink } from '@/data/site-config'
import WhatsAppIcon from './WhatsAppIcon'

const fmt = (n: number) => new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 1 }).format(n)

export default function VolumeCalculator() {
  const [counts, setCounts] = useState<Record<string, number>>({})
  const set = (id: string, v: number) => setCounts((c) => ({ ...c, [id]: Math.max(0, Math.min(99, v)) }))
  const { total, pieces, list } = useMemo(() => {
    let total = 0, pieces = 0
    const list: string[] = []
    for (const room of volumeRooms) for (const it of room.items) {
      const n = counts[it.id] ?? 0
      if (!n) continue
      total += n * it.m3
      pieces += n
      list.push(`${n} x ${it.name}`)
    }
    return { total, pieces, list }
  }, [counts])
  const vehicle = vehicles.find((v) => total <= v.max) ?? vehicles[vehicles.length - 1]
  const ev = homeTypeForVolume(total)

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="space-y-4 lg:col-span-3">
        {volumeRooms.map((room) => (
          <fieldset key={room.id} className="card p-5">
            <legend className="px-1 font-bold text-navy-900">{room.name}</legend>
            <ul className="divide-y divide-slate-100">
              {room.items.map((it) => {
                const n = counts[it.id] ?? 0
                return (
                  <li key={it.id} className="flex items-center justify-between gap-3 py-2">
                    <span className="text-sm text-slate-700">{it.name} <span className="text-xs text-slate-400">{fmt(it.m3)} m³</span></span>
                    <span className="flex items-center gap-1.5">
                      <button type="button" aria-label={`${it.name} azalt`} onClick={() => set(it.id, n - 1)} className="h-8 w-8 rounded-lg border border-slate-300 text-lg leading-none">−</button>
                      <span className="w-7 text-center font-semibold tabular-nums">{n}</span>
                      <button type="button" aria-label={`${it.name} artır`} onClick={() => set(it.id, n + 1)} className="h-8 w-8 rounded-lg bg-navy-700 text-lg leading-none text-white">+</button>
                    </span>
                  </li>
                )
              })}
            </ul>
          </fieldset>
        ))}
      </div>
      <aside className="lg:col-span-2">
        <div className="card sticky top-28 overflow-hidden" aria-live="polite">
          <div className="bg-navy-800 px-5 py-4 text-white">
            <p className="text-sm text-navy-200">Toplam yaklaşık hacim</p>
            <p className="text-3xl font-extrabold tabular-nums">{fmt(total)} m³</p>
            <p className="text-sm text-navy-200">{pieces} parça eşya</p>
          </div>
          <div className="space-y-3 p-5 text-sm">
            <p><strong className="text-navy-900">Önerilen araç:</strong> {vehicle.name}</p>
            <p className="text-slate-600">{vehicle.note}</p>
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href={`/fiyat-hesaplama?ev=${encodeURIComponent(ev)}`}
                onClick={() => window.dispatchEvent(new CustomEvent('hacim-ev-tipi', { detail: ev }))}
                className="btn-sun"
              >
                Bu hacimle fiyat hesapla
              </Link>
              <a href={waLink(`Merhaba, siteden eşya hacmi hesapladım: yaklaşık ${fmt(total)} m³ (${pieces} parça). ${list.join(', ')}. Şehirler arası taşıma için fiyat almak istiyorum.`)} target="_blank" rel="noopener noreferrer" className="btn-wa">
                <WhatsAppIcon /> Listeyi WhatsApp&apos;tan gönder
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
