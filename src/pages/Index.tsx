import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Zap, Heart, Coins, Shield, Trophy, Star, User, Rocket, Check, Twitter, Instagram, MessageCircle, Send } from 'lucide-react';
import FlameAnimation from '../components/FlameAnimation';
import LiveTokenTracker from '../components/LiveTokenTracker';
import TypingAnimation from '../components/TypingAnimation';
import GlassmorphismCard from '../components/GlassmorphismCard';
import FloatingCoins from '../components/FloatingCoins';
import PageLoader from '../components/PageLoader';
import ScrollReveal from '../components/ScrollReveal';
import EnhancedButton from '../components/EnhancedButton';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: comparisonRef, inView: comparisonInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: stepsRef, inView: stepsInView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (isLoaded) {
      setIsVisible(true);
      
      const handleMouseMove = (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isLoaded]);

  const benefits = [
    {
      title: "Keep 100% of Earnings",
      description: "No platform fees. Every dollar goes directly to you.",
      icon: DollarSign,
      color: "text-brand-primary"
    },
    {
      title: "Instant Crypto Payments",
      description: "Get paid instantly in crypto, no waiting periods.",
      icon: Zap,
      color: "text-brand-secondary"
    },
    {
      title: "Fan Ownership",
      description: "Your fans own tokens, creating deeper engagement.",
      icon: Heart,
      color: "text-brand-accent"
    },
    {
      title: "Token Economy",
      description: "Create your own economy with custom tokenomics.",
      icon: Coins,
      color: "text-brand-warning"
    },
    {
      title: "You Own Everything",
      description: "Complete control over your content and community.",
      icon: Shield,
      color: "text-brand-success"
    },
    {
      title: "Early Creator Rewards",
      description: "Exclusive benefits for pioneering creators.",
      icon: Trophy,
      color: "text-yellow-400"
    }
  ];

  const comparison = [
    { feature: "Platform Cut", onlyfans: "20%", onlyflame: "0%" },
    { feature: "Payouts", onlyfans: "7+ days", onlyflame: "Instant" },
    { feature: "Economy Control", onlyfans: "Platform-owned", onlyflame: "You own it" },
    { feature: "Fan Incentives", onlyfans: "Limited", onlyflame: "Token ownership" },
    { feature: "Content Control", onlyfans: "Platform rules", onlyflame: "Your rules" },
    { feature: "Growth Potential", onlyfans: "Capped", onlyflame: "Unlimited" }
  ];

  const steps = [
    {
      title: "Apply & Get Approved",
      description: "Submit your application and get approved for our exclusive program.",
      icon: Star,
      color: "text-brand-primary"
    },
    {
      title: "Onboarding Call",
      description: "Personal consultation to design your token strategy.",
      icon: User,
      color: "text-brand-secondary"
    },
    {
      title: "Launch Your Token",
      description: "We'll help you launch your token with full technical support.",
      icon: Rocket,
      color: "text-brand-accent"
    },
    {
      title: "Earn & Scale",
      description: "Start earning instantly and scale your creator economy.",
      icon: DollarSign,
      color: "text-brand-warning"
    }
  ];

  const benefits_list = [
    "$FLAME token airdrop",
    "Token launch assistance",
    "Marketing support",
    "Personal onboarding call",
    "0% platform fees",
    "Creator community access"
  ];

  const typingTexts = [
    "Own your audience.",
    "Launch your token.", 
    "Get paid in crypto.",
    "Build your empire."
  ];

  const RippleButton = ({ children, className, onClick, ...props }: any) => {
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
      
      if (onClick) onClick(e);
    };

    return (
      <motion.button
        className={`relative overflow-hidden ${className}`}
        onClick={createRipple}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
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

  return (
    <>
      <PageLoader onLoadComplete={() => setIsLoaded(true)} />
      
      {isLoaded && (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black font-inter overflow-x-hidden relative">
          <FloatingCoins />
          
          {/* Header with enhanced animations */}
          <motion.header 
            className="sticky top-0 z-50 bg-gradient-to-r from-gray-900/90 via-gray-800/30 to-gray-900/90 backdrop-blur-sm border-b border-orange-500/20"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <motion.div 
                  className="flex items-center space-x-3 relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
                  onMouseEnter={() => setIsLogoHovered(true)}
                  onMouseLeave={() => setIsLogoHovered(false)}
                >
                  <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-2 hover:scale-110 transition-transform duration-300">
                    <FlameAnimation 
                      mouseX={mousePos.x} 
                      mouseY={mousePos.y} 
                      isHovered={isLogoHovered} 
                    />
                    <img 
                      src="/lovable-uploads/fe68abea-d36f-4339-8a82-66b2672c4756.png" 
                      alt="OnlyFlame Logo" 
                      className="w-full h-full object-contain relative z-10"
                    />
                  </div>
                  <span className="text-2xl font-bold text-white">OnlyFlame</span>
                </motion.div>
                
                <nav className="hidden md:flex items-center space-x-8">
                  {['Home', 'Benefits', 'How It Works'].map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-white hover:text-brand-primary transition-colors relative group"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <EnhancedButton
                      onClick={() => window.open('https://creators.onlyflame.live/', '_blank')}
                      size="sm"
                    >
                      Apply Now
                    </EnhancedButton>
                  </motion.div>
                </nav>
              </div>
            </div>
          </motion.header>

          {/* Hero Section with enhanced animations */}
          <section ref={heroRef} id="home" className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-transparent to-brand-primary/10"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-success bg-clip-text text-transparent leading-tight">
                  <TypingAnimation 
                    texts={typingTexts}
                    className="block"
                  />
                </h1>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.4}>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  OnlyFlame helps adult content creators launch on-chain tokens, earn from fans, and control their economy — no crypto knowledge needed.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.6}>
                <div className="mb-8">
                  <LiveTokenTracker />
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.8}>
                <div className="flex flex-col items-center space-y-4">
                  <EnhancedButton
                    onClick={() => window.open('https://creators.onlyflame.live/', '_blank')}
                    size="lg"
                    className="animate-glow-pulse"
                  >
                    <img 
                      src="/lovable-uploads/fe68abea-d36f-4339-8a82-66b2672c4756.png" 
                      alt="Flame" 
                      className="w-5 h-5"
                    />
                    Apply Now
                  </EnhancedButton>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Benefits Section with staggered animations */}
          <section ref={benefitsRef} id="benefits" className="py-20 relative z-10">
            <div className="container mx-auto px-4">
              <ScrollReveal direction="up">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                  Why Choose OnlyFlame
                </h2>
              </ScrollReveal>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                    <GlassmorphismCard className="group h-full">
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        <motion.div 
                          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 mb-4 mx-auto"
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.3)"
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                        <p className="text-gray-400 flex-1">{benefit.description}</p>
                      </CardContent>
                    </GlassmorphismCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Comparison Section with enhanced animations */}
          <section className="py-20 bg-gradient-to-r from-orange-900/10 to-black/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">OnlyFans vs OnlyFlame</h2>
                <p className="text-xl text-gray-300">See why creators are making the switch.</p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-gray-800/50 to-orange-900/30 rounded-lg overflow-hidden border border-orange-500/30">
                  <div className="grid grid-cols-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold">
                    <div className="p-4 text-center">Feature</div>
                    <div className="p-4 text-center border-l border-white/20">OnlyFans</div>
                    <div className="p-4 text-center border-l border-white/20">OnlyFlame</div>
                  </div>
                  
                  {comparison.map((item, index) => (
                    <div 
                      key={index} 
                      className={`grid grid-cols-3 border-t border-orange-500/20 animate-fade-in-up`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="p-4 text-white font-medium">{item.feature}</div>
                      <div className="p-4 text-red-400 border-l border-orange-500/20">{item.onlyfans}</div>
                      <div className="p-4 text-brand-success border-l border-orange-500/20 font-semibold">{item.onlyflame}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section with enhanced animations */}
          <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
                <p className="text-xl text-gray-300">From application to earning – we guide you every step of the way.</p>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {steps.map((step, index) => (
                    <div 
                      key={index} 
                      className={`text-center group animate-fade-in-up`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-orange-900 mb-6 group-hover:scale-110 transition-all duration-300 border-2 border-orange-500/30 group-hover:border-brand-primary/50`}>
                        <step.icon className={`w-10 h-10 ${step.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section with enhanced animation */}
          <section className="py-20 bg-gradient-to-r from-brand-primary/10 via-orange-900/20 to-brand-secondary/10 relative z-10">
            <div className="container mx-auto px-4 text-center">
              <ScrollReveal direction="up">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Creator Economy?
                </h2>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join OnlyFlame's exclusive creator program and launch your personal token. We'll guide you through every step of the process.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.4}>
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    {benefits_list.map((benefit, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 text-brand-success flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.6}>
                <EnhancedButton
                  onClick={() => window.open('https://creators.onlyflame.live/', '_blank')}
                  size="lg"
                  className="animate-glow-pulse"
                >
                  <img 
                    src="/lovable-uploads/fe68abea-d36f-4339-8a82-66b2672c4756.png" 
                    alt="Flame" 
                    className="w-5 h-5"
                  />
                  Start Application
                </EnhancedButton>
              </ScrollReveal>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 bg-black/80 border-t border-orange-500/20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-3 mb-6 md:mb-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-1.5">
                    <img 
                      src="/lovable-uploads/fe68abea-d36f-4339-8a82-66b2672c4756.png" 
                      alt="OnlyFlame Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold text-white">OnlyFlame</span>
                </div>
                
                <div className="flex items-center space-x-6 mb-6 md:mb-0">
                  <Twitter className="w-6 h-6 text-gray-400 hover:text-brand-primary transition-colors cursor-pointer hover:scale-110 duration-300" />
                  <Instagram className="w-6 h-6 text-gray-400 hover:text-brand-primary transition-colors cursor-pointer hover:scale-110 duration-300" />
                  <MessageCircle className="w-6 h-6 text-gray-400 hover:text-brand-primary transition-colors cursor-pointer hover:scale-110 duration-300" />
                  <Send className="w-6 h-6 text-gray-400 hover:text-brand-primary transition-colors cursor-pointer hover:scale-110 duration-300" />
                </div>
                
                <div className="flex flex-wrap items-center space-x-6 text-sm">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Index;
