import { showLevels, skillCategories } from "../data/profile";
import Section from "./Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      intro="Where healthcare and laboratory work meets data, analytics and machine learning."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="panel p-5">
            <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-3 py-1 text-sm"
                >
                  {s.name}
                  {showLevels && <span className="font-mono text-xs text-amber">{s.level}%</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
