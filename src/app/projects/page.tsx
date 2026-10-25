import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="glow pointer-events-none absolute inset-0" />
        <div className="container-x relative py-24">
          <p className="text-sm font-semibold text-brand-soft">Selected Work</p>
          <h1 className="mt-3 text-5xl font-black text-white sm:text-6xl">
            Projects<span className="grad-text">.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-400">
            A selection of projects exploring AI, computer vision, career guidance, and web development.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.slug} className="card flex flex-col !p-7">
            <div className="flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-medium text-brand-soft"
                >
                  {category}
                </span>
              ))}
            </div>
            <h2 className="mt-5 text-2xl font-bold text-white">{project.name}</h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.tagline}</p>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Languages</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.languages.map((language) => (
                  <span key={language} className="rounded-full border border-line bg-ink px-3 py-1 text-xs text-slate-300">
                    {language}
                  </span>
                ))}
              </div>
            </div>
            <Link href={`/projects/${project.slug}`} className="btn-ghost mt-7 w-full">
              View project
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
