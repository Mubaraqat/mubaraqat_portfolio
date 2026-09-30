import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink, Star } from "lucide-react";
import { hiddenRepos, liveProjects, profile, repoOverrides } from "../data/profile";
import ProjectPreview from "./ProjectPreview";
import { useGithubRepos } from "../hooks/useGithubRepos";
import { GithubIcon } from "./Icons";
import Section from "./Section";

const INITIAL = 6;

const prettify = (name) =>
  name.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

function toProject(repo) {
  const o = repoOverrides[repo.name] || {};
  return {
    id: repo.id,
    title: o.title || prettify(repo.name),
    description: o.description || repo.description || "",
    language: repo.language,
    stars: repo.stargazers_count,
    topics: repo.topics || [],
    url: repo.html_url,
    homepage: repo.homepage,
    updated: repo.pushed_at,
    featured: Boolean(o.featured),
  };
}

function Card({ p }) {
  return (
    <article className="panel flex flex-col p-5 transition-colors hover:border-signal/40">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold leading-snug">{p.title}</h3>
        {p.stars > 0 && (
          <span className="flex shrink-0 items-center gap-1 text-xs text-amber">
            <Star size={14} /> {p.stars}
          </span>
        )}
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/75">
        {p.description || "Repository on GitHub. Open it to see the code and notebooks."}
      </p>
      {p.topics.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {p.topics.slice(0, 5).map((t) => (
            <li key={t} className="rounded bg-ink-900/5 px-2 py-0.5 font-mono text-xs text-muted">{t}</li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 text-muted">
          {p.language && (
            <>
              <span className="h-2 w-2 rounded-full bg-signal" /> {p.language}
            </>
          )}
          {p.updated && <span className="text-xs">· {new Date(p.updated).getFullYear()}</span>}
        </span>
        <span className="flex items-center gap-3">
          {p.homepage && (
            <a href={p.homepage} target="_blank" rel="noreferrer" aria-label={`Live demo of ${p.title}`} className="text-muted hover:text-signal-dim">
              <ExternalLink size={18} />
            </a>
          )}
          {p.url && (
            <a href={p.url} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`} className="text-muted hover:text-signal-dim">
              <GithubIcon className="h-5 w-5" />
            </a>
          )}
        </span>
      </div>
    </article>
  );
}

function LiveCard({ p }) {
  return (
    <article className="panel flex flex-col gap-5 p-5">
      <ProjectPreview project={p} />
      <div className="flex flex-1 flex-col">
        <h3 className="font-display text-xl font-semibold leading-snug">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-paper/75">{p.description}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <li key={t} className="rounded bg-ink-900/5 px-2 py-0.5 font-mono text-xs text-muted">{t}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            View Live App <ArrowUpRight size={16} />
          </a>
          <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <GithubIcon className="h-4 w-4" /> View GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { status, repos } = useGithubRepos(profile.github);
  const [lang, setLang] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const projects = useMemo(() => {
    const fromGithub = repos
      .filter((r) => !r.fork && !hiddenRepos.includes(r.name))
      .map(toProject);
    return fromGithub.sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return new Date(b.updated || 0) - new Date(a.updated || 0);
    });
  }, [repos]);

  const languages = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.language).filter(Boolean))],
    [projects]
  );
  const filtered = lang === "All" ? projects : projects.filter((p) => p.language === lang);
  const shown = showAll ? filtered : filtered.slice(0, INITIAL);

  return (
    <Section
      id="projects"
      title="Projects"
      intro="Pulled live from my GitHub, so new repositories show up here automatically."
    >
      <div className="mb-10 grid gap-5 lg:grid-cols-2">
        {liveProjects.map((p) => (
          <LiveCard key={p.id} p={p} />
        ))}
      </div>

      <h3 className="mb-5 font-display text-xl font-semibold">More from GitHub</h3>

      {status === "loading" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
          {[0, 1, 2].map((i) => (
            <div key={i} className="panel h-44 animate-pulse" />
          ))}
        </div>
      )}

      {status === "error" && (
        <p className="mb-6 rounded-xl border border-amber/30 bg-amber/10 p-4 text-sm text-amber">
          GitHub couldn't be reached right now, so the rest of my repositories aren't shown.{" "}
          <a className="underline" href={profile.githubUrl} target="_blank" rel="noreferrer">
            Browse everything on GitHub
          </a>
          .
        </p>
      )}

      {status !== "loading" && (
        <>
          {languages.length > 2 && (
            <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by language">
              {languages.map((l) => (
                <button
                  key={l}
                  role="tab"
                  aria-selected={lang === l}
                  onClick={() => {
                    setLang(l);
                    setShowAll(false);
                  }}
                  className={`rounded-full border px-3.5 py-1 text-sm transition-colors ${
                    lang === l
                      ? "border-signal bg-signal/15 text-signal-dim"
                      : "border-ink-900/10 text-muted hover:border-ink-900/30 hover:text-paper"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <Card key={p.id} p={p} />
            ))}
          </div>

          {filtered.length > INITIAL && (
            <div className="mt-8 text-center">
              <button className="btn btn-ghost" onClick={() => setShowAll((s) => !s)}>
                {showAll ? "Show fewer" : `Show all ${filtered.length} projects`}
              </button>
            </div>
          )}
        </>
      )}
    </Section>
  );
}
