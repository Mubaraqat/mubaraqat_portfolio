import { Download, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Let's work together">
      <div className="panel flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-lg leading-relaxed text-paper/80">
          Open to data science and analytics roles, collaborations and research projects. Email is the quickest way to reach me.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <Mail size={16} /> Email me
          </a>
          <a href={profile.cvFile} download className="btn btn-ghost">
            <Download size={16} /> Download CV
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <LinkedinIcon className="h-4 w-4" /> LinkedIn
          </a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
