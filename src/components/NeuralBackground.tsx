'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };
    
    // Config
    const isDark = resolvedTheme !== 'light';
    const bgFill = isDark ? '#050505' : '#f0f0f5';
    const pColorBase = isDark ? 'rgba(140, 100, 255, ' : 'rgba(100, 80, 220, ';
    const linkColorBase = isDark ? 'rgba(140, 100, 255, ' : 'rgba(100, 80, 220, ';
    
    const maxLinkDist = 120;
    const mouseInfluence = 150;
    
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      depth: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.depth = Math.random();
        this.radius = this.depth * 2 + 0.5; // 0.5 to 2.5
      }

      update() {
        if (!canvas) return;
        this.x += this.vx * (this.depth + 0.2);
        this.y += this.vy * (this.depth + 0.2);

        // Bounds
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseInfluence) {
          const force = (mouseInfluence - dist) / mouseInfluence;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = pColorBase + (this.depth * 0.5 + 0.2) + ')';
        ctx.fill();
        
        // Slight glow for closer particles
        if (this.depth > 0.7 && isDark) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = pColorBase + '0.8)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 200);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
      }
    };

    const drawLinks = () => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLinkDist) {
            const opacity = (1 - dist / maxLinkDist) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = linkColorBase + opacity + ')';
            ctx.lineWidth = particles[i].depth * 0.5 + 0.2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = bgFill;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      drawLinks();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    let timeout: ReturnType<typeof setTimeout>;
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      clearTimeout(timeout);
      // Soft reset mouse after a while of inactivity
      timeout = setTimeout(() => {
        mouse.x = -1000;
        mouse.y = -1000;
      }, 1000);
    };
    
    // Performance: Don't run animation if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      ctx.fillStyle = bgFill;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return;
    }

    init();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ display: 'block' }}
    />
  );
}
