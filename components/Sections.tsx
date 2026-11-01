import { ArrowUpRight, Award, Download, FileText, GraduationCap } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { certs, yearsExperience, connect, education, journey, otherLearning, profile, skills, stats } from "@/lib/data";

function Heading({ title, sub }: { title: string; sub?: string }) {
  return (
    <Reveal className="mb-14 text-center">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      <div className="grad-bg mx-auto mt-4 h-1 w-16 rounded-full" />
      {sub && <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{sub}</p>}
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Heading title="About Me" sub="Transforming customer engagement through data and automation" />
        <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
          <Reveal>
            <p>
              I&apos;m a <span className="hl">results-driven Martech Developer</span> with hands-on expertise in{" "}
              <span className="hl">Marketing Cloud Engagement</span> and <span className="hl">Data Cloud</span>, currently exploring the
              Agentic Marketing Cloud platforms (<span className="hl">Growth, Advanced and Next</span>).
            </p>
          </Reveal>
          <Reveal>
            <p>
              With <span className="hl">{yearsExperience}+ years of experience</span> and multiple Salesforce certifications, I build highly scalable,
              automation-driven campaigns that use cross-cloud data, advanced <span className="hl">SSJS</span> scripting and real-time
              personalization across email, SMS, WhatsApp and mobile push.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Before Salesforce, I started in <span className="hl">cybersecurity</span>: web application penetration testing,
              vulnerability assessments and audits. That background still shapes how I design secure integrations.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="card h-full rounded-lg p-6 text-center transition ">
                <div className="grad-text text-5xl font-bold">
                  <Counter value={s.value} />
                </div>
                <div className="mt-2 text-sm font-medium text-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="bg-surface py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Heading title="Career Journey" sub="From ethical hacking to marketing technology" />
        <ol className="relative border-l-2 border-line pl-8 sm:pl-10">
          {journey.map((j) => (
            <li key={j.title + j.when} className="relative pb-10 last:pb-0">
              <span className="grad-bg absolute -left-[43px] top-6 h-4 w-4 rounded-full ring-4 ring-surface sm:-left-[51px]" />
              <Reveal>
                <div className="card rounded-lg p-6 transition ">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-xl font-bold">{j.title}</h3>
                    <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">{j.when}</span>
                  </div>
                  <p className="mt-1 font-semibold text-accent">{j.org}</p>
                  {j.note && <p className="mt-3 text-sm italic text-muted">{j.note}</p>}
                  {j.points && (
                    <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-foreground/75">
                      {j.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="grad-bg mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading title="Technical Expertise" sub="Skills powering scalable customer engagement" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="card h-full rounded-lg p-6 transition ">
                <div className="grad-bg mb-4 h-1 w-10 rounded-full" />
                <h3 className="text-lg font-bold">{s.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((t) => (
                    <span key={t} className="rounded-full border border-line px-3 py-1 text-[13px] font-medium text-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <p className="text-sm text-muted">
            <strong className="text-foreground">Languages:</strong> English, Hindi
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Certs() {
  return (
    <section id="certs" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading title="Certifications" sub="7 Salesforce credentials" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <Reveal key={c} delay={(i % 3) * 0.07}>
              <div className="card flex h-full items-start gap-4 rounded-lg p-5 transition ">
                <span className="grad-bg grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white">
                  <Award size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">Salesforce Certified</p>
                  <p className="mt-0.5 font-semibold">{c}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <div className="card mx-auto flex max-w-3xl items-start gap-4 rounded-lg p-5">
            <GraduationCap className="mt-0.5 shrink-0 text-accent" />
            <div className="text-sm text-foreground/80">
              <p>
                <strong>Other learning:</strong> {otherLearning.join(" · ")}
              </p>
              <p className="mt-2">
                <strong>Education:</strong> {education.map((e) => `${e.title}, ${e.org}`).join(" · ")}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ResumeCta() {
  return (
    <section id="resume" className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Heading title="Resume" sub="A one-page snapshot of my experience, skills and certifications" />
        <Reveal>
          <div className="card relative overflow-hidden rounded-lg p-8 text-center sm:p-12">
            <span className="grad-bg mx-auto grid h-16 w-16 place-items-center rounded-lg text-white">
              <FileText size={30} />
            </span>
            <h3 className="mt-5 text-2xl font-bold">{profile.name} · Resume</h3>
            <p className="mx-auto mt-2 max-w-lg text-muted">
              Read it online in the same design as this site, or save it as a PDF from the print dialog.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/resume/" className="grad-bg inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition ">
                <FileText size={18} /> View Resume
              </Link>
              <Link href="/resume/?print=1" className="card inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition ">
                <Download size={18} /> Download PDF
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Connect() {
  return (
    <section id="connect" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading title="Let's Connect" sub="Find my work, writing and professional updates here" />
        <div className="grid gap-6 md:grid-cols-3">
          {connect.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.07}>
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="card group flex h-full flex-col rounded-lg p-6 transition ">
                <h3 className="text-xl font-bold">{c.name}</h3>
                <p className="mt-2 flex-1 text-muted">{c.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1 font-semibold text-accent">
                  {c.cta} <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="no-print border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 text-sm text-muted sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <Link href="/#top" className="hover:text-accent">Back to top ↑</Link>
      </div>
    </footer>
  );
}
