import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const stack = [
  { title: "Languages", items: ["Java", "Python", "JavaScript", "PHP", "C/C++"] },
  { title: "Frontend", items: ["HTML5/CSS3", "Responsive Design", "DOM Manipulation", "Bootstrap"] },
  { title: "Backend", items: ["Firebase", "Python Flask", "Supabase", "REST APIs"] },
  { title: "Database", items: ["MySQL/SQL", "Firestore", "MongoDB", "SQLite"] },
  { title: "Tools", items: ["Git & GitHub", "VS Code", "XAMPP", "Postman"] },
  { title: "Soft Skills", items: ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Communication", "Time Management", "Quick Learner"] },
];

export default function About() {
  const currentYear = new Date().getFullYear();
  const academicStages = [
    "First Year (FE)",
    "Second Year (SE)",
    "Third Year (TE)",
    "Final Year (BE)",
  ];
  const academicStage =
    currentYear >= 2028
      ? "Expected Graduation"
      : academicStages[currentYear - 2024] ?? "Academic Journey";

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="glow pointer-events-none absolute inset-0" />
        <div className="container-x relative grid items-center gap-14 py-24 lg:grid-cols-2">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-brand-soft">The Person Behind the Code</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-white sm:text-6xl">
              Crafting Digital Excellence from <span className="grad-text">Pune.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400">
              I'm Shubham Madane, a student at Savitribai Phule Pune University. I don't just write code; I build solutions that bridge the gap between imagination and reality.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/cv.pdf" download className="btn-primary">Download CV</a>
              <Link href="/contact" className="btn-ghost">Work with Me</Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[["20+ Repos", "Open Source"], ["99% Score", "Optimization"], ["UI/UX", "Design Driven"]].map(([a, b]) => (
                <div key={a} className="card !p-5">
                  <p className="font-black text-white">{a}</p>
                  <p className="mt-1 text-xs text-slate-500">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border border-brand/40 bg-gradient-to-br from-brand/20 via-panel to-pink-500/10 shadow-[0_0_80px_rgba(99,102,241,0.2)]">
            <div className="absolute inset-4 rounded-full border border-white/10" />
            <Image
              src="/profile.png"
              alt="Shubham Madane"
              width={640}
              height={640}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-x grid gap-8 py-20 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-black text-white">Academic Journey</h2>
          <div className="card">
            <h3 className="text-xl font-bold text-white">Bachelor of Engineering</h3>
            <p className="mt-1 text-brand-soft">Savitribai Phule Pune University (SPPU)</p>
            <p className="mt-1 text-sm text-slate-500">2024 - 2028 (Expected Graduation)</p>
            <p className="mt-2 text-sm font-semibold text-brand-soft">{academicStage} · {currentYear}</p>
            <p className="mt-4 text-slate-400">Focusing on Computer Science with an emphasis on Advanced Web Architecture and Software Engineering. Actively participating in tech symposiums and hackathons.</p>
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-black text-white">Professional Path</h2>
          <div className="card">
            <h3 className="text-xl font-bold text-white">Full-Stack Developer</h3>
            <p className="mt-1 text-brand-soft">Independent Consultant</p>
            <p className="mt-1 text-sm text-slate-500">Ongoing</p>
            <p className="mt-4 text-slate-400">Helping startups and businesses build modern web applications using the Next.js ecosystem. Delivering high-performance solutions with clean, maintainable codebases.</p>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <p className="text-sm font-semibold text-brand-soft">Expertise</p>
        <h2 className="mt-3 text-4xl font-black text-white">My Tech DNA.</h2>
        <p className="mt-4 max-w-2xl text-slate-400">I specialize in the modern web ecosystem, focusing on performance, scalability, and developer experience.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((s) => (
            <div key={s.title} className="card !p-6">
              <h3 className="font-bold text-white">{s.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-medium text-slate-300">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-panel px-8 py-20 text-center">
          <div className="glow pointer-events-none absolute inset-0" />
          <h2 className="relative text-4xl font-black text-white">Ready to create something <span className="grad-text">Extraordinary?</span></h2>
          <p className="relative mx-auto mt-4 max-w-xl text-slate-400">
            I'm always open to new challenges and collaborations. Whether you have a project in mind or just want to talk tech, my inbox is always open.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Let's Connect</Link>
            <Link href="/" className="btn-ghost">Back to Home</Link>
          </div>
        </div>
      </section>
      <p className="container-x pb-12 pt-6 text-xs font-semibold tracking-widest text-slate-600">© {new Date().getFullYear()} SHUBHAM MADANE • DESIGNED FOR THE FUTURE</p>
    </>
  );
}
