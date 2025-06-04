
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface FlameAnimationProps {
  mouseX: number;
  mouseY: number;
  isHovered: boolean;
}

const FlameAnimation: React.FC<FlameAnimationProps> = ({ mouseX, mouseY, isHovered }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 100;
    canvas.height = 100;

    let animationId: number;
    
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }> = [];

    const createParticle = () => {
      particles.push({
        x: 50 + (Math.random() - 0.5) * 20,
        y: 90,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 3 - 1,
        life: 1,
        maxLife: Math.random() * 30 + 20
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create new particles
      if (Math.random() < 0.3) createParticle();
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Update position
        p.x += p.vx + (mouseX - 50) * 0.1;
        p.y += p.vy;
        p.life--;
        
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        
        // Draw particle
        const alpha = p.life / p.maxLife;
        const size = alpha * (isHovered ? 8 : 5);
        
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
        gradient.addColorStop(0, `rgba(255, ${100 + alpha * 155}, 0, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(255, ${50 + alpha * 100}, 0, ${alpha * 0.8})`);
        gradient.addColorStop(1, `rgba(255, 0, 0, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [mouseX, mouseY, isHovered]);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        filter: isHovered ? 'brightness(1.5)' : 'brightness(1)',
        transition: 'filter 0.3s ease'
      }}
    />
  );
};

export default FlameAnimation;
