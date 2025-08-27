import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-addis-ababa.jpg';

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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with Typing Animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 font-display">
            <span className="inline-block">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subtitle with Fade Animation */}
          <div className={`transform transition-all duration-1000 ${
            showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium leading-relaxed">
              Professional driving license services in Addis Ababa. Get your license fast, 
              reliable, and with confidence. Join thousands of satisfied drivers.
            </p>
          </div>

          {/* CTA Buttons with Staggered Animation */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-accent hover:scale-105 transition-bounce text-lg px-8 py-4 shadow-accent"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 transition-bounce"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/80">
              <div className="flex items-center justify-center space-x-3">
                <Award className="h-8 w-8 text-accent" />
                <div className="text-left">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Users className="h-8 w-8 text-accent" />
                <div className="text-left">
                  <div className="text-2xl font-bold">10,000+</div>
                  <div className="text-sm">Happy Drivers</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="h-8 w-8 text-accent" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Licensed</div>
                  <div className="text-sm">& Certified</div>
                </div>
              </div>
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