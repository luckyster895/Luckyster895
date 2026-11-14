import Link from "next/link";
import { certs, connect, education, globeSkills, journey, otherLearning, profile, skills, stats } from "@/lib/data";
import Counter from "@/components/Counter";
import Globe from "@/components/dev3d/Globe";
import ProfileCode from "@/components/ProfileCode";
import Reveal from "@/components/Reveal";
import Bar from "@/components/terminal/Bar";
import Shell from "@/components/terminal/Shell";
import { ThemeToggle } from "@/components/terminal/Theme";

const firstName = profile.name.split(" ")[0].toUpperCase();
const handle = profile.name.toUpperCase().replace(/\s+/g, "_");
const work = journey.slice(0, 4);

// One line per entry in `skills`, in the same order.
const skillNotes = [
  "Journeys, automations and scripted personalization across email, SMS, WhatsApp and mobile push.",
  "Unified customer profiles in Data Cloud, from ingestion and identity resolution through to activation, plus Agentforce.",
  "REST-based CRM integrations, webhooks and conversational channels wired into Marketing Cloud.",
  "Where I started: penetration tests, vulnerability assessments and audits. It still shapes how I design integrations.",
];

// Fixed positions, so the server and client render the same markup.
const particles = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37) % 100,
  top: 12 + ((i * 61) % 84),
  duration: 7 + (i % 8),
  delay: (i * 0.45) % 6,
}));

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative border-t border-line px-6 py-16 md:px-12 md:py-24">
      <span aria-hidden className="head pointer-events-none absolute right-6 top-3 select-none text-[48px] leading-none text-line md:right-8 md:text-[80px]">
        {n}
      </span>
      <Reveal>
        <p className="mb-4 flex items-center gap-3 text-xs tracking-[0.25em] text-accent">
          <span className="dim">{"//"}</span>
          <span>SECTION_{n}</span>
        </p>
        <h2 className="head mb-12 text-[clamp(38px,7vw,96px)] leading-[0.9]">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <Shell>
    <div className="mx-auto max-w-[1400px]">
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-line bg-background/90 px-6 backdrop-blur md:px-12">
        <a href="#top" className="head text-sm tracking-wider" aria-label={`${profile.name}, back to top`}>
          <span className="text-accent">&gt;</span> {handle}
        </a>
        <nav aria-label="Primary" className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted md:gap-6">
          <a href="#skills" className="hidden transition-colors hover:text-accent md:inline">Skills</a>
          <a href="#experience" className="hidden transition-colors hover:text-accent md:inline">Experience</a>
          <a href="#certs" className="hidden transition-colors hover:text-accent md:inline">Certs</a>
          <ThemeToggle className="text-foreground" />
          <span className="hidden sm:block">
            <a href="#contact" className="btn text-foreground">Contact</a>
          </span>
        </nav>
      </header>

      <main id="top">
        {/* ---------- 01 Hero ---------- */}
        <section className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden px-6 pt-16 md:px-12 md:pt-24">
          <div aria-hidden className="absolute inset-0">
            {particles.map((p, i) => (
              <span
                key={i}
                className="particle"
                style={{ left: `${p.left}%`, top: `${p.top}%`, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }}
              />
            ))}
          </div>

          <div className="relative">
            <p className="mb-6 flex items-center gap-3 text-xs tracking-[0.25em] text-accent">
              <span className="dim">{"//"}</span>
              <span>SECTION_01</span>
            </p>
            <h1 className="head text-[clamp(36px,11.2vw,160px)] leading-none" aria-label={`Hello, I'm ${profile.name}`}>
              <span className="block" aria-hidden>
                HELLO,
              </span>
              <span className="block whitespace-nowrap" aria-hidden>
                I&apos;M{" "}
                <span className="type">
                  {firstName.split("").map((ch, i) => (
                    <span key={i} style={{ "--i": i } as React.CSSProperties}>
                      {ch}
                    </span>
                  ))}
                </span>
                <span className="cursor" />
              </span>
            </h1>
            <p className="mt-8 max-w-xl border-l border-line pl-4 text-sm leading-relaxed text-muted">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/resume/" className="btn">
                See my resume
              </Link>
              {connect.map((c) => (
                <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" className="btn text-muted">
                  {c.name}
                </a>
              ))}
            </div>
          </div>

          <ul className="relative mt-auto grid grid-cols-2 border-t border-line pt-0 md:grid-cols-4">
            {stats.map((s, i) => (
              <li key={s.label} className={`border-line py-8 pr-4 md:pl-8 md:first:pl-0 ${i > 0 ? "md:border-l" : ""} ${i % 2 === 1 ? "border-l pl-6" : ""}`}>
                <p className="head text-4xl md:text-5xl">
                  <Counter value={s.value} />
                </p>
                <p className="dim mt-2 text-[11px] uppercase tracking-[0.2em]">{s.label}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- 02 About ---------- */}
        <Section id="about" n="02" title="Who I am.">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="border border-line bg-card">
                <div className="flex items-center justify-between border-b border-line px-4 py-3 text-xs">
                  <span>
                    <span className="text-accent">&gt;</span> cat abhinav.ts
                  </span>
                  <span className="dim uppercase tracking-[0.2em]">read-only</span>
                </div>
                <ProfileCode className="p-5 md:p-6" />
              </div>
            </Reveal>
            <div>
              <div className="mx-auto aspect-square w-full max-w-[520px]">
                <Globe labels={globeSkills} />
              </div>
              <p className="dim text-center text-[11px] uppercase tracking-[0.2em]">{"// skill graph · move the mouse"}</p>
            </div>
          </div>
        </Section>

        {/* ---------- 03 Skills ---------- */}
        <Section id="skills" n="03" title="What I do.">
          <Reveal>
            <p className="max-w-2xl text-sm uppercase leading-relaxed tracking-widest text-muted">
              {profile.role} building automation-driven customer engagement on Salesforce Marketing Cloud, Data Cloud and Agentforce
            </p>
          </Reveal>
          <div className="mt-12 space-y-12 border-t border-line pt-12 md:space-y-16">
            {skills.map((s, i) => (
              <Reveal key={s.title} className="grid gap-8 md:grid-cols-2 md:gap-10">
                <div>
                  <h3 className="head mb-5 text-2xl">
                    <span className="text-accent">&gt; </span>
                    {s.title}
                  </h3>
                  <p className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="text-accent">-</span>
                    <span>{skillNotes[i]}</span>
                  </p>
                </div>
                <ul className="flex flex-wrap content-start gap-2">
                  {s.items.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ---------- 04 Certifications ---------- */}
        <Section id="certs" n="04" title="Certified.">
          <Reveal>
            <div className="mb-2 flex justify-between gap-4 text-sm uppercase">
              <span>Salesforce certifications</span>
              <span className="text-accent">
                {certs.length}/{certs.length} passed
              </span>
            </div>
            <Bar label={`${certs.length} of ${certs.length} Salesforce certifications passed`} />
          </Reveal>
          <ol className="mt-10 border-t border-line">
            {certs.map((c, i) => (
              <li key={c}>
                <Reveal delay={i * 0.04} className="flex items-baseline gap-4 border-b border-line py-4 text-sm md:gap-8 md:text-base">
                  <span className="dim shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="shrink-0 text-accent">[PASS]</span>
                  <span className="uppercase tracking-wide">{c}</span>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              <span className="dim">{"// also completed: "}</span>
              {otherLearning.join(" · ")}
            </p>
          </Reveal>
        </Section>

        {/* ---------- 05 Experience ---------- */}
        <Section id="experience" n="05" title="Experience.">
          <ol className="space-y-14">
            {work.map((j) => (
              <li key={j.title + j.when}>
                <Reveal className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10">
                  <div>
                    <h3 className="head text-2xl leading-tight md:text-3xl">{j.org}</h3>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-accent">{j.title}</p>
                    <p className="dim mt-2 text-xs uppercase tracking-[0.2em]">{j.when}</p>
                  </div>
                  <div className="border-l border-line pl-5 md:pl-8">
                    {j.note && (
                      <p className="flex gap-3 text-sm leading-relaxed text-foreground">
                        <span className="text-accent">&gt;</span>
                        <span>{j.note}</span>
                      </p>
                    )}
                    {j.points && (
                      <ul className={`space-y-3 ${j.note ? "mt-5" : ""}`}>
                        {j.points.map((p) => (
                          <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                            <span className="text-accent">-</span>
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
        </Section>

        {/* ---------- 06 Education ---------- */}
        <Section id="education" n="06" title="Education.">
          <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
            {education.map((e) => (
              <li key={e.title} className="bg-background p-6 md:p-8">
                <Reveal>
                  <h3 className="head text-xl md:text-2xl">{e.org}</h3>
                  <p className="mt-3 text-sm text-muted">{e.title}</p>
                  <p className="dim mt-2 text-xs uppercase tracking-[0.2em]">{e.when}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>

        {/* ---------- 07 Contact ---------- */}
        <Section id="contact" n="07" title="Let's talk.">
          <Reveal>
            <p className="max-w-xl text-sm uppercase leading-relaxed tracking-widest text-muted">
              Have a Marketing Cloud or Data Cloud problem, or just want to say hi? Pick a channel.
            </p>
          </Reveal>
          <ul className="mt-10 border-t border-line">
            {connect.map((c) => (
              <li key={c.name}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-line py-6">
                  <span className="head text-3xl transition-colors group-hover:text-accent md:text-5xl">
                    <span className="text-accent">&gt; </span>
                    {c.name}
                  </span>
                  <span className="text-sm text-muted">{c.desc}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/resume/" className="btn">
              View resume
            </Link>
            <Link href="/resume/?print=1" className="btn text-muted">
              Download PDF
            </Link>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line px-6 pb-10 pt-8 md:px-12">
        <p className="dim text-xs uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} {profile.name} · {profile.location} · EOF
        </p>
      </footer>
    </div>
    </Shell>
  );
}
