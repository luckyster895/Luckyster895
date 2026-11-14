import type { Metadata } from "next";
import PrintControls from "@/components/PrintControls";
import { certs, education, journey, otherLearning, profile, resumeSkills, resumeSummary } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume | Abhinav Saxena",
  description: "Resume of Abhinav Saxena, Martech Developer.",
};

const handle = profile.name.toUpperCase().replace(/\s+/g, "_");

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="accent-print mt-10 mb-4 flex items-center gap-3 border-b border-line pb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
      <span className="dim" aria-hidden>
        {"//"}
      </span>
      {children}
    </h2>
  );
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-relaxed text-muted">
      {items.map((p) => (
        <li key={p} className="flex gap-3">
          <span className="accent-print text-accent" aria-hidden>
            -
          </span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  const work = journey.slice(0, 3);
  const security = journey[3];

  return (
    <div className="mx-auto max-w-[1400px]">
      <header className="no-print sticky top-0 z-40 flex h-16 items-center justify-between gap-3 border-b border-line bg-background/90 px-4 backdrop-blur md:px-12">
        <p className="head truncate text-sm tracking-wider">
          <span className="text-accent">&gt;</span> <span className="hidden sm:inline">{handle}</span>
          <span className="dim hidden sm:inline"> / </span>
          <span className="sm:text-(--dim)">RESUME</span>
        </p>
        <PrintControls />
      </header>

      <main className="px-0 py-8 sm:px-6 sm:py-14">
        <article className="resume-sheet mx-auto max-w-4xl border-y border-line bg-card p-6 sm:border sm:p-12">
          <header>
            <p className="accent-print mb-4 flex items-center gap-3 text-xs tracking-[0.25em] text-accent">
              <span className="dim" aria-hidden>
                {"//"}
              </span>
              RESUME
            </p>
            <h1 className="head text-4xl leading-none sm:text-6xl">{profile.name}</h1>
            <p className="accent-print mt-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Salesforce Marketing Cloud · Data Cloud · Agentforce Developer
            </p>
            <p className="mt-3 break-words text-xs text-muted">
              {profile.location} · {profile.links.linkedin.replace("https://www.", "")} · {profile.links.github.replace("https://", "")}
            </p>
          </header>

          <H>Professional Summary</H>
          <p className="text-sm leading-relaxed text-muted">{resumeSummary}</p>

          <H>Professional Experience</H>
          <div className="space-y-8">
            {work.map((j) => (
              <section key={j.title + j.when}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="head text-lg">{j.title}</h3>
                  <span className="dim text-xs uppercase tracking-[0.2em]">{j.when}</span>
                </div>
                <p className="accent-print mt-1 text-xs font-semibold uppercase tracking-widest text-accent">{j.org}</p>
                {j.note && (
                  <p className="mt-3 flex gap-3 text-sm leading-relaxed">
                    <span className="accent-print text-accent" aria-hidden>
                      &gt;
                    </span>
                    <span>{j.note}</span>
                  </p>
                )}
                {j.points && (
                  <div className="mt-3">
                    <Points items={j.points} />
                  </div>
                )}
              </section>
            ))}
          </div>

          <H>Security Background</H>
          {security.points && <Points items={security.points} />}

          <H>Technical Skills</H>
          <ul className="flex flex-wrap gap-2">
            {resumeSkills.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>

          <H>Certifications</H>
          <ol className="grid gap-x-8 text-sm sm:grid-cols-2">
            {certs.map((c, i) => (
              <li key={c} className="flex gap-3 border-b border-line py-2">
                <span className="dim">{String(i + 1).padStart(2, "0")}</span>
                <span>Salesforce Certified {c}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            <span className="dim">{"// also: "}</span>
            {otherLearning.join(" · ")}
          </p>

          <H>Education</H>
          <ul className="space-y-2 text-sm">
            {education.map((e) => (
              <li key={e.title} className="flex flex-wrap justify-between gap-x-4">
                <span>
                  <strong className="font-semibold">{e.title}</strong>, {e.org}
                </span>
                <span className="dim text-xs uppercase tracking-[0.2em]">{e.when}</span>
              </li>
            ))}
          </ul>
        </article>
      </main>
    </div>
  );
}
