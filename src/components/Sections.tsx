import type { Section } from '@/lib/content'

export default function Sections({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.h2}>
          <h2>{s.h2}</h2>
          {s.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {s.bullets?.length ? (
            <ul>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </>
  )
}
