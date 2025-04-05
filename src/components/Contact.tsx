
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Send, Lock, Shield } from 'lucide-react';

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-wick-dark relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-wick-border to-transparent"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-wick-blue/3 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <div className={cn(
            "text-center mb-12 transform transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="inline-block text-xs font-mono text-wick-blue px-3 py-1 border border-wick-border rounded-md mb-4">
              SECURE CHANNEL
            </div>
            <h2 className="text-3xl font-bold text-wick-foreground mb-4">ESTABLISH CONTACT</h2>
            <p className="text-wick-gray max-w-xl mx-auto">
              Need professional assistance with your digital mission? Send a secure transmission and I'll respond within 24 hours.
            </p>
          </div>
          
          {/* Contact form */}
          <div className={cn(
            "card-glass rounded-lg overflow-hidden transform transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="p-1">
              <div className="bg-wick-background/30 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-wick-red mr-2"></div>
                  <div className="w-2 h-2 rounded-full bg-wick-gold mr-2"></div>
                  <div className="w-2 h-2 rounded-full bg-wick-blue mr-2"></div>
                  <div className="text-xs font-mono text-wick-gray">
                    ENCRYPTED_TRANSMISSION
                  </div>
                </div>
                <div className="flex items-center text-xs font-mono text-wick-gray">
                  <Lock size={12} className="mr-1" />
                  <span>TRACE ROUTE PROTECTED</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-wick-gray mb-2">
                    IDENTIFIER (NAME)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-wick-background border border-wick-border rounded px-4 py-3 text-wick-foreground focus:border-wick-blue focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-wick-gray mb-2">
                    COMMUNICATION CHANNEL (EMAIL)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-wick-background border border-wick-border rounded px-4 py-3 text-wick-foreground focus:border-wick-blue focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-xs font-mono text-wick-gray mb-2">
                  MISSION OBJECTIVE (SUBJECT)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-wick-background border border-wick-border rounded px-4 py-3 text-wick-foreground focus:border-wick-blue focus:outline-none transition-colors"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-xs font-mono text-wick-gray mb-2">
                  TRANSMISSION CONTENT (MESSAGE)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full bg-wick-background border border-wick-border rounded px-4 py-3 text-wick-foreground focus:border-wick-blue focus:outline-none transition-colors"
                ></textarea>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center text-wick-gray text-sm mb-4 md:mb-0">
                  <Shield size={16} className="mr-2 text-wick-blue" />
                  <span>All transmissions are encrypted end-to-end</span>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={cn(
                    "inline-flex items-center space-x-2 bg-wick-blue/10 text-wick-blue border border-wick-blue rounded-md px-6 py-3 hover:bg-wick-blue hover:text-white transition-colors box-glow disabled:opacity-50 disabled:cursor-not-allowed",
                    isSubmitting && "animate-pulse"
                  )}
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : submitted ? (
                    <span>TRANSMISSION RECEIVED</span>
                  ) : (
                    <>
                      <span>SEND SIGNAL</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Alternative contact methods */}
          <div className={cn(
            "mt-12 grid md:grid-cols-3 gap-6 transform transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
            style={{ transitionDelay: "400ms" }}
          >
            {[
              { 
                title: "EMAIL DIRECT", 
                value: "baba_yaga@continental.code", 
                delay: 0 
              },
              { 
                title: "COMMUNICATION HOURS", 
                value: "0900 - 1700 EST", 
                delay: 100 
              },
              { 
                title: "RESPONSE TIME", 
                value: "< 24 HOURS", 
                delay: 200 
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="card-glass rounded-lg p-5 flex flex-col items-center justify-center text-center"
                style={{ 
                  animationDelay: `${item.delay}ms`,
                  animation: visible ? 'fade-in 0.5s forwards' : 'none',
                  opacity: 0
                }}
              >
                <div className="font-mono text-xs text-wick-gray mb-2">{item.title}</div>
                <div className="text-wick-foreground">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
