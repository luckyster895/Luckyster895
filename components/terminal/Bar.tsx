"use client";

import { motion } from "framer-motion";

// A progress bar that fills when it scrolls into view.
export default function Bar({ label }: { label: string }) {
  return (
    <div className="bar" role="img" aria-label={label}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "0 50%" }}
      />
    </div>
  );
}
