"use client";

import { useEffect, useRef } from "react";

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    let t = 0;

    const dpr = window.devicePixelRatio || 1;
    let cw = 0, ch = 0;
    const resize = () => {
      const p = canvas.parentElement!;
      cw = p.offsetWidth;
      ch = p.offsetHeight;
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
      canvas.style.width = cw + "px";
      canvas.style.height = ch + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => cw;
    const H = () => ch;

    // ---- DRAWING HELPERS ----

    const drawLeaf = (cx: number, cy: number, size: number, angle: number, colors: [string, string]) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.7, -size * 0.5, size * 0.7, size * 0.4, 0, size);
      ctx.bezierCurveTo(-size * 0.7, size * 0.4, -size * 0.7, -size * 0.5, 0, -size);
      const grad = ctx.createLinearGradient(0, -size, 0, size);
      grad.addColorStop(0, colors[0]);
      grad.addColorStop(1, colors[1]);
      ctx.fillStyle = grad;
      ctx.fill();
      // Center vein
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.85);
      ctx.lineTo(0, size * 0.75);
      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // Side veins
      for (let i = -2; i <= 2; i++) {
        if (i === 0) continue;
        const vy = i * size * 0.25;
        const dir = i > 0 ? 1 : -1;
        ctx.beginPath();
        ctx.moveTo(0, vy);
        ctx.quadraticCurveTo(size * 0.2 * dir, vy - size * 0.1, size * 0.4 * dir, vy - size * 0.05);
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawTomato = (cx: number, cy: number, r: number) => {
      ctx.save();
      // Body
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.35, r * 0.1, cx, cy, r);
      grad.addColorStop(0, "#ff6b6b");
      grad.addColorStop(0.5, "#e53e3e");
      grad.addColorStop(1, "#c53030");
      ctx.fillStyle = grad;
      ctx.fill();
      // Highlight
      ctx.beginPath();
      ctx.ellipse(cx - r * 0.25, cy - r * 0.3, r * 0.25, r * 0.15, -0.3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.25)";
      ctx.fill();
      // Stem
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.15, cy - r * 0.9);
      ctx.lineTo(cx, cy - r * 1.2);
      ctx.lineTo(cx + r * 0.15, cy - r * 0.9);
      ctx.fillStyle = "#48bb78";
      ctx.fill();
      // Sepals
      for (let i = -1; i <= 1; i++) {
        ctx.beginPath();
        ctx.ellipse(cx + i * r * 0.3, cy - r * 0.85, r * 0.12, r * 0.3, i * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "#38a169";
        ctx.fill();
      }
      ctx.restore();
    };

    const drawBroccoli = (cx: number, cy: number, size: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      // Stem
      ctx.beginPath();
      ctx.roundRect(-size * 0.1, size * 0.15, size * 0.2, size * 0.45, 6);
      ctx.fillStyle = "#68a54a";
      ctx.fill();
      ctx.beginPath();
      ctx.roundRect(-size * 0.06, size * 0.15, size * 0.12, size * 0.45, 4);
      ctx.fillStyle = "#7bc462";
      ctx.fill();
      // Florets
      const florets: [number, number, number][] = [
        [0, -size * 0.2, size * 0.32],
        [-size * 0.25, -size * 0.05, size * 0.24],
        [size * 0.25, -size * 0.05, size * 0.24],
        [-size * 0.12, -size * 0.35, size * 0.22],
        [size * 0.12, -size * 0.35, size * 0.22],
        [0, -size * 0.45, size * 0.18],
        [-size * 0.3, -size * 0.25, size * 0.16],
        [size * 0.3, -size * 0.25, size * 0.16],
      ];
      florets.forEach(([x, y, r]) => {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
        g.addColorStop(0, "#68d391");
        g.addColorStop(0.6, "#48bb78");
        g.addColorStop(1, "#2f855a");
        ctx.fillStyle = g;
        ctx.fill();
      });
      // Tiny bumps for texture
      florets.forEach(([x, y, r]) => {
        for (let i = 0; i < 5; i++) {
          const bx = x + (Math.random() - 0.5) * r * 1.2;
          const by = y + (Math.random() - 0.5) * r * 1.2;
          ctx.beginPath();
          ctx.arc(bx, by, r * 0.12, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,255,255,0.08)";
          ctx.fill();
        }
      });
      ctx.restore();
    };

    const drawAvocado = (cx: number, cy: number, size: number, angle: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      // Skin
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.55, size * 0.75, 0, 0, Math.PI * 2);
      const skinGrad = ctx.createLinearGradient(-size * 0.5, -size * 0.5, size * 0.5, size * 0.5);
      skinGrad.addColorStop(0, "#2d6a30");
      skinGrad.addColorStop(1, "#1a4a1e");
      ctx.fillStyle = skinGrad;
      ctx.fill();
      // Flesh
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.42, size * 0.6, 0, 0, Math.PI * 2);
      const fleshGrad = ctx.createRadialGradient(0, -size * 0.1, size * 0.05, 0, 0, size * 0.55);
      fleshGrad.addColorStop(0, "#d4e88e");
      fleshGrad.addColorStop(0.6, "#b5cc5a");
      fleshGrad.addColorStop(1, "#8faa3a");
      ctx.fillStyle = fleshGrad;
      ctx.fill();
      // Pit
      ctx.beginPath();
      ctx.arc(0, size * 0.08, size * 0.22, 0, Math.PI * 2);
      const pitGrad = ctx.createRadialGradient(-size * 0.05, size * 0.02, size * 0.03, 0, size * 0.08, size * 0.22);
      pitGrad.addColorStop(0, "#c9a06c");
      pitGrad.addColorStop(0.5, "#a67c52");
      pitGrad.addColorStop(1, "#7a5530");
      ctx.fillStyle = pitGrad;
      ctx.fill();
      // Pit highlight
      ctx.beginPath();
      ctx.ellipse(-size * 0.06, size * 0.02, size * 0.08, size * 0.05, -0.3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.fill();
      ctx.restore();
    };

    const drawPepper = (cx: number, cy: number, size: number, angle: number, color: string) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      // Body - bell shape
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.6);
      ctx.bezierCurveTo(size * 0.6, -size * 0.5, size * 0.55, size * 0.4, size * 0.2, size * 0.7);
      ctx.quadraticCurveTo(0, size * 0.8, -size * 0.2, size * 0.7);
      ctx.bezierCurveTo(-size * 0.55, size * 0.4, -size * 0.6, -size * 0.5, 0, -size * 0.6);
      const grad = ctx.createRadialGradient(-size * 0.15, -size * 0.2, size * 0.05, 0, 0, size * 0.7);
      grad.addColorStop(0, color === "yellow" ? "#fbbf24" : "#f97316");
      grad.addColorStop(0.5, color === "yellow" ? "#f59e0b" : "#ea580c");
      grad.addColorStop(1, color === "yellow" ? "#d97706" : "#c2410c");
      ctx.fillStyle = grad;
      ctx.fill();
      // Highlight
      ctx.beginPath();
      ctx.ellipse(-size * 0.15, -size * 0.2, size * 0.12, size * 0.25, -0.2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      ctx.fill();
      // Stem
      ctx.beginPath();
      ctx.roundRect(-4, -size * 0.85, 8, size * 0.3, 3);
      ctx.fillStyle = "#48bb78";
      ctx.fill();
      ctx.restore();
    };

    const drawBlueberry = (cx: number, cy: number, r: number) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r);
      grad.addColorStop(0, "#818cf8");
      grad.addColorStop(0.5, "#6366f1");
      grad.addColorStop(1, "#4338ca");
      ctx.fillStyle = grad;
      ctx.fill();
      // Crown
      ctx.beginPath();
      ctx.arc(cx, cy - r * 0.6, r * 0.3, 0, Math.PI, true);
      ctx.fillStyle = "rgba(99,102,241,0.5)";
      ctx.fill();
      // Highlight
      ctx.beginPath();
      ctx.arc(cx - r * 0.2, cy - r * 0.25, r * 0.18, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.25)";
      ctx.fill();
    };

    // DNA helix
    const drawDNA = (cx: number, cy: number, size: number, phase: number) => {
      ctx.save();
      ctx.globalAlpha = 0.4;
      const steps = 14;
      const helixH = size * 2.5;
      for (let i = 0; i < steps; i++) {
        const frac = i / (steps - 1);
        const y = cy - helixH / 2 + frac * helixH;
        const ang = frac * Math.PI * 3 + phase;
        const x1 = cx + Math.cos(ang) * size * 0.5;
        const x2 = cx - Math.cos(ang) * size * 0.5;
        // Backbone dots
        ctx.beginPath(); ctx.arc(x1, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#86efac"; ctx.fill();
        ctx.beginPath(); ctx.arc(x2, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#6ee7b7"; ctx.fill();
        // Rungs
        if (i % 2 === 0) {
          ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y);
          ctx.strokeStyle = "rgba(134,239,172,0.3)"; ctx.lineWidth = 2;
          ctx.stroke();
        }
        // Connect backbone
        if (i > 0) {
          const prevFrac = (i - 1) / (steps - 1);
          const prevY = cy - helixH / 2 + prevFrac * helixH;
          const prevAng = prevFrac * Math.PI * 3 + phase;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(prevAng) * size * 0.5, prevY);
          ctx.lineTo(x1, y);
          ctx.strokeStyle = "rgba(134,239,172,0.15)"; ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(cx - Math.cos(prevAng) * size * 0.5, prevY);
          ctx.lineTo(x2, y);
          ctx.stroke();
        }
      }
      ctx.restore();
    };

    // Items to draw - positions in 0-1 space, scaled to canvas
    type Item = { type: string; x: number; y: number; size: number; amp: number; speed: number; color?: string };
    const items: Item[] = [
      { type: "broccoli", x: 0.6, y: 0.2, size: 120, amp: 15, speed: 0.7 },
      { type: "tomato", x: 0.25, y: 0.12, size: 50, amp: 12, speed: 1.0 },
      { type: "tomato", x: 0.88, y: 0.55, size: 38, amp: 10, speed: 0.85 },
      { type: "avocado", x: 0.45, y: 0.65, size: 90, amp: 12, speed: 0.6 },
      { type: "pepper", x: 0.8, y: 0.3, size: 60, amp: 11, speed: 0.8, color: "yellow" },
      { type: "pepper", x: 0.2, y: 0.5, size: 50, amp: 10, speed: 0.9, color: "orange" },
      { type: "leaf", x: 0.1, y: 0.22, size: 55, amp: 16, speed: 1.2 },
      { type: "leaf", x: 0.72, y: 0.48, size: 50, amp: 14, speed: 1.0 },
      { type: "leaf", x: 0.38, y: 0.85, size: 45, amp: 13, speed: 1.3 },
      { type: "leaf", x: 0.92, y: 0.1, size: 40, amp: 12, speed: 0.7 },
      { type: "leaf", x: 0.58, y: 0.8, size: 35, amp: 11, speed: 1.1 },
      { type: "blueberry", x: 0.15, y: 0.72, size: 22, amp: 8, speed: 1.3 },
      { type: "blueberry", x: 0.68, y: 0.62, size: 18, amp: 7, speed: 1.1 },
      { type: "blueberry", x: 0.48, y: 0.35, size: 16, amp: 6, speed: 1.4 },
      { type: "blueberry", x: 0.32, y: 0.42, size: 17, amp: 7, speed: 0.9 },
      { type: "dna", x: 0.5, y: 0.5, size: 55, amp: 6, speed: 0.4 },
      { type: "dna", x: 0.15, y: 0.42, size: 40, amp: 5, speed: 0.5 },
    ];

    // Particles
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random(), y: Math.random(),
      size: Math.random() * 3 + 1.5,
      speed: Math.random() * 0.2 + 0.08,
      alpha: Math.random() * 0.25 + 0.1,
    }));

    const draw = () => {
      const w = W();
      const h = H();
      ctx.clearRect(0, 0, w, h);
      t += 0.012;

      // Soft ambient glow
      ctx.save();
      [[0.6, 0.25, 160, "#48bb78"], [0.35, 0.7, 130, "#fbbf24"], [0.8, 0.75, 100, "#86efac"]].forEach(
        ([x, y, r, c]) => {
          ctx.globalAlpha = 0.07 + Math.sin(t * 0.5) * 0.02;
          ctx.beginPath();
          ctx.arc((x as number) * w, (y as number) * h, (r as number) + Math.sin(t * 0.4) * 20, 0, Math.PI * 2);
          ctx.fillStyle = c as string;
          ctx.fill();
        }
      );
      ctx.restore();

      // Particles
      particles.forEach((p) => {
        const px = p.x * w;
        const py = ((p.y * h + t * p.speed * 80) % (h + 40)) - 20;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(134,239,172,${p.alpha})`;
        ctx.fill();
      });

      // Draw items
      items.forEach((item) => {
        const x = item.x * w;
        const y = item.y * h + Math.sin(t * item.speed + item.x * 5) * item.amp;
        const rot = Math.sin(t * item.speed * 0.5 + item.y * 3) * 0.2;

        switch (item.type) {
          case "broccoli": drawBroccoli(x, y, item.size); break;
          case "tomato": drawTomato(x, y, item.size); break;
          case "avocado": drawAvocado(x, y, item.size, rot); break;
          case "pepper": drawPepper(x, y, item.size, rot, item.color || "yellow"); break;
          case "leaf": drawLeaf(x, y, item.size, rot + 0.3, ["#48bb78", "#276749"]); break;
          case "blueberry": drawBlueberry(x, y, item.size); break;
          case "dna": drawDNA(x, y, item.size, t * 0.6); break;
        }
      });

      // Orbiting dots ring
      ctx.save();
      ctx.globalAlpha = 0.2;
      for (let i = 0; i < 16; i++) {
        const angle = (i / 16) * Math.PI * 2 + t * 0.2;
        const rx = w * 0.5 + Math.cos(angle) * w * 0.4;
        const ry = h * 0.5 + Math.sin(angle) * h * 0.38;
        ctx.beginPath();
        ctx.arc(rx, ry, 3, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? "#86efac" : "#fbbf24";
        ctx.fill();
      }
      ctx.restore();

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animId); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}
