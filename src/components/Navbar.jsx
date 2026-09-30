import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Credentials", "#credentials"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/5 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          {profile.shortName}
        </a>
        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition-colors hover:text-signal-dim">{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={profile.cvFile} download className="btn btn-primary hidden sm:inline-flex">
            <Download size={16} /> Download CV
          </a>
          <button
            className="rounded-lg p-2 text-paper md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-ink-900/5 bg-white/95 px-5 py-3 md:hidden">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="block py-2 text-muted hover:text-signal-dim">
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href={profile.cvFile} download className="btn btn-primary">
              <Download size={16} /> Download CV
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
