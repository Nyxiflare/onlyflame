
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Clock, TrendingUp } from 'lucide-react';

const LiveTokenTracker = () => {
  const [spotsLeft, setSpotsLeft] = useState(47);
  const [tokenSupply, setTokenSupply] = useState(1000000);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 6,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const NumberRoll = ({ number, suffix = '' }: { number: number; suffix?: string }) => (
    <motion.span
      key={number}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="inline-block"
    >
      {number.toLocaleString()}{suffix}
    </motion.span>
  );

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-white">
      {/* Spots Left */}
      <motion.div 
        className="flex items-center space-x-2 bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/30 rounded-full px-4 py-2"
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Flame className="w-4 h-4 text-red-400 animate-pulse" />
        <span className="text-sm font-semibold">
          <NumberRoll number={spotsLeft} suffix=" spots left" />
        </span>
      </motion.div>

      {/* Token Supply */}
      <motion.div 
        className="flex items-center space-x-2 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 rounded-full px-4 py-2"
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249, 115, 22, 0.5)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <TrendingUp className="w-4 h-4 text-brand-primary animate-bounce" />
        <span className="text-sm font-semibold">
          $FLAME: <NumberRoll number={tokenSupply} />
        </span>
      </motion.div>

      {/* Countdown Timer */}
      <motion.div 
        className="flex items-center space-x-2 bg-gradient-to-r from-brand-success/20 to-green-500/20 border border-brand-success/30 rounded-full px-4 py-2"
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Clock className="w-4 h-4 text-brand-success animate-spin" style={{ animationDuration: '3s' }} />
        <span className="text-sm font-semibold">
          Next drop: <NumberRoll number={timeLeft.days} suffix="d " />
          <NumberRoll number={timeLeft.hours} suffix="h " />
          <NumberRoll number={timeLeft.minutes} suffix="m " />
          <NumberRoll number={timeLeft.seconds} suffix="s" />
        </span>
      </motion.div>
    </div>
  );
};

export default LiveTokenTracker;
