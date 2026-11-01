"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, MapPin } from "lucide-react";
import { badges, profile, roles } from "@/lib/data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
  const [i, setI] = useState(0);
  const [hasPhoto, setHasPhoto] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setHasPhoto(true);
    img.src = `${basePath}/photo.jpg`;
  }, []);

  return (
    <section id="top" className="hero-bg relative overflow-hidden pt-32 pb-20 text-center sm:pt-40">

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid h-40 w-40 place-items-center rounded-full border border-line p-1.5 sm:h-52 sm:w-52"
        >
          {hasPhoto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`${basePath}/photo.jpg`} alt={profile.name} className="h-full w-full rounded-full border-4 border-background object-cover" />
          ) : (
            <div className="grid h-full w-full place-items-center rounded-full border-4 border-background bg-surface">
              <span className="grad-text text-6xl font-bold">AS</span>
            </div>
          )}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-xl font-medium sm:text-2xl"
        >
          {profile.role} <span className="text-muted">|</span>{" "}
          <span className="relative inline-block min-w-[14ch] text-left align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[i]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grad-text inline-block font-bold"
              >
                {roles[i]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-5 max-w-2xl text-lg text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-line px-4 py-1.5 text-sm font-medium text-foreground/80"
            >
              {b}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/resume/" className="grad-bg inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition ">
            <FileText size={18} /> View Resume
          </Link>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="card rounded-lg px-6 py-3 font-semibold transition ">
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="card rounded-lg px-6 py-3 font-semibold transition ">
            GitHub
          </a>
        </motion.div>

        <p className="mt-6 inline-flex items-center gap-1 text-sm text-muted">
          <MapPin size={15} /> {profile.location}
        </p>
      </div>
    </section>
  );
}
