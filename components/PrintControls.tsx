"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import { ThemeToggle } from "@/components/terminal/Theme";

export default function PrintControls() {
  const router = useRouter();

  // "/resume/?print=1" opens the print dialog so the visitor can save a PDF.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("print") === "1") {
      const t = setTimeout(() => window.print(), 600);
      return () => clearTimeout(t);
    }
  }, []);

  // Return to whichever design the visitor came from.
  const back = () => (window.history.length > 1 ? router.back() : router.push("/"));

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <button type="button" onClick={back} className="btn text-foreground">
        <ArrowLeft size={14} aria-hidden />
        <span className="hidden sm:inline">Back</span>
        <span className="sr-only sm:hidden">Back</span>
      </button>
      <ThemeToggle className="text-foreground" />
      <button type="button" onClick={() => window.print()} className="btn text-foreground">
        <Download size={14} aria-hidden />
        <span className="hidden sm:inline">Download PDF</span>
        <span className="sm:hidden">PDF</span>
      </button>
    </div>
  );
}
