import { useState } from "react";

// Browser-window frame. Shows /previews/<id>.png if it exists; otherwise a labelled illustration.
function Frame({ url, children, caption }) {
  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-ink-900/15 bg-white shadow-md shadow-ink-900/10">
        <div className="flex items-center gap-1.5 border-b border-ink-900/10 bg-ink-900/[0.04] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-900/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-900/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-900/20" />
          <span className="ml-3 truncate rounded bg-white px-2 py-0.5 font-mono text-[11px] text-muted">{url}</span>
        </div>
        <div className="aspect-[16/10] bg-[#F7F9FC]">{children}</div>
      </div>
      {caption && <p className="mt-1.5 text-xs text-muted">{caption}</p>}
    </div>
  );
}

const bar = "rounded-sm bg-signal-dim/70";

function SanTrackArt() {
  const heights = [40, 62, 48, 78, 56, 70, 88];
  return (
    <div className="flex h-full" aria-hidden="true">
      <div className="w-[22%] space-y-2 border-r border-ink-900/10 bg-white p-3">
        <div className="h-2 w-2/3 rounded bg-ink-900/25" />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-2 rounded bg-ink-900/10" />
        ))}
      </div>
      <div className="flex-1 space-y-3 p-3">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md border border-ink-900/10 bg-white p-2">
              <div className="h-1.5 w-1/2 rounded bg-ink-900/15" />
              <div className="mt-2 h-3 w-2/3 rounded bg-ink-900/30" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex h-24 items-end gap-1.5 rounded-md border border-ink-900/10 bg-white p-2">
            {heights.map((h, i) => (
              <div key={i} className={`flex-1 ${bar}`} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="h-24 rounded-md border border-ink-900/10 bg-white p-2">
            <svg viewBox="0 0 100 50" className="h-full w-full" preserveAspectRatio="none">
              <polyline points="0,40 16,32 32,36 48,20 64,26 80,10 100,14" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = ["Pregnancies", "Glucose", "Blood pressure", "Skin thickness", "Insulin", "BMI", "Pedigree function", "Age"];

function DiabetesArt() {
  return (
    <div className="flex h-full gap-3 p-3" aria-hidden="true">
      <div className="grid flex-1 grid-cols-2 content-start gap-x-3 gap-y-2">
        {features.map((f, i) => (
          <div key={f}>
            <div className="text-[9px] leading-none text-muted">{f}</div>
            <div className="relative mt-1.5 h-1 rounded-full bg-ink-900/10">
              <span className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-signal-dim" style={{ left: `${25 + ((i * 17) % 55)}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-[34%] flex-col items-center justify-center gap-2 rounded-md border border-ink-900/10 bg-white p-2">
        <svg viewBox="0 0 100 56" className="w-full">
          <path d="M10 50 A40 40 0 0 1 90 50" fill="none" stroke="rgba(11,16,32,0.1)" strokeWidth="9" strokeLinecap="round" />
          <path d="M10 50 A40 40 0 0 1 62 13" fill="none" stroke="#14B8A6" strokeWidth="9" strokeLinecap="round" />
        </svg>
        <div className="h-2 w-3/4 rounded bg-ink-900/25" />
        <div className="h-5 w-full rounded-full bg-ink-900" />
      </div>
    </div>
  );
}

export default function ProjectPreview({ project }) {
  const [failed, setFailed] = useState(false);
  const host = new URL(project.liveUrl).host;
  const Art = project.id === "diabetes" ? DiabetesArt : SanTrackArt;

  return (
    <Frame url={host} caption={failed ? "Illustration of the app layout. Open the live app for the real interface." : null}>
      {failed ? (
        <Art />
      ) : (
        <img
          src={`/previews/${project.id}.png`}
          alt={`Screenshot of the ${project.title} app`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
          onError={() => setFailed(true)}
        />
      )}
    </Frame>
  );
}
