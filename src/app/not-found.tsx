import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="wrap py-24 text-center">
      <p className="text-6xl font-extrabold text-sun-500">404</p>
      <h1 className="mt-4 text-2xl font-bold text-navy-900">Aradığınız sayfa bulunamadı</h1>
      <p className="mt-2 text-slate-600">Sayfa taşınmış olabilir. Anasayfadan ya da menüden devam edebilirsiniz.</p>
      <div className="mt-6 flex justify-center gap-2"><Link href="/" className="btn-sun">Anasayfa</Link><Link href="/iller" className="btn-ghost">İller</Link></div>
    </div>
  )
}
