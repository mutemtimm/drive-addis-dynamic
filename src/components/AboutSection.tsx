import React, { useEffect } from 'react';
import { Shield, Eye, Heart, Award, Users, Clock, CheckCircle } from 'lucide-react';
import { useScrollAnimation, useCountAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const customersCount = useCountAnimation(10000, 2000);
  const successRate = useCountAnimation(98, 1500);
  const experienceYears = useCountAnimation(15, 1800);
  const dailyApplications = useCountAnimation(50, 2200);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => customersCount.startAnimation(), 200);
      setTimeout(() => successRate.startAnimation(), 400);
      setTimeout(() => experienceYears.startAnimation(), 600);
      setTimeout(() => dailyApplications.startAnimation(), 800);
    }
  }, [isVisible]);

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparency",
      description: "Clear processes, honest pricing, and no hidden fees. You know exactly what to expect every step of the way."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Trustworthy",
      description: "Licensed and certified professionals with years of experience in Ethiopian driving license procedures."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Accessibility",
      description: "Making driving licenses accessible to everyone with convenient locations and flexible scheduling."
    }
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      count: customersCount.count,
      suffix: "+",
      label: "Satisfied Customers",
      color: "text-accent"
    },
    {
      icon: <Award className="w-6 h-6" />,
      count: successRate.count,
      suffix: "%",
      label: "First-Time Success Rate",
      color: "text-accent"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      count: experienceYears.count,
      suffix: "+",
      label: "Years Experience",
      color: "text-accent"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      count: dailyApplications.count,
      suffix: "+",
      label: "Daily Applications",
      color: "text-accent"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-display">
            About Dynamic Driving Licence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in navigating Ethiopia's driving license process. We've been helping 
            Addis Ababa residents get their licenses quickly and efficiently for over a decade.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className={`section-fade ${isVisible ? 'visible' : ''} delay-200`}>
            <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift">
              <h3 className="text-2xl font-bold text-primary mb-4 font-display">Our Mission</h3>
              <p className="text-foreground leading-relaxed">
                To simplify and streamline the driving license process in Ethiopia, making it accessible, 
                transparent, and efficient for every citizen. We believe everyone deserves the freedom 
                and opportunities that come with having a valid driver's license.
              </p>
            </div>
          </div>
          <div className={`section-fade ${isVisible ? 'visible' : ''} delay-300`}>
            <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift">
              <h3 className="text-2xl font-bold text-primary mb-4 font-display">Our Vision</h3>
              <p className="text-foreground leading-relaxed">
                To be the leading driving license service provider in Ethiopia, known for our 
                professionalism, reliability, and customer-first approach. We envision a future 
                where getting your license is stress-free and straightforward.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className={`section-fade ${isVisible ? 'visible' : ''} delay-400`}>
          <h3 className="text-3xl font-bold text-primary text-center mb-12 font-display">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className={`text-center group section-fade ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-primary mb-4">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Statistics */}
        <div className={`section-fade ${isVisible ? 'visible' : ''} delay-600`}>
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-primary-foreground"
                  style={{ animationDelay: `${200 + index * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-4">
                    {React.cloneElement(stat.icon, { className: `w-6 h-6 ${stat.color}` })}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in-up">
                    {stat.count.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;