import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-addis-ababa.jpg';
import logo from '@/assets/logo.png';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  
  const fullText = 'Your Path to Driving Starts Here';

  useEffect(() => {
    let currentIndex = 0;
    const typingTimer = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingTimer);
        setTimeout(() => setShowSubtitle(true), 500);
        setTimeout(() => setShowCTA(true), 1000);
      }
    }, 100);

    return () => clearInterval(typingTimer);
  }, [fullText]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Addis Ababa streets and traffic" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Side - Logo and Company Name */}
          <div className="text-left">
            {/* Logo and Company Name */}
            <div className="flex items-center mb-8">
              <img 
                src={logo} 
                alt="Dynamic Driving Licence" 
                className="h-20 w-20 mr-6 shadow-accent rounded-2xl bg-white/10 p-2"
              />
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground font-display leading-tight">
                  Dynamic Driving
                  <br />
                  <span className="text-accent">Licence</span>
                </h1>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={scrollToContact}
                  size="xl" 
                  variant="hero"
                  className="shadow-accent hover:shadow-strong"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={scrollToServices}
                  variant="outline" 
                  size="xl"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-bounce"
                >
                  Our Services
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className={`transform transition-all duration-1000 delay-500 ${
              showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="grid grid-cols-3 gap-4 text-primary-foreground/90">
                <div className="text-center">
                  <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-xl font-bold">98%</div>
                  <div className="text-xs">Success Rate</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-xl font-bold">10,000+</div>
                  <div className="text-xs">Happy Drivers</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-xl font-bold">Licensed</div>
                  <div className="text-xs">& Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Motto */}
          <div className="text-left lg:text-right">
            {/* Main Motto with Typing Animation */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 font-display leading-tight">
              <span className="inline-block">
                {typedText}
                <span className="animate-pulse text-accent">|</span>
              </span>
            </h2>

            {/* Subtitle with Fade Animation */}
            <div className={`transform transition-all duration-1000 ${
              showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                Professional driving license services in Addis Ababa. 
                <br />
                <span className="text-accent font-semibold">Fast • Reliable • Trusted</span>
                <br />
                Join thousands of satisfied drivers who chose excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;