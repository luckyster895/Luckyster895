"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function PrintControls() {
  // "/resume/?print=1" opens the print dialog so the visitor can save a PDF.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("print") === "1") {
      const t = setTimeout(() => window.print(), 600);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <div className="no-print mx-auto mb-6 flex max-w-4xl items-center justify-between px-4 sm:px-0">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
        <ArrowLeft size={16} /> Back to site
      </Link>
      <button
        onClick={() => window.print()}
        className="grad-bg inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition "
      >
        <Download size={16} /> Download PDF
      </button>
    </div>
  );
}
