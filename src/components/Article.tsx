import type { Section } from '@/lib/content'

/** Bölümleri yazar; `after` ile belirli bir başlığın arkasına ek içerik (ör. fiyat tablosu) koyulur. */
export default function Article({ sections, after }: { sections: Section[]; after?: { match: RegExp; node: React.ReactNode } }) {
  let placed = false
  return (
    <>
      {sections.map((s) => {
        const hit = !placed && after && after.match.test(s.h2)
        if (hit) placed = true
        return (
          <section key={s.h2}>
            <h2>{s.h2}</h2>
            {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {s.bullets?.length ? <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul> : null}
            {hit && after!.node}
          </section>
        )
      })}
      {after && !placed && after.node}
    </>
  )
}
