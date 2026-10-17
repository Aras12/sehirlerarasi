import { homeTypes, estimate, formatTl } from '@/data/pricing'
import { SITE_CONFIG } from '@/data/site-config'

/** İki şehir arası mesafeye göre tahmini fiyat tablosu (pricing.ts modelinden). */
export default function PriceTable({ km, from, to, caption }: { km: number; from: string; to: string; caption?: string }) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-2xl border border-navy-100">
      <table className="w-full text-left text-sm">
        <caption className="bg-navy-800 px-4 py-3 text-left text-sm font-semibold text-white">
          {caption ?? `${from} - ${to} arası tahmini nakliyat fiyatları`} <span className="font-normal text-navy-200">({km > 0 ? `${km} km, ` : ''}{SITE_CONFIG.priceUpdated})</span>
        </caption>
        <thead className="bg-navy-50 text-xs uppercase tracking-wide text-navy-700">
          <tr>
            <th scope="col" className="px-4 py-2.5">Taşıma tipi</th>
            <th scope="col" className="px-4 py-2.5 text-right">En az</th>
            <th scope="col" className="px-4 py-2.5 text-right">En çok</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {homeTypes.map((t) => {
            const [lo, hi] = estimate(km, t.id)
            return (
              <tr key={t.id}>
                <th scope="row" className="px-4 py-2.5 font-medium text-slate-800">
                  {t.label}
                  <span className="block text-xs font-normal text-slate-500">{t.note}</span>
                </th>
                <td className="px-4 py-2.5 text-right tabular-nums">{formatTl(lo)}</td>
                <td className="px-4 py-2.5 text-right font-semibold tabular-nums text-navy-800">{formatTl(hi)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p className="bg-sun-50 px-4 py-2.5 text-xs text-slate-600">
        Fiyatlar tahminidir; ambalaj, söküm-takma ve sigorta dahil hesaplanmıştır. Kat, asansör ve ek hizmetlere göre değişir, kesin fiyat ücretsiz keşiften sonra yazılı verilir.
      </p>
    </div>
  )
}
