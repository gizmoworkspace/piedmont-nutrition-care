"use client";

import { useEffect, useRef } from "react";

interface BackgroundTextureProps {
  variant?: "particles" | "grid";
  color?: string;
  opacity?: number;
  className?: string;
}

export default function BackgroundTexture({
  variant = "particles",
  color = "rgba(106, 168, 79, 0.4)",
  opacity = 1,
  className = "",
}: BackgroundTextureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    if (variant === "particles") {
      const count = Math.min(40, Math.floor((canvas.width * canvas.height) / 25000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      }));

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw particles
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap around
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = color.replace(/[\d.]+\)$/, `${p.alpha})`);
          ctx.fill();
        }

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = color.replace(/[\d.]+\)$/, `${0.08 * (1 - dist / 150)})`);
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }

        animationId = requestAnimationFrame(draw);
      };

      draw();
    } else {
      // Grid variant — subtle moving grid
      let offset = 0;
      const spacing = 60;

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        offset += 0.15;

        const gridColor = color.replace(/[\d.]+\)$/, "0.06)");
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 0.5;

        // Vertical lines
        for (let x = (offset % spacing) - spacing; x < canvas.width + spacing; x += spacing) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }

        // Horizontal lines
        for (let y = (offset * 0.5 % spacing) - spacing; y < canvas.height + spacing; y += spacing) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        // Intersection dots
        const dotColor = color.replace(/[\d.]+\)$/, "0.15)");
        for (let x = (offset % spacing) - spacing; x < canvas.width + spacing; x += spacing) {
          for (let y = (offset * 0.5 % spacing) - spacing; y < canvas.height + spacing; y += spacing) {
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = dotColor;
            ctx.fill();
          }
        }

        animationId = requestAnimationFrame(draw);
      };

      draw();
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [variant, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    />
  );
}
