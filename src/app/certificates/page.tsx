import Image from "next/image";
import Footer from "@/components/Footer";

const certificates = [
  { title: "Adobe Hackathon", file: "adobe_hackathon_certificate.pdf" },
  { title: "Agentic AI", file: "agentic ai certificate.pdf" },
  { title: "Aptus Technology", file: "Aptus Technology.pdf" },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    file: "AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260921-21-35okej.pdf",
  },
  { title: "C Language", file: "C Language.pdf" },
  { title: "CEP", file: "CEP.pdf" },
  { title: "CodeArena", file: "CodeArena.pdf" },
  { title: "CodeChef Badge", file: "CodeChefBadge.png" },
  { title: "Commonwealth Bank", file: "CommomWealth Bank Certificate.pdf" },
  { title: "Datacom Job Simulation", file: "Datacom_job_simulation.pdf" },
  { title: "DBMS Certificate of Excellence", file: "DBMS Certificate of Excellence.png" },
  { title: "DMK", file: "DMK certificate.pdf" },
  { title: "GDSC PCCOER Hackathon", file: "gdscpccoer hackathon certificate.pdf" },
  { title: "Gemini", file: "gemini certificates.pdf" },
  { title: "Gemini", file: "Gemini.png" },
  { title: "HackerRank Problem Solving", file: "Hacckerrank Problem Solving.png" },
  { title: "HackDay", file: "hackday certificate.jpeg" },
  { title: "HackerRank Java Basic", file: "hackerrank java basic.png" },
  { title: "HTML Spoken Tutorial", file: "Html spoken tutorial.pdf" },
  { title: "VORTEX 2K26 Global AI Innovation Hackathon", file: "Innovation-Hacks-Certificate.pdf" },
  { title: "Java", file: "JAVA.jpg" },
  { title: "HackerRank JavaScript", file: "javascript hackerrank certificate.png" },
  { title: "LeetCode 1st Badge", file: "leetcode 1st badge.png" },
  { title: "LeetCode 2nd Badge", file: "leetcode 2nd badge.png" },
  { title: "LeetCode 3rd Badge", file: "leetcode 3rd badge.png" },
  { title: "LeetCode 4th Badge", file: "leetcode 4th badge.png" },
  { title: "LeetCode 5th Badge", file: "leetcode 5th badge.png" },
  { title: "MongoDB", file: "MongoDB.pdf" },
  { title: "Oracle", file: "oracle certificate.pdf" },
  { title: "PCCOE Indradhanu", file: "Pccoe Indradhanu.pdf" },
  { title: "PosterTech", file: "PosterTech.pdf" },
  { title: "Python", file: "Python.jpeg" },
  { title: "Spoken Tutorial", file: "Spoken Tutorial Certificate.pdf" },
  { title: "Spoken Tutorial Python Test", file: "spoken tutorial python test.pdf" },
  { title: "Web Development", file: "Web Development.jpg" },
];

function isImage(file: string) {
  return /\.(jpe?g|png)$/i.test(file);
}

function getPreviewUrl(file: string, href: string) {
  if (isImage(file)) return href;

  const preview = file.replace(/\.pdf$/i, ".jpg");
  return `/certificates/previews/${encodeURIComponent(preview)}`;
}

export default function Certificates() {
  return (
    <>
      <section className="container-x py-20">
        <p className="text-sm font-semibold text-brand-soft">Milestones & Recognition</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Certificates & Achievements</h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Browse my certificates and achievements in technology, education, and problem solving.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => {
            const href = `/certificates/${encodeURIComponent(certificate.file)}`;
            const isPdf = /\.pdf$/i.test(certificate.file);

            return (
              <article key={certificate.file} className="card !p-4">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${certificate.title} certificate`}
                  className="block"
                >
                  {isImage(certificate.file) || isPdf ? (
                    <Image
                      src={getPreviewUrl(certificate.file, href)}
                      alt={`${certificate.title} certificate`}
                      width={1200}
                      height={900}
                      className="aspect-[4/3] w-full rounded-2xl bg-ink object-contain"
                    />
                  ) : (
                    <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-line bg-ink text-center">
                      <span className="text-sm font-medium text-slate-400">Preview unavailable</span>
                    </div>
                  )}
                </a>
                <div className="px-3 pb-3 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-soft">
                    {isPdf ? "PDF certificate" : "Image certificate"}
                  </p>
                  <h2 className="mt-2 text-lg font-bold text-white">{certificate.title}</h2>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-slate-400 transition hover:text-white"
                  >
                    View certificate
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
