
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Zap, Heart, Coins, Shield, Trophy, Star, User, Rocket, Check, Twitter, Instagram, MessageCircle, Send } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900/20 to-black font-inter">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-black/90 via-indigo-900/30 to-black/90 backdrop-blur-sm border-b border-indigo-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-3 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-2 animate-glow-pulse hover:scale-110 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/fe68abea-d36f-4339-8a82-66b2672c4756.png" 
                  alt="OnlyFlame Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">OnlyFlame</span>
            </div>
            
            <nav className={`hidden md:flex items-center space-x-8 ${isVisible ? 'animate-slide-down' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <a href="#home" className="text-white hover:text-brand-primary transition-colors">Home</a>
              <a href="#benefits" className="text-white hover:text-brand-primary transition-colors">Benefits</a>
              <a href="#how-it-works" className="text-white hover:text-brand-primary transition-colors">How It Works</a>
              <Button 
                className={`bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:shadow-lg hover:shadow-brand-primary/50 hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                style={{ animationDelay: '0.4s' }}
                onClick={() => window.open('https://creators.onlyflame.live/', '_blank')}
              >
                Apply Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-transparent to-brand-primary/10 animate-gradient-x"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-success bg-clip-text text-transparent leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Own your audience.<br />
            Launch your token.<br />
            Get paid in crypto.
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            OnlyFlame helps adult content creators launch on-chain tokens, earn from fans, and control their economy — no crypto knowledge needed.
          </p>
          
          <div className={`flex flex-col items-center space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xl px-8 py-4 hover:shadow-2xl hover:shadow-brand-primary/50 hover:scale-105 transition-all duration-300 animate-glow-pulse"
              onClick={() => window.open('https://creators.onlyflame.live/', '_blank')}
            >
              Apply Now
            </Button>
            <div className="flex items-center space-x-2 text-brand-success">
              <Check className="w-5 h-5" />
              <span className="text-lg font-semibold">Only 47 spots left</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Why Choose OnlyFlame
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-to-br from-gray-900/50 to-indigo-900/30 border-indigo-500/30 hover:border-brand-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-primary/20 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/10 to-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">OnlyFans vs OnlyFlame</h2>
            <p className="text-xl text-gray-300">See why creators are making the switch.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-indigo-900/30 rounded-lg overflow-hidden border border-indigo-500/30">
              <div className="grid grid-cols-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold">
                <div className="p-4 text-center">Feature</div>
                <div className="p-4 text-center border-l border-white/20">OnlyFans</div>
                <div className="p-4 text-center border-l border-white/20">OnlyFlame</div>
              </div>
              
              {comparison.map((item, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 border-t border-indigo-500/20 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-4 text-white font-medium">{item.feature}</div>
                  <div className="p-4 text-red-400 border-l border-indigo-500/20">{item.onlyfans}</div>
                  <div className="p-4 text-brand-success border-l border-indigo-500/20 font-semibold">{item.onlyflame}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-900 to-indigo-900 mb-6 group-hover:scale-110 transition-all duration-300 border-2 border-indigo-500/30 group-hover:border-brand-primary/50`}>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary/10 via-indigo-900/20 to-brand-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Your Creator Economy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join OnlyFlame's exclusive creator program and launch your personal token. We'll guide you through every step of the process.
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {benefits_list.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 animate-fade-in-up`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <Check className="w-5 h-5 text-brand-success flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xl px-8 py-4 hover:shadow-2xl hover:shadow-brand-primary/50 hover:scale-105 transition-all duration-300 animate-glow-pulse animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
            onClick={() => window.open('https://creators.onlyflame.live/', '_blank')}
          >
            <img 
              src="/lovable-uploads/fe68abea-d36f-4339-8a82-66b2672c4756.png" 
              alt="Flame" 
              className="w-5 h-5 mr-2"
            />
            Start Application
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/80 border-t border-indigo-500/20">
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
  );
};

export default Index;
