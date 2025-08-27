import React from 'react';
import { 
  FileText, 
  RotateCcw, 
  AlertTriangle, 
  Calendar, 
  GraduationCap, 
  Car, 
  Clock, 
  Shield 
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "New License Application",
      description: "Complete assistance with first-time driving license applications. We handle all paperwork and guide you through every step of the process.",
      features: ["Document preparation", "Application submission", "Follow-up tracking", "Expert guidance"],
      price: "Starting from 2,500 ETB",
      duration: "5-7 business days",
      animation: "animate-bounce-slow"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "License Renewal",
      description: "Quick and efficient license renewal services. Don't let your license expire - we make renewal simple and fast.",
      features: ["Express processing", "Document verification", "Online tracking", "Same-day service"],
      price: "Starting from 1,800 ETB",
      duration: "1-3 business days",
      animation: "animate-spin-slow"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Lost License Replacement",
      description: "Lost your license? We'll help you get a replacement quickly with minimal hassle and documentation.",
      features: ["Police report assistance", "Duplicate application", "Fast processing", "Secure delivery"],
      price: "Starting from 2,200 ETB",
      duration: "3-5 business days",
      animation: "animate-wiggle"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Driving Test Scheduling",
      description: "Schedule your practical and theoretical driving tests at convenient times. We coordinate with testing centers for optimal scheduling.",
      features: ["Flexible scheduling", "Multiple locations", "Test preparation", "Reminder service"],
      price: "Starting from 800 ETB",
      duration: "Available daily",
      animation: "animate-pulse"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Driving School Coordination",
      description: "Connect with certified driving schools in Addis Ababa. We partner with the best instructors to ensure you're test-ready.",
      features: ["Certified instructors", "Modern vehicles", "Flexible schedules", "Theory classes"],
      price: "Starting from 3,500 ETB",
      duration: "2-4 weeks",
      animation: "animate-bounce-slow"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Package",
      description: "Complete end-to-end service including application, training, testing, and license delivery. The most comprehensive package available.",
      features: ["Full service", "Priority processing", "Dedicated support", "Money-back guarantee"],
      price: "Starting from 5,999 ETB",
      duration: "2-3 weeks",
      animation: "animate-glow-pulse"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-display">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive driving license services designed to make your journey smooth and successful. 
            Choose the service that best fits your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card rounded-2xl p-8 shadow-soft hover-lift group section-fade ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth ${service.animation}`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-smooth">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-foreground">
                    <Car className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & Duration */}
              <div className="border-t border-border pt-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-accent">{service.price}</span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                onClick={scrollToContact}
                className="w-full group-hover:bg-accent group-hover:scale-105 transition-bounce"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center section-fade ${isVisible ? 'visible' : ''} delay-500`}>
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4 font-display">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Our experts are here to help! Contact us for a free consultation and we'll recommend 
              the best service package for your specific situation.
            </p>
            <Button 
              onClick={scrollToContact}
              variant="hero" 
              size="xl"
              className="shadow-accent hover:shadow-strong"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;