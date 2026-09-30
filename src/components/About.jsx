import { profile } from "../data/profile";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 text-lg leading-relaxed text-paper/80">
          {profile.summary.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="panel divide-y divide-ink-900/10">
          {profile.highlights.map((h) => (
            <li key={h} className="flex gap-3 p-5 text-sm leading-relaxed text-paper/85">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
