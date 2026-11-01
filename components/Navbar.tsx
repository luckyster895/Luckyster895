"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#certs", label: "Certifications" },
  { href: "/#resume", label: "Resume" },
  { href: "/#connect", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 bg-background/85 backdrop-blur-md transition-shadow ${
        scrolled || open ? "border-b border-line" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/#top" className="grad-text text-2xl font-bold tracking-tight" aria-label={`${profile.name}, home`}>
          AS
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-accent">
              {l.label}
            </Link>
          ))}
          <a href={profile.links.medium} target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-accent">
            Blog
          </a>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="ml-2 rounded-lg p-2 text-muted transition hover:text-accent">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="rounded-lg p-2 text-muted">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open} className="rounded-lg p-2">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="flex flex-col px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium text-foreground/80 hover:text-accent">
              {l.label}
            </Link>
          ))}
          <a href={profile.links.medium} target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-3 font-medium text-foreground/80 hover:text-accent">
            Blog
          </a>
        </nav>
      )}

      <motion.div className="grad-bg absolute bottom-0 left-0 h-[3px] w-full origin-left" style={{ scaleX: progress }} />
    </header>
  );
}
