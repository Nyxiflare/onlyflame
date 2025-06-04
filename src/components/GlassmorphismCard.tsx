
import React from 'react';
import { motion } from 'framer-motion';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true 
}) => {
  return (
    <motion.div
      className={`
        relative backdrop-blur-md bg-white/10 
        border border-white/20 rounded-xl
        shadow-2xl shadow-black/20
        ${className}
      `}
      whileHover={hoverEffect ? {
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)"
      } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary/20 via-transparent to-brand-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassmorphismCard;
