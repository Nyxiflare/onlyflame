
import React, { useEffect, useRef } from 'react';

interface Coin {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

const FloatingCoins: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const coinsRef = useRef<Coin[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize coins
    const initCoins = () => {
      coinsRef.current = [];
      const coinCount = Math.floor((window.innerWidth * window.innerHeight) / 50000);
      
      for (let i = 0; i < coinCount; i++) {
        coinsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 8 + 4,
          speed: Math.random() * 0.5 + 0.2,
          opacity: Math.random() * 0.3 + 0.1,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02
        });
      }
    };

    const drawCoin = (coin: Coin) => {
      ctx.save();
      ctx.globalAlpha = coin.opacity;
      ctx.translate(coin.x, coin.y);
      ctx.rotate(coin.rotation);
      
      // Create gradient for coin
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, coin.size);
      gradient.addColorStop(0, '#F97316');
      gradient.addColorStop(0.5, '#EA580C');
      gradient.addColorStop(1, '#C2410C');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, coin.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add inner glow
      ctx.strokeStyle = '#FB923C';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Add flame symbol
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${coin.size * 0.8}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🔥', 0, 0);
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      coinsRef.current.forEach(coin => {
        // Update position
        coin.y -= coin.speed;
        coin.rotation += coin.rotationSpeed;
        
        // Reset coin if it goes off screen
        if (coin.y < -coin.size) {
          coin.y = canvas.height + coin.size;
          coin.x = Math.random() * canvas.width;
        }
        
        drawCoin(coin);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    initCoins();
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default FloatingCoins;
