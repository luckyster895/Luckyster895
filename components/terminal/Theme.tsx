"use client";

import { Moon, Sun } from "lucide-react";

// Dark / light switch. Labels swap via the `dark:` variant, so no state.
export function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button type="button" onClick={toggle} aria-label="Switch between dark and light mode" className={`btn ${className}`}>
      <Sun size={14} className="hidden dark:block" aria-hidden />
      <Moon size={14} className="dark:hidden" aria-hidden />
      <span className="hidden md:inline">
        <span className="hidden dark:inline">Light</span>
        <span className="dark:hidden">Dark</span>
      </span>
    </button>
  );
}
