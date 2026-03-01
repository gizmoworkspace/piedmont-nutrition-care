"use client";

import { useEffect, useRef } from "react";

// Floating food/wellness illustration with gentle animations
export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    let t = 0;

    const resize = () => {
      const p = canvas.parentElement!;
      canvas.width = p.offsetWidth * 2;
      canvas.height = p.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.width / 2;
    const H = () => canvas.height / 2;

    // Helper: draw a leaf shape
    const drawLeaf = (cx: number, cy: number, size: number, angle: number, color: string) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.6, -size * 0.6, size * 0.6, size * 0.3, 0, size);
      ctx.bezierCurveTo(-size * 0.6, size * 0.3, -size * 0.6, -size * 0.6, 0, -size);
      ctx.fillStyle = color;
      ctx.fill();
      // Vein
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.8);
      ctx.lineTo(0, size * 0.7);
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();
    };

    // Helper: draw a circle fruit (tomato, berry, etc.)
    const drawFruit = (cx: number, cy: number, r: number, color: string, highlight: string) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r);
      grad.addColorStop(0, highlight);
      grad.addColorStop(1, color);
      ctx.fillStyle = grad;
      ctx.fill();
    };

    // Helper: draw broccoli
    const drawBroccoli = (cx: number, cy: number, size: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      // Stem
      ctx.beginPath();
      ctx.roundRect(-size * 0.12, size * 0.1, size * 0.24, size * 0.5, 4);
      ctx.fillStyle = "#5a8a4a";
      ctx.fill();
      // Florets
      const floretPositions = [
        [0, -size * 0.15, size * 0.28],
        [-size * 0.22, size * 0.0, size * 0.2],
        [size * 0.22, size * 0.0, size * 0.2],
        [-size * 0.1, -size * 0.3, size * 0.18],
        [size * 0.1, -size * 0.3, size * 0.18],
      ];
      floretPositions.forEach(([x, y, r]) => {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(x - r * 0.2, y - r * 0.2, r * 0.1, x, y, r);
        grad.addColorStop(0, "#7bc462");
        grad.addColorStop(1, "#3d7a32");
        ctx.fillStyle = grad;
        ctx.fill();
      });
      ctx.restore();
    };

    // Helper: draw avocado half
    const drawAvocado = (cx: number, cy: number, size: number, angle: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      // Outer
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.5, size * 0.7, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#4a7a3a";
      ctx.fill();
      // Inner flesh
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.38, size * 0.55, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#c5d97a";
      ctx.fill();
      // Pit
      ctx.beginPath();
      ctx.arc(0, size * 0.05, size * 0.18, 0, Math.PI * 2);
      const pitGrad = ctx.createRadialGradient(-size * 0.05, 0, size * 0.02, 0, size * 0.05, size * 0.18);
      pitGrad.addColorStop(0, "#b8885a");
      pitGrad.addColorStop(1, "#7a5530");
      ctx.fillStyle = pitGrad;
      ctx.fill();
      ctx.restore();
    };

    // Helper: DNA/molecule helix
    const drawMolecule = (cx: number, cy: number, size: number, phase: number) => {
      ctx.save();
      ctx.globalAlpha = 0.3;
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + phase;
        const x = cx + Math.cos(angle) * size;
        const y = cy + Math.sin(angle) * size * 0.4 + (i - 4) * size * 0.15;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#86efac";
        ctx.fill();
        if (i > 0) {
          const prevAngle = ((i - 1) / 8) * Math.PI * 2 + phase;
          const px = cx + Math.cos(prevAngle) * size;
          const py = cy + Math.sin(prevAngle) * size * 0.4 + (i - 5) * size * 0.15;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(x, y);
          ctx.strokeStyle = "rgba(134,239,172,0.2)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      ctx.restore();
    };

    // Floating particles
    const particles = Array.from({ length: 25 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.3 + 0.1,
      alpha: Math.random() * 0.3 + 0.1,
    }));

    // Define food items with positions (relative 0-1)
    const items = [
      { type: "broccoli", x: 0.65, y: 0.25, size: 45, floatAmp: 8, floatSpeed: 0.8 },
      { type: "tomato", x: 0.4, y: 0.15, size: 18, floatAmp: 6, floatSpeed: 1.1 },
      { type: "tomato", x: 0.8, y: 0.6, size: 14, floatAmp: 5, floatSpeed: 0.9 },
      { type: "avocado", x: 0.55, y: 0.65, size: 35, floatAmp: 7, floatSpeed: 0.7 },
      { type: "leaf", x: 0.3, y: 0.4, size: 22, floatAmp: 10, floatSpeed: 1.3 },
      { type: "leaf", x: 0.75, y: 0.35, size: 18, floatAmp: 8, floatSpeed: 1.0 },
      { type: "leaf", x: 0.5, y: 0.8, size: 16, floatAmp: 9, floatSpeed: 1.2 },
      { type: "leaf", x: 0.85, y: 0.15, size: 14, floatAmp: 7, floatSpeed: 0.6 },
      { type: "berry", x: 0.35, y: 0.7, size: 8, floatAmp: 5, floatSpeed: 1.4 },
      { type: "berry", x: 0.7, y: 0.75, size: 7, floatAmp: 4, floatSpeed: 1.1 },
      { type: "berry", x: 0.45, y: 0.45, size: 9, floatAmp: 6, floatSpeed: 0.8 },
      { type: "molecule", x: 0.6, y: 0.45, size: 30, floatAmp: 4, floatSpeed: 0.5 },
      { type: "molecule", x: 0.3, y: 0.25, size: 25, floatAmp: 3, floatSpeed: 0.6 },
      { type: "pepper", x: 0.82, y: 0.45, size: 20, floatAmp: 6, floatSpeed: 0.9 },
    ];

    const draw = () => {
      const w = W();
      const h = H();
      ctx.clearRect(0, 0, w, h);
      t += 0.016;

      // Soft glow circles in background
      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.beginPath();
      ctx.arc(w * 0.6, h * 0.3, 120 + Math.sin(t * 0.5) * 20, 0, Math.PI * 2);
      ctx.fillStyle = "#86efac";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(w * 0.4, h * 0.7, 100 + Math.sin(t * 0.7) * 15, 0, Math.PI * 2);
      ctx.fillStyle = "#fbbf24";
      ctx.fill();
      ctx.restore();

      // Floating particles
      particles.forEach((p) => {
        const px = p.x * w;
        const py = ((p.y * h + t * p.speed * 50) % (h + 20)) - 10;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(134,239,172,${p.alpha})`;
        ctx.fill();
      });

      // Connection lines between nearby items
      ctx.save();
      ctx.globalAlpha = 0.06;
      ctx.strokeStyle = "#86efac";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
          const a = items[i], b = items[j];
          const dx = (a.x - b.x) * w;
          const dy = (a.y - b.y) * h;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const ay = a.y * h + Math.sin(t * a.floatSpeed) * a.floatAmp;
            const by = b.y * h + Math.sin(t * b.floatSpeed) * b.floatAmp;
            ctx.beginPath();
            ctx.moveTo(a.x * w, ay);
            ctx.lineTo(b.x * w, by);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // Draw food items
      items.forEach((item) => {
        const x = item.x * w;
        const baseY = item.y * h;
        const y = baseY + Math.sin(t * item.floatSpeed) * item.floatAmp;
        const rot = Math.sin(t * item.floatSpeed * 0.5) * 0.15;

        switch (item.type) {
          case "broccoli":
            drawBroccoli(x, y, item.size);
            break;
          case "tomato":
            drawFruit(x, y, item.size, "#c0392b", "#e74c3c");
            // Small stem
            ctx.beginPath();
            ctx.moveTo(x - 3, y - item.size);
            ctx.lineTo(x, y - item.size - 5);
            ctx.lineTo(x + 3, y - item.size);
            ctx.fillStyle = "#3d7a32";
            ctx.fill();
            break;
          case "avocado":
            drawAvocado(x, y, item.size, rot);
            break;
          case "leaf":
            drawLeaf(x, y, item.size, rot + Math.PI * 0.15, "rgba(74,160,60,0.7)");
            break;
          case "berry":
            drawFruit(x, y, item.size, "#6b21a8", "#9333ea");
            // Tiny highlight
            ctx.beginPath();
            ctx.arc(x - item.size * 0.3, y - item.size * 0.3, item.size * 0.2, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.3)";
            ctx.fill();
            break;
          case "molecule":
            drawMolecule(x, y, item.size, t * 0.8);
            break;
          case "pepper":
            // Bell pepper
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rot);
            ctx.beginPath();
            ctx.ellipse(0, 0, item.size * 0.5, item.size * 0.7, 0, 0, Math.PI * 2);
            const pepGrad = ctx.createRadialGradient(-item.size * 0.1, -item.size * 0.2, 2, 0, 0, item.size * 0.7);
            pepGrad.addColorStop(0, "#f59e0b");
            pepGrad.addColorStop(1, "#d97706");
            ctx.fillStyle = pepGrad;
            ctx.fill();
            // Stem
            ctx.beginPath();
            ctx.roundRect(-3, -item.size * 0.75, 6, item.size * 0.15, 2);
            ctx.fillStyle = "#3d7a32";
            ctx.fill();
            ctx.restore();
            break;
        }
      });

      // Orbiting ring of tiny dots
      ctx.save();
      ctx.globalAlpha = 0.15;
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + t * 0.3;
        const rx = w * 0.55 + Math.cos(angle) * w * 0.35;
        const ry = h * 0.5 + Math.sin(angle) * h * 0.35;
        ctx.beginPath();
        ctx.arc(rx, ry, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#86efac";
        ctx.fill();
      }
      ctx.restore();

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
