import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/content'

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <Link href={`/hizmetler/${s.slug}`} className="group card flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:border-sun-300">
      <div className="relative aspect-square overflow-hidden bg-navy-50">
        <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-bold leading-snug text-navy-900">{s.name}</h3>
        <p className="mt-1 flex-1 text-sm text-slate-600">{s.short}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-navy-600">İncele <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
      </div>
    </Link>
  )
}
