"use client";
import { useEffect, useRef } from "react";

// Rotating wireframe globe of linked nodes with orbiting rings; reacts to the pointer.
export function HeroOrbit() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0;
    let rx = 0.3, ry = 0, tx = 0, ty = 0;

    const N = 130;
    const pts = Array.from({ length: N }, (_, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const th = Math.PI * (1 + Math.sqrt(5)) * i;
      return { x: Math.cos(th) * Math.sin(phi), y: Math.cos(phi), z: Math.sin(th) * Math.sin(phi) };
    });

    // Precompute neighbouring node pairs once instead of every frame.
    const links: [number, number, number][] = [];
    for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
      const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, dz = pts[i].z - pts[j].z;
      const d = dx * dx + dy * dy + dz * dz;
      if (d < 0.2) links.push([i, j, d]);
    }

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      tx = ((e.clientY - r.top) / r.height - 0.5) * 0.8;
      ty = ((e.clientX - r.left) / r.width - 0.5) * 0.8;
    };

    const draw = (t: number) => {
      if (!w || !h) { if (!reduce) raf = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.38, cx = w / 2, cy = h / 2;
      ry += reduce ? 0 : 0.004;
      rx += (0.3 + tx - rx) * 0.05;
      const yaw = ry + ty;
      const cosY = Math.cos(yaw), sinY = Math.sin(yaw), cosX = Math.cos(rx), sinX = Math.sin(rx);

      const proj = pts.map((p) => {
        const x1 = p.x * cosY + p.z * sinY, z1 = -p.x * sinY + p.z * cosY;
        const y2 = p.y * cosX - z1 * sinX, z2 = p.y * sinX + z1 * cosX;
        const s = 1 / (1.6 - z2 * 0.5);
        return { x: cx + x1 * R * s * 1.5, y: cy + y2 * R * s * 1.5, z: z2, s };
      });

      ctx.lineWidth = 1;
      for (const [i, j, d] of links) {
        const a = (1 - d / 0.2) * 0.35 * ((proj[i].z + proj[j].z) / 4 + 0.6);
        ctx.strokeStyle = `rgba(124,92,255,${Math.max(a, 0).toFixed(3)})`;
        ctx.beginPath(); ctx.moveTo(proj[i].x, proj[i].y); ctx.lineTo(proj[j].x, proj[j].y); ctx.stroke();
      }
      proj.forEach((p, i) => {
        const pulse = 0.5 + 0.5 * Math.sin(t / 600 + i);
        ctx.fillStyle = `rgba(${i % 9 === 0 ? "52,211,153" : "200,190,255"},${(0.35 + 0.5 * (p.z + 1) / 2 + (i % 9 === 0 ? 0.2 * pulse : 0)).toFixed(2)})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, (1.4 + (i % 9 === 0 ? 1.4 : 0)) * p.s * 1.6, 0, Math.PI * 2); ctx.fill();
      });

      // orbiting rings with travelling dots
      for (let k = 0; k < 2; k++) {
        const tilt = k ? -0.9 : 0.6, rr = R * (1.55 + k * 0.2);
        ctx.strokeStyle = "rgba(124,92,255,0.22)";
        ctx.beginPath(); ctx.ellipse(cx, cy, rr, rr * 0.28, tilt, 0, Math.PI * 2); ctx.stroke();
        const a = t / (k ? -1800 : 1300);
        const ex = rr * Math.cos(a), ey = rr * 0.28 * Math.sin(a);
        ctx.fillStyle = k ? "#34d399" : "#a78bfa";
        ctx.shadowColor = ctx.fillStyle as string; ctx.shadowBlur = 12;
        ctx.beginPath(); ctx.arc(cx + ex * Math.cos(tilt) - ey * Math.sin(tilt), cy + ex * Math.sin(tilt) + ey * Math.cos(tilt), 3.5, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (reduce) window.addEventListener("resize", () => requestAnimationFrame(draw));
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", onMove); };
  }, []);

  return <canvas ref={ref} aria-hidden className="h-full w-full" />;
}
