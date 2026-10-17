import { ChevronDown } from 'lucide-react'
import JsonLd from './JsonLd'
import type { Faq as FaqItem } from '@/lib/content'

export default function Faq({ items, title = 'Sıkça sorulan sorular', schema = true }: { items: FaqItem[]; title?: string; schema?: boolean }) {
  if (!items?.length) return null
  return (
    <section className="mt-12" aria-labelledby="sss-baslik">
      <h2 id="sss-baslik" className="mb-4 text-2xl font-bold text-navy-900">{title}</h2>
      <div className="space-y-3">
        {items.map((f) => (
          <details key={f.q} className="group card overflow-hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronDown className="h-5 w-5 shrink-0 text-navy-400 transition group-open:rotate-180" aria-hidden />
            </summary>
            <p className="px-5 pb-5 text-[15px] leading-7 text-slate-700">{f.a}</p>
          </details>
        ))}
      </div>
      {schema && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          }}
        />
      )}
    </section>
  )
}
