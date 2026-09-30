import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./Icons";

// Deterministic pseudo-random points so the plot looks the same on every load.
function makePoints() {
  let seed = 11;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  return Array.from({ length: 40 }, (_, i) => {
    const x = 36 + (i / 39) * 292;
    const trend = 196 - (x - 36) * 0.52;
    const y = Math.max(24, Math.min(206, trend + (rnd() - 0.5) * 72));
    return { x, y, r: 2.2 + rnd() * 2 };
  });
}
const points = makePoints();

function FitPlot() {
  return (
    <div className="panel p-3 shadow-lg shadow-ink-900/10">
      <svg viewBox="0 0 360 240" className="w-full" role="img" aria-label="Scatter plot with a fitted regression line">
        <g stroke="rgba(11,16,32,0.25)" strokeWidth="1">
          <line x1="30" y1="214" x2="344" y2="214" />
          <line x1="30" y1="14" x2="30" y2="214" />
        </g>
        <g stroke="rgba(11,16,32,0.07)" strokeWidth="1">
          {[64, 114, 164].map((y) => (
            <line key={y} x1="30" y1={y} x2="344" y2={y} />
          ))}
        </g>
        {points.map((p, i) => (
          <circle key={i} className="plot-dot" cx={p.x} cy={p.y} r={p.r} fill="#14B8A6" style={{ animationDelay: `${0.25 + i * 0.022}s` }} />
        ))}
        <line className="plot-line" x1="36" y1="196" x2="328" y2="44" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
      <p className="mt-1 px-1 font-mono text-xs text-amber">model.fit(X, y)</p>
    </div>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-none">
      <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-ink-800 shadow-xl shadow-ink-900/15">
        <img
          src="/yemi-900.jpg"
          srcSet="/yemi-480.jpg 480w, /yemi-900.jpg 900w"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 384px, 304px"
          width="900"
          height="1125"
          alt="Portrait of Yemi Onifade smiling, wearing a coral head wrap and a pink dress"
          className="aspect-[4/5] w-full object-cover object-top"
          fetchpriority="high"
        />
      </div>
      <div className="absolute -bottom-6 -left-4 w-40 sm:-left-8 sm:w-48">
        <FitPlot />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-14 pt-12 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
      <div className="order-2 lg:order-1">
        <p className="mb-5 flex items-center gap-2 text-sm text-muted">
          <MapPin size={16} className="text-signal-dim" /> {profile.location} · Data Scientist · Medical Laboratory Scientist
        </p>
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {profile.shortName}
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/80">{profile.headline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">
            <ArrowDown size={16} /> See my projects
          </a>
          <a href={profile.cvFile} download className="btn btn-ghost">
            <Download size={16} /> Download CV
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4 text-muted">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-signal-dim">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-signal-dim">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-signal-dim">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="order-1 pb-6 lg:order-2">
        <Portrait />
      </div>
    </section>
  );
}
