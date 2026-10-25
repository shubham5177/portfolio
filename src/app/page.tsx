import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const expertise = [
  { title: "Frontend Development", text: "Creating responsive web experiences with HTML5, CSS3, DOM manipulation, and Bootstrap." },
  { title: "Backend & APIs", text: "Building backend features and integrations with Firebase, Python Flask, Supabase, and REST APIs." },
  { title: "Data Management", text: "Working with MySQL/SQL, Firestore, MongoDB, and SQLite to store and manage application data." },
];
const skills = [
  { title: "Languages", items: ["Java", "Python", "JavaScript", "PHP", "C/C++"] },
  { title: "Frontend", items: ["HTML5/CSS3", "Responsive Design", "DOM Manipulation", "Bootstrap"] },
  { title: "Backend", items: ["Firebase", "Python Flask", "Supabase", "REST APIs"] },
  { title: "Database", items: ["MySQL/SQL", "Firestore", "MongoDB", "SQLite"] },
  { title: "Tools", items: ["Git & GitHub", "VS Code", "XAMPP", "Postman"] },
  { title: "Soft Skills", items: ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Communication", "Time Management", "Quick Learner"] },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="glow pointer-events-none absolute inset-0" />
        <div className="container-x relative grid items-center gap-16 py-24 lg:grid-cols-2">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-soft">Building the Future of Web</p>
            <h1 className="mt-4 text-5xl font-black leading-[1.05] text-white sm:text-7xl">
              Full-Stack <span className="grad-text">Architect.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-400">
              I'm Shubham Madane, a developer passionate about crafting high-performance, visually stunning digital solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Let's Connect</Link>
              <Link href="/about" className="btn-ghost">Who am I?</Link>
            </div>
            <div className="mt-8 flex gap-6 text-sm font-medium text-slate-500">
              <a href="https://github.com/shubham5177" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
              <a href="mailto:madaneshubham853@gmail.com" className="hover:text-white">Email</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
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

      <section className="container-x py-24">
        <p className="text-sm font-semibold text-brand-soft">Expertise</p>
        <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">Technical Mastery.</h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          I combine deep technical knowledge with aesthetic sense to build products that not only work perfectly but also look world-class.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {expertise.map((e) => (
            <div key={e.title} className="card">
              <h3 className="text-xl font-bold text-white">{e.title}</h3>
              <p className="mt-3 text-slate-400">{e.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24">
        <p className="text-sm font-semibold text-brand-soft">Skills & Tools</p>
        <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">My Digital Toolbox.</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.title} className="card !p-6">
              <h3 className="font-bold text-white">{skill.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-medium text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-panel px-8 py-20 text-center">
          <div className="glow pointer-events-none absolute inset-0" />
          <h2 className="relative text-4xl font-black text-white sm:text-5xl">Ready to Build Something Iconic?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-slate-400">
            Let's collaborate to transform your vision into a digital masterpiece. High performance, zero compromise.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
