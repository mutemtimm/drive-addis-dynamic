import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      details: "Bole Road, Near Edna Mall\nAddis Ababa, Ethiopia",
      subDetails: "Easy access by public transport"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: "+251 11 123 4567\n+251 91 234 5678",
      subDetails: "Available 7 days a week"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: "info@dynamicdl.com\nsupport@dynamicdl.com",
      subDetails: "We respond within 2 hours"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM",
      subDetails: "Sunday: Emergency only"
    }
  ];

  const services = [
    "New License Application",
    "License Renewal",
    "Lost License Replacement",
    "Driving Test Scheduling",
    "Driving School Coordination",
    "Premium Package",
    "Other / Consultation"
  ];

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length >= 2;
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case 'phone':
        return /^[0-9+\-\s()]+$/.test(value) && value.length >= 10;
      default:
        return true;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation with visual feedback
    const isValid = validateField(name, value) && value.trim() !== '';
    const element = e.target;
    
    // Remove previous classes
    element.classList.remove('field-valid', 'field-invalid');
    
    // Add appropriate class based on validation
    if (value.trim() !== '') {
      if (isValid) {
        element.classList.add('field-valid');
      } else {
        element.classList.add('field-invalid');
      }
    }
    
    // Update errors state
    setErrors(prev => ({
      ...prev,
      [name]: value.trim() !== '' && !isValid
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const newErrors: Record<string, boolean> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'message' && !value.trim()) {
        newErrors[key] = true;
      } else if (!validateField(key, value)) {
        newErrors[key] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      
      // Shake animation for invalid fields
      Object.keys(newErrors).forEach(fieldName => {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (field) {
          field.classList.add('animate-shake');
          setTimeout(() => field.classList.remove('animate-shake'), 500);
        }
      });
      
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully! ✅",
        description: "Thank you for contacting us. We'll get back to you within 2 hours.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-display">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your driving license journey? Contact us today for expert assistance 
            and personalized service. We're here to help make the process smooth and successful.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`section-fade ${isVisible ? 'visible' : ''} delay-200`}>
            <h3 className="text-2xl font-bold text-primary mb-8 font-display">Contact Information</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title}
                  className="bg-card rounded-xl p-6 shadow-soft hover-lift card-glow group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                      <p className="text-foreground text-sm whitespace-pre-line mb-1">{info.details}</p>
                      <p className="text-muted-foreground text-xs">{info.subDetails}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.842847751937!2d38.7569!3d8.9806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sBole%20Rd%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1647890123456!5m2!1sen!2set"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dynamic Driving Licence Office Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className={`section-fade ${isVisible ? 'visible' : ''} delay-300`}>
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-6 font-display">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`transition-smooth ${errors.name ? 'border-destructive focus:border-destructive' : 'focus:border-accent'}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <div className="flex items-center mt-2 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      Please enter a valid name
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`transition-smooth ${errors.email ? 'border-destructive focus:border-destructive' : 'focus:border-accent'}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <div className="flex items-center mt-2 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      Please enter a valid email address
                    </div>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`transition-smooth ${errors.phone ? 'border-destructive focus:border-destructive' : 'focus:border-accent'}`}
                    placeholder="+251 91 234 5678"
                  />
                  {errors.phone && (
                    <div className="flex items-center mt-2 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      Please enter a valid phone number
                    </div>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md bg-background transition-smooth ${errors.service ? 'border-destructive' : 'border-input focus:border-accent'}`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <div className="flex items-center mt-2 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      Please select a service
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="resize-none focus:border-accent transition-smooth"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="accent"
                  size="lg"
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin-slow w-4 h-4 mr-2 border-2 border-accent-foreground border-t-transparent rounded-full" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;