import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);

  return {
    title: project ? `${project.name} | Shubham Madane` : "Project not found | Shubham Madane",
    description: project?.tagline,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="glow pointer-events-none absolute inset-0" />
        <div className="container-x relative py-20">
          <Link href="/projects" className="text-sm font-medium text-brand-soft transition hover:text-white">
            ← All projects
          </Link>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <span key={category} className="rounded-full border border-line bg-panel px-3 py-1 text-xs font-medium text-brand-soft">
                {category}
              </span>
            ))}
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl">{project.name}</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-400">{project.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={project.repository} target="_blank" rel="noreferrer" className="btn-primary">
              Source code on GitHub
            </a>
            <Link href="/projects" className="btn-ghost">Back to projects</Link>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-6 pb-24 lg:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)]">
        <div className="space-y-6">
          <article className="card">
            <h2 className="text-2xl font-bold text-white">Problem statement</h2>
            <p className="mt-4 leading-7 text-slate-400">{project.problem}</p>
          </article>
          <article className="card">
            <h2 className="text-2xl font-bold text-white">Solution</h2>
            <p className="mt-4 leading-7 text-slate-400">{project.solution}</p>
          </article>
          <article className="card">
            <h2 className="text-2xl font-bold text-white">Key features</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-slate-400">
                  <span className="text-brand-soft" aria-hidden="true">✦</span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2 className="text-2xl font-bold text-white">Expected outcome</h2>
            <p className="mt-4 leading-7 text-slate-400">{project.outcome}</p>
          </article>
          {project.verificationNote && (
            <p className="rounded-2xl border border-line bg-panel/60 p-5 text-sm leading-6 text-slate-500">
              {project.verificationNote}
            </p>
          )}
        </div>

        <aside className="card h-fit !p-6">
          <h2 className="text-lg font-bold text-white">Project information</h2>
          <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">Programming languages</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.languages.map((language) => (
              <span key={language} className="rounded-full border border-line bg-ink px-3 py-1 text-xs text-slate-300">
                {language}
              </span>
            ))}
          </div>
          <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">Technologies</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-line bg-ink px-3 py-1 text-xs text-slate-300">
                {technology}
              </span>
            ))}
          </div>
          <a
            href={project.repository}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost mt-7 w-full"
          >
            Open source repository ↗
          </a>
        </aside>
      </section>
    </>
  );
}
