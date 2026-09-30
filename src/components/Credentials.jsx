import { certifications, education, publication, training } from "../data/profile";
import Section from "./Section";

export default function Credentials() {
  return (
    <Section id="credentials" title="Education & credentials">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="panel p-5">
            <h3 className="font-display text-lg font-semibold">{education.degree}</h3>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-amber">{education.period}</p>
          </div>
          <div className="panel p-5">
            <h3 className="font-display text-lg font-semibold">{training.title}</h3>
            <p className="mt-1 text-sm text-muted">{training.org}</p>
            <p className="mt-1 font-mono text-xs text-amber">{training.period}</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/75">{training.topics}</p>
          </div>
          <div className="panel p-5">
            <h3 className="font-display text-lg font-semibold">Publication</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/80">{publication.citation}</p>
            <p className="mt-1 text-sm italic text-muted">{publication.journal}</p>
          </div>
        </div>

        <div className="panel p-5">
          <h3 className="font-display text-lg font-semibold">Certifications</h3>
          <ul className="mt-3 divide-y divide-ink-900/10">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
                <span>
                  {c.name}
                  <span className="block text-xs text-muted">{c.issuer}</span>
                </span>
                <span className="font-mono text-xs text-amber">{c.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
