
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface EnhancedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md'
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const createRipple = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    if (onClick) onClick();
  };

  const baseClasses = 'relative overflow-hidden rounded-full font-semibold transition-all duration-300 transform';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg hover:shadow-brand-primary/50',
    secondary: 'bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={createRipple}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'primary' 
          ? "0 20px 40px -12px rgba(249, 115, 22, 0.4)" 
          : "0 10px 30px -12px rgba(255, 255, 255, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="relative z-10 flex items-center justify-center gap-2"
        animate={{
          filter: variant === 'primary' ? ["brightness(1)", "brightness(1.1)", "brightness(1)"] : "brightness(1)"
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
      
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: 50,
            height: 50,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
    </motion.button>
  );
};

export default EnhancedButton;
