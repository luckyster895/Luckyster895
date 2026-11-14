"use client";

import { useEffect, useRef } from "react";

type P = { x: number; y: number; z: number };

// Evenly spread points on a sphere of radius r.
function fibonacci(n: number, r: number): P[] {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: n }, (_, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const t = golden * i;
    return { x: Math.cos(t) * rad * r, y: y * r, z: Math.sin(t) * rad * r };
  });
}

function rotate(p: P, yaw: number, pitch: number): P {
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const x = p.x * cy + p.z * sy;
  const z = -p.x * sy + p.z * cy;
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  return { x, y: p.y * cp - z * sp, z: p.y * sp + z * cp };
}

const CAMERA = 3.6;
const SHELL = 1.26;

// A rotating point-cloud sphere with labelled skill nodes and data pulses
// travelling between them. Decorative: the same skills are listed as text
// in the Stack section.
export default function Globe({ labels }: { labels: string[] }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const css = getComputedStyle(canvas);
    let accent = "";
    let accent2 = "";
    let fg = "";
    // Re-read when the page switches between dark and light.
    const readColors = () => {
      accent = css.getPropertyValue("--accent").trim() || "#7cf5c4";
      accent2 = css.getPropertyValue("--accent-2").trim() || "#8b7bff";
      fg = css.getPropertyValue("--foreground").trim() || "#eef0f6";
    };
    readColors();
    const font = `500 12px ${css.fontFamily}`;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dots = fibonacci(320, 1);
    const nodes = fibonacci(labels.length, SHELL);
    // Link every node to its two nearest neighbours.
    const edges: [number, number][] = [];
    nodes.forEach((a, i) => {
      nodes
        .map((b, j) => ({ j, d: (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2 }))
        .filter((o) => o.j !== i)
        .sort((m, n) => m.d - n.d)
        .slice(0, 2)
        .forEach(({ j }) => {
          if (!edges.some(([p, q]) => (p === i && q === j) || (p === j && q === i))) edges.push([i, j]);
        });
    });

    let w = 0;
    let h = 0;
    let yaw = 0.6;
    const pitch = -0.25;
    let tx = 0;
    let ty = 0;
    let px = 0;
    let py = 0;
    let time = 0;
    let raf = 0;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw();
    };

    const draw = () => {
      const R = Math.min(w, h) * 0.34;
      const cx = w / 2;
      const cy = h / 2;
      const project = (p: P) => {
        const r = rotate(p, yaw + px, pitch + py);
        const s = CAMERA / (CAMERA + r.z);
        return { x: cx + r.x * s * R, y: cy + r.y * s * R, z: r.z, s };
      };
      // 0 at the back of the scene, 1 at the front.
      const depth = (z: number) => Math.min(1, Math.max(0, (SHELL - z) / (2 * SHELL)));

      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = fg;
      for (const d of dots) {
        const q = project(d);
        const f = depth(q.z);
        ctx.globalAlpha = 0.08 + 0.5 * f * f;
        ctx.beginPath();
        ctx.arc(q.x, q.y, (0.6 + 1.1 * f) * q.s, 0, Math.PI * 2);
        ctx.fill();
      }

      const proj = nodes.map(project);

      ctx.lineWidth = 1;
      edges.forEach(([a, b], i) => {
        const A = proj[a];
        const B = proj[b];
        const f = depth((A.z + B.z) / 2);
        ctx.globalAlpha = 0.1 + 0.45 * f;
        ctx.strokeStyle = accent2;
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.stroke();
        // Data pulse along the link.
        const t = (time * 0.35 + i * 0.37) % 1;
        ctx.globalAlpha = 0.25 + 0.75 * f;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(A.x + (B.x - A.x) * t, A.y + (B.y - A.y) * t, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.font = font;
      ctx.textBaseline = "middle";
      proj
        .map((q, i) => ({ q, i }))
        .sort((m, n) => n.q.z - m.q.z)
        .forEach(({ q, i }) => {
          const f = depth(q.z);
          ctx.globalAlpha = 0.25 + 0.75 * f;
          ctx.shadowColor = accent;
          ctx.shadowBlur = 14 * f;
          ctx.fillStyle = accent;
          ctx.beginPath();
          ctx.arc(q.x, q.y, 2.5 + 2.5 * f, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 0.12 + 0.88 * f * f;
          ctx.fillStyle = fg;
          const tw = ctx.measureText(labels[i]).width;
          // Keep labels inside the canvas.
          const lx = q.x + 10 + tw > w - 4 ? q.x - 10 - tw : q.x + 10;
          ctx.fillText(labels[i], lx, q.y);
        });
      ctx.globalAlpha = 1;
    };

    const tick = () => {
      if (visible) {
        yaw += 0.0026;
        time += 1 / 60;
        px += (tx - px) * 0.05;
        py += (ty - py) * 0.05;
        draw();
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 0.9;
      ty = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(canvas);
    const mo = new MutationObserver(() => {
      readColors();
      if (reduce) draw();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    resize();
    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, [labels]);

  return <canvas ref={ref} aria-hidden className="h-full w-full font-mono" />;
}
