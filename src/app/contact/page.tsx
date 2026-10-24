import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="glow pointer-events-none absolute inset-0" />
        <div className="container-x relative grid gap-14 py-24 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-2 text-sm font-medium text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for New Opportunities
            </span>
            <h1 className="mt-6 text-5xl font-black leading-tight text-white sm:text-6xl">
              Let's Build the <span className="grad-text">Extraordinary.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-400">
              Whether you have a groundbreaking idea or need technical expertise, I'm here to transform your vision into a world-class digital product.
            </p>

            <h2 className="mt-12 text-xl font-bold text-white">Direct Channels</h2>
            <dl className="mt-5 space-y-5">
              <div><dt className="text-sm text-slate-500">Email</dt><dd><a href="mailto:madaneshubham853@gmail.com" className="font-semibold text-white hover:text-brand-soft">madaneshubham853@gmail.com</a></dd></div>
              <div><dt className="text-sm text-slate-500">Location</dt><dd className="font-semibold text-white">Pune, Maharashtra, India</dd></div>
              <div><dt className="text-sm text-slate-500">Availability</dt><dd className="font-semibold text-white">Freelance &amp; Full-time</dd></div>
            </dl>

            <h3 className="mt-10 text-sm font-semibold text-slate-400">Social Connection</h3>
            <div className="mt-3 flex gap-3">
              <a href="https://github.com/shubham5177" target="_blank" rel="noreferrer" className="btn-ghost !px-5 !py-2.5">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-ghost !px-5 !py-2.5">LinkedIn</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <p className="container-x pb-12 text-xs font-semibold tracking-widest text-slate-600">© {new Date().getFullYear()} SHUBHAM MADANE • ENVISIONING THE FUTURE</p>
    </>
  );
}
