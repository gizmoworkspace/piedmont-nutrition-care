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

    // Leaf
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
      // Vein
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.7);
      ctx.lineTo(0, size * 0.6);
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();
    };

    // Small tomato
    const drawTomato = (x: number, y: number, size: number, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      const g = ctx.createRadialGradient(x - size * 0.3, y - size * 0.3, size * 0.1, x, y, size);
      g.addColorStop(0, "#ff6b6b");
      g.addColorStop(1, "#c53030");
      ctx.fillStyle = g;
      ctx.fill();
      // Stem
      ctx.beginPath();
      ctx.moveTo(x - 3, y - size * 0.9);
      ctx.lineTo(x, y - size * 1.15);
      ctx.lineTo(x + 3, y - size * 0.9);
      ctx.fillStyle = "#38a169";
      ctx.fill();
      ctx.restore();
    };

    // Small avocado half
    const drawAvocado = (x: number, y: number, size: number, angle: number, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.5, size * 0.7, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#2d6a30";
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.38, size * 0.55, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#c5d97a";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, size * 0.05, size * 0.17, 0, Math.PI * 2);
      ctx.fillStyle = "#7a5530";
      ctx.fill();
      ctx.restore();
    };

    // Small broccoli
    const drawBroccoli = (x: number, y: number, size: number, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y);
      // Stem
      ctx.beginPath();
      ctx.roundRect(-size * 0.08, size * 0.1, size * 0.16, size * 0.3, 3);
      ctx.fillStyle = "#5a8a4a";
      ctx.fill();
      // Florets
      [[0, -size * 0.1, size * 0.22], [-size * 0.16, 0.02, size * 0.16], [size * 0.16, 0.02, size * 0.16], [0, -size * 0.25, size * 0.14]].forEach(([fx, fy, fr]) => {
        ctx.beginPath();
        ctx.arc(fx, fy, fr, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(fx - fr * 0.2, fy - fr * 0.2, fr * 0.1, fx, fy, fr);
        g.addColorStop(0, "#68d391");
        g.addColorStop(1, "#2f855a");
        ctx.fillStyle = g;
        ctx.fill();
      });
      ctx.restore();
    };

    // A few scattered leaf icons - concentrated bottom-right, fading toward top-left
    const leaves = [
      { x: 0.93, y: 0.88, size: 36, angle: 0.3, baseAlpha: 0.38 },
      { x: 0.75, y: 0.93, size: 30, angle: -0.5, baseAlpha: 0.33 },
      { x: 0.86, y: 0.65, size: 28, angle: 0.8, baseAlpha: 0.28 },
      { x: 0.95, y: 0.5, size: 24, angle: -0.2, baseAlpha: 0.24 },
      { x: 0.65, y: 0.8, size: 26, angle: 1.2, baseAlpha: 0.25 },
      { x: 0.58, y: 0.62, size: 20, angle: 0.6, baseAlpha: 0.18 },
      { x: 0.82, y: 0.42, size: 18, angle: -0.8, baseAlpha: 0.16 },
      { x: 0.5, y: 0.87, size: 22, angle: 0.4, baseAlpha: 0.20 },
      { x: 0.9, y: 0.3, size: 16, angle: 1.0, baseAlpha: 0.14 },
      { x: 0.45, y: 0.52, size: 14, angle: -0.3, baseAlpha: 0.10 },
      { x: 0.78, y: 0.22, size: 14, angle: 0.7, baseAlpha: 0.10 },
      { x: 0.42, y: 0.72, size: 18, angle: -0.6, baseAlpha: 0.15 },
    ];

    // Dot grid texture - denser bottom-right, sparse top-left
    const dots: { x: number; y: number; r: number; baseAlpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      const x = Math.random();
      const y = Math.random();
      // Weight toward bottom-right
      const dist = Math.sqrt((1 - x) ** 2 + (1 - y) ** 2); // 0 = bottom-right, ~1.4 = top-left
      const prob = Math.max(0, 1 - dist * 1.2);
      if (Math.random() < prob + 0.1) {
        dots.push({
          x, y,
          r: Math.random() * 2 + 0.8,
          baseAlpha: Math.max(0.05, prob * 0.2),
        });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, cw, ch);
      t += 0.008;

      // Subtle gradient glow from bottom-right corner
      const grad = ctx.createRadialGradient(cw * 0.95, ch * 0.95, 0, cw * 0.85, ch * 0.85, cw * 0.6);
      grad.addColorStop(0, "rgba(72, 187, 120, 0.15)");
      grad.addColorStop(0.5, "rgba(72, 187, 120, 0.06)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, cw, ch);

      // Second subtle warm glow
      const grad2 = ctx.createRadialGradient(cw * 0.85, ch * 0.8, 0, cw * 0.8, ch * 0.75, cw * 0.35);
      grad2.addColorStop(0, "rgba(251, 191, 36, 0.08)");
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

      // Leaf icons
      leaves.forEach((l) => {
        const bob = Math.sin(t * 0.8 + l.x * 5) * 3;
        const rot = l.angle + Math.sin(t * 0.5 + l.y * 4) * 0.1;
        drawLeaf(l.x * cw, l.y * ch + bob, l.size, rot, l.baseAlpha);
      });

      // Mini nutrition charts - bottom-right area
      const bob = (seed: number) => Math.sin(t * 0.6 + seed) * 3;

      // Bar chart
      const drawBarChart = (cx: number, cy: number, size: number, alpha: number) => {
        ctx.save();
        ctx.globalAlpha = alpha;
        const barW = size * 0.15;
        const gap = size * 0.22;
        const heights = [0.5, 0.8, 0.6, 0.9, 0.7];
        const colors = ["#48bb78", "#68d391", "#38a169", "#86efac", "#48bb78"];
        heights.forEach((h, i) => {
          const x = cx - (heights.length * gap) / 2 + i * gap;
          const barH = size * h;
          ctx.beginPath();
          ctx.roundRect(x, cy - barH, barW, barH, 2);
          ctx.fillStyle = colors[i];
          ctx.fill();
        });
        // Baseline
        ctx.beginPath();
        ctx.moveTo(cx - size * 0.6, cy);
        ctx.lineTo(cx + size * 0.6, cy);
        ctx.strokeStyle = "rgba(134,239,172,0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      };

      // Pie/donut chart
      const drawDonut = (cx: number, cy: number, r: number, alpha: number) => {
        ctx.save();
        ctx.globalAlpha = alpha;
        const segments = [0.35, 0.25, 0.22, 0.18];
        const colors = ["#48bb78", "#86efac", "#fbbf24", "#38a169"];
        let startAngle = -Math.PI / 2 + t * 0.15;
        segments.forEach((seg, i) => {
          const endAngle = startAngle + seg * Math.PI * 2;
          ctx.beginPath();
          ctx.arc(cx, cy, r, startAngle, endAngle);
          ctx.arc(cx, cy, r * 0.55, endAngle, startAngle, true);
          ctx.closePath();
          ctx.fillStyle = colors[i];
          ctx.fill();
          startAngle = endAngle;
        });
        ctx.restore();
      };

      // Line chart
      const drawLineChart = (cx: number, cy: number, size: number, alpha: number) => {
        ctx.save();
        ctx.globalAlpha = alpha;
        const points = [0.7, 0.4, 0.6, 0.2, 0.35, 0.15];
        ctx.beginPath();
        points.forEach((p, i) => {
          const x = cx - size * 0.5 + (i / (points.length - 1)) * size;
          const y = cy - size * 0.3 + p * size * 0.6;
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        });
        ctx.strokeStyle = "#86efac";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
        // Dots at points
        points.forEach((p, i) => {
          const x = cx - size * 0.5 + (i / (points.length - 1)) * size;
          const y = cy - size * 0.3 + p * size * 0.6;
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "#86efac";
          ctx.fill();
        });
        // Baseline
        ctx.beginPath();
        ctx.moveTo(cx - size * 0.55, cy + size * 0.2);
        ctx.lineTo(cx + size * 0.55, cy + size * 0.2);
        ctx.strokeStyle = "rgba(134,239,172,0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      };

      // White paper chart cards
      const drawChartCard = (cx: number, cy: number, w: number, h: number, alpha: number, drawContent: (x: number, y: number, w: number, h: number) => void) => {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(cx, cy);
        // Card shadow
        ctx.shadowColor = "rgba(0,0,0,0.15)";
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 4;
        // White card
        ctx.beginPath();
        ctx.roundRect(-w / 2, -h / 2, w, h, 8);
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.fill();
        ctx.shadowColor = "transparent";
        // Content area
        drawContent(-w / 2, -h / 2, w, h);
        ctx.restore();
      };

      // Card 1: Bar chart with title + grid
      drawChartCard(cw * 0.82, ch * 0.78 + bob(1), 120, 90, 0.3, (x, y, w, h) => {
        // Title bar
        ctx.beginPath();
        ctx.roundRect(x + 10, y + 8, w * 0.5, 6, 3);
        ctx.fillStyle = "#cbd5e0";
        ctx.fill();
        // Subtitle
        ctx.beginPath();
        ctx.roundRect(x + 10, y + 18, w * 0.35, 4, 2);
        ctx.fillStyle = "#e2e8f0";
        ctx.fill();
        // Grid lines
        for (let i = 0; i < 4; i++) {
          const gy = y + 32 + i * 13;
          ctx.beginPath();
          ctx.moveTo(x + 10, gy);
          ctx.lineTo(x + w - 10, gy);
          ctx.strokeStyle = "#f0f0f0";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
        // Bars
        const barData = [0.5, 0.8, 0.6, 0.9, 0.7, 0.85];
        const barW = 10;
        const barGap = (w - 30) / barData.length;
        const maxH = 40;
        barData.forEach((v, i) => {
          const bx = x + 15 + i * barGap;
          const bh = maxH * v;
          ctx.beginPath();
          ctx.roundRect(bx, y + h - 15 - bh, barW, bh, 2);
          ctx.fillStyle = i === 3 ? "#48bb78" : "#c6f6d5";
          ctx.fill();
        });
      });

      // Card 2: Line chart with area fill
      drawChartCard(cw * 0.62, ch * 0.58 + bob(2), 130, 95, 0.25, (x, y, w, h) => {
        // Title
        ctx.beginPath();
        ctx.roundRect(x + 10, y + 8, w * 0.45, 6, 3);
        ctx.fillStyle = "#cbd5e0";
        ctx.fill();
        ctx.beginPath();
        ctx.roundRect(x + 10, y + 18, w * 0.3, 4, 2);
        ctx.fillStyle = "#e2e8f0";
        ctx.fill();
        // Big number
        ctx.font = "bold 16px system-ui";
        ctx.fillStyle = "#2d3748";
        ctx.fillText("87%", x + w - 42, y + 18);
        // Grid
        for (let i = 0; i < 3; i++) {
          const gy = y + 35 + i * 16;
          ctx.beginPath();
          ctx.moveTo(x + 10, gy); ctx.lineTo(x + w - 10, gy);
          ctx.strokeStyle = "#f0f0f0"; ctx.lineWidth = 0.5; ctx.stroke();
        }
        // Line + area
        const pts = [0.6, 0.45, 0.55, 0.3, 0.2, 0.15, 0.1];
        const chartX = x + 12;
        const chartW = w - 24;
        const chartY = y + 32;
        const chartH = 48;
        ctx.beginPath();
        pts.forEach((p, i) => {
          const px = chartX + (i / (pts.length - 1)) * chartW;
          const py = chartY + p * chartH;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        });
        ctx.strokeStyle = "#48bb78";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.stroke();
        // Area fill
        ctx.lineTo(chartX + chartW, chartY + chartH);
        ctx.lineTo(chartX, chartY + chartH);
        ctx.closePath();
        ctx.fillStyle = "rgba(72,187,120,0.1)";
        ctx.fill();
        // Dots
        pts.forEach((p, i) => {
          const px = chartX + (i / (pts.length - 1)) * chartW;
          const py = chartY + p * chartH;
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "#48bb78";
          ctx.fill();
        });
      });

      // Card 3: Donut + stats (smaller, higher up)
      drawChartCard(cw * 0.9, ch * 0.42 + bob(3), 100, 80, 0.2, (x, y, w, h) => {
        // Title
        ctx.beginPath();
        ctx.roundRect(x + 10, y + 8, w * 0.55, 5, 3);
        ctx.fillStyle = "#cbd5e0";
        ctx.fill();
        // Donut
        const dcx = x + 35;
        const dcy = y + 48;
        const dr = 18;
        const segs = [0.4, 0.25, 0.2, 0.15];
        const cols = ["#48bb78", "#86efac", "#fbbf24", "#c6f6d5"];
        let sa = -Math.PI / 2;
        segs.forEach((s, i) => {
          const ea = sa + s * Math.PI * 2;
          ctx.beginPath();
          ctx.arc(dcx, dcy, dr, sa, ea);
          ctx.arc(dcx, dcy, dr * 0.55, ea, sa, true);
          ctx.closePath();
          ctx.fillStyle = cols[i];
          ctx.fill();
          sa = ea;
        });
        // Stats lines on right
        for (let i = 0; i < 3; i++) {
          const sy = y + 30 + i * 16;
          ctx.beginPath();
          ctx.roundRect(x + 60, sy, 6, 6, 2);
          ctx.fillStyle = cols[i];
          ctx.fill();
          ctx.beginPath();
          ctx.roundRect(x + 70, sy + 1, 18, 4, 2);
          ctx.fillStyle = "#e2e8f0";
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animId); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}
