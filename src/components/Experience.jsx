import { experience } from "../data/profile";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Clinical and research work where accurate records were the whole job.">
      <ol className="relative ml-2 border-l border-ink-900/10">
        {experience.map((e) => (
          <li key={e.role} className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-signal ring-4 ring-[#F3F6FB]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-display text-xl font-semibold">{e.role}</h3>
              <span className="font-mono text-xs text-amber">{e.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted">{e.org}</p>
            <ul className="mt-3 max-w-2xl space-y-2 text-sm leading-relaxed text-paper/80">
              {e.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  {pt}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
