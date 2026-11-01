import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PrintControls from "@/components/PrintControls";
import { certs, education, journey, otherLearning, profile, resumeSkills, resumeSummary } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume | Abhinav Saxena",
  description: "Resume of Abhinav Saxena, Martech Developer.",
};

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="accent-print mt-8 mb-3 border-b-2 border-accent/30 pb-1 text-sm font-bold uppercase tracking-[0.18em] text-accent">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  const work = journey.slice(0, 3);
  const security = journey[3];

  return (
    <>
      <Navbar />
      <main className="hero-bg min-h-screen px-0 pt-28 pb-16 sm:px-6">
        <PrintControls />
        <article className="resume-sheet card mx-auto max-w-4xl rounded-none p-6 sm:rounded-xl sm:p-12">
          <header className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
            <p className="accent-print mt-2 text-lg font-semibold text-accent">Salesforce Marketing Cloud · Data Cloud · Agentforce Developer</p>
            <p className="mt-2 text-sm text-muted">
              {profile.location} · {profile.links.linkedin.replace("https://www.", "")} · {profile.links.github.replace("https://", "")}
            </p>
          </header>

          <H>Professional Summary</H>
          <p className="leading-relaxed text-foreground/85">{resumeSummary}</p>

          <H>Professional Experience</H>
          <div className="space-y-6">
            {work.map((j) => (
              <section key={j.title + j.when}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-bold">
                    {j.title} <span className="font-medium text-muted">· {j.org}</span>
                  </h3>
                  <span className="text-sm font-semibold text-muted">{j.when}</span>
                </div>
                {j.note && <p className="mt-1 text-sm italic text-muted">{j.note}</p>}
                {j.points && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-foreground/85">
                    {j.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <H>Security Background</H>
          <ul className="list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-foreground/85">
            {security.points?.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <H>Technical Skills</H>
          <div className="flex flex-wrap gap-2">
            {resumeSkills.map((s) => (
              <span key={s} className="rounded-full border border-line px-3 py-1 text-[13px] font-medium">
                {s}
              </span>
            ))}
          </div>

          <H>Certifications</H>
          <ul className="grid gap-x-6 gap-y-1 text-[15px] sm:grid-cols-2">
            {certs.map((c) => (
              <li key={c}>Salesforce Certified {c}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted">Also: {otherLearning.join(" · ")}</p>

          <H>Education</H>
          <ul className="space-y-1 text-[15px]">
            {education.map((e) => (
              <li key={e.title} className="flex flex-wrap justify-between gap-x-4">
                <span>
                  <strong>{e.title}</strong>, {e.org}
                </span>
                <span className="text-muted">{e.when}</span>
              </li>
            ))}
          </ul>
        </article>
      </main>
    </>
  );
}
