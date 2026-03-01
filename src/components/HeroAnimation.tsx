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

    // Simple leaf icon (small, subtle)
    const drawLeaf = (x: number, y: number, size: number, angle: number, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.6, -size * 0.4, size * 0.5, size * 0.3, 0, size);
      ctx.bezierCurveTo(-size * 0.5, size * 0.3, -size * 0.6, -size * 0.4, 0, -size);
      ctx.fillStyle = "#48bb78";
      ctx.fill();
      ctx.restore();
    };

    // A few scattered leaf icons - concentrated bottom-right, fading toward top-left
    const leaves = [
      { x: 0.92, y: 0.88, size: 18, angle: 0.3, baseAlpha: 0.18 },
      { x: 0.78, y: 0.92, size: 14, angle: -0.5, baseAlpha: 0.15 },
      { x: 0.85, y: 0.72, size: 12, angle: 0.8, baseAlpha: 0.12 },
      { x: 0.95, y: 0.65, size: 10, angle: -0.2, baseAlpha: 0.10 },
      { x: 0.7, y: 0.82, size: 11, angle: 1.2, baseAlpha: 0.10 },
      { x: 0.65, y: 0.7, size: 8, angle: 0.6, baseAlpha: 0.07 },
    ];

    // Dot grid texture - denser bottom-right, sparse top-left
    const dots: { x: number; y: number; r: number; baseAlpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      const x = Math.random();
      const y = Math.random();
      // Weight toward bottom-right
      const dist = Math.sqrt((1 - x) ** 2 + (1 - y) ** 2); // 0 = bottom-right, ~1.4 = top-left
      const prob = Math.max(0, 1 - dist * 1.2);
      if (Math.random() < prob + 0.05) {
        dots.push({
          x, y,
          r: Math.random() * 1.5 + 0.5,
          baseAlpha: Math.max(0.03, prob * 0.12),
        });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, cw, ch);
      t += 0.008;

      // Subtle gradient glow from bottom-right corner
      const grad = ctx.createRadialGradient(cw * 0.95, ch * 0.95, 0, cw * 0.85, ch * 0.85, cw * 0.6);
      grad.addColorStop(0, "rgba(72, 187, 120, 0.08)");
      grad.addColorStop(0.5, "rgba(72, 187, 120, 0.03)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, cw, ch);

      // Second subtle warm glow
      const grad2 = ctx.createRadialGradient(cw * 0.85, ch * 0.8, 0, cw * 0.8, ch * 0.75, cw * 0.35);
      grad2.addColorStop(0, "rgba(251, 191, 36, 0.04)");
      grad2.addColorStop(1, "transparent");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, cw, ch);

      // Dot texture
      dots.forEach((d) => {
        const pulse = 1 + Math.sin(t * 2 + d.x * 10 + d.y * 10) * 0.3;
        ctx.beginPath();
        ctx.arc(d.x * cw, d.y * ch, d.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(134, 239, 172, ${d.baseAlpha * pulse})`;
        ctx.fill();
      });

      // Subtle leaf icons
      leaves.forEach((l) => {
        const bob = Math.sin(t * 0.8 + l.x * 5) * 3;
        const rot = l.angle + Math.sin(t * 0.5 + l.y * 4) * 0.1;
        drawLeaf(l.x * cw, l.y * ch + bob, l.size, rot, l.baseAlpha);
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animId); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}
