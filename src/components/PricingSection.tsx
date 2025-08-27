import React from 'react';
import { Check, Star, Zap, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const pricingPlans = [
    {
      name: "Basic",
      price: "1,999",
      originalPrice: "2,499",
      description: "Perfect for simple license applications",
      icon: <Check className="w-6 h-6" />,
      features: [
        "New license application",
        "Document preparation",
        "Application submission",
        "Basic support",
        "5-7 business days processing"
      ],
      notIncluded: [
        "Priority processing",
        "Driving school coordination",
        "Test scheduling assistance"
      ],
      isPopular: false,
      buttonText: "Choose Basic"
    },
    {
      name: "Professional",
      price: "3,999",
      originalPrice: "4,999",
      description: "Most popular choice for complete service",
      icon: <Star className="w-6 h-6" />,
      features: [
        "Everything in Basic",
        "Priority processing",
        "Test scheduling assistance",
        "Driving school coordination",
        "24/7 support",
        "3-5 business days processing",
        "Money-back guarantee"
      ],
      notIncluded: [
        "VIP treatment",
        "Same-day processing"
      ],
      isPopular: true,
      buttonText: "Choose Professional"
    },
    {
      name: "Premium VIP",
      price: "5,999",
      originalPrice: "7,499",
      description: "Ultimate premium experience",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Everything in Professional",
        "VIP treatment",
        "Same-day processing",
        "Dedicated account manager",
        "Home document pickup",
        "Express delivery",
        "Lifetime support",
        "100% success guarantee"
      ],
      notIncluded: [],
      isPopular: false,
      buttonText: "Choose VIP"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" ref={ref} className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-display">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the package that best fits your needs. No hidden fees, no surprises - 
            just honest, upfront pricing for quality service.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-card rounded-3xl shadow-soft hover-lift card-glow group relative overflow-hidden section-fade ${isVisible ? 'visible' : ''} ${
                plan.isPopular 
                  ? 'ring-2 ring-accent shadow-accent scale-105 transform' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-accent text-accent-foreground px-6 py-2 rounded-bl-2xl font-semibold text-sm shadow-accent">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    plan.isPopular 
                      ? 'bg-gradient-accent text-accent-foreground' 
                      : 'bg-accent/10 text-accent'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">ETB</span>
                  </div>
                  <div className="text-sm text-muted-foreground line-through">
                    Originally {plan.originalPrice} ETB
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature) => (
                    <div key={feature} className="flex items-center opacity-50">
                      <Check className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={scrollToContact}
                  variant={plan.isPopular ? "accent" : "default"}
                  size="lg"
                  className="w-full group-hover:scale-105 transition-bounce"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className={`text-center section-fade ${isVisible ? 'visible' : ''} delay-500`}>
          <div className="bg-card rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 font-display">
              100% Satisfaction Guarantee
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We're so confident in our service that we offer a money-back guarantee. 
              If you're not completely satisfied with our service, we'll refund your payment - no questions asked.
            </p>
          </div>
        </div>

        {/* Custom Package CTA */}
        <div className={`text-center mt-12 section-fade ${isVisible ? 'visible' : ''} delay-600`}>
          <h3 className="text-2xl font-bold text-primary mb-4">
            Need a Custom Package?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have specific requirements? We can create a custom package tailored to your unique needs. 
            Contact us for a personalized quote.
          </p>
          <Button onClick={scrollToContact} variant="outline" size="lg">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;