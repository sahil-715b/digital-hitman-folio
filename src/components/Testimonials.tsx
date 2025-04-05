
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
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
    
    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Winston Scott",
      position: "CTO, Continental Industries",
      message: "We hired BABA_YAGA when no one else could solve our security problems. Within a week, our systems were not only secure but performing 3x faster. It was like watching an artist at work.",
      date: "TRANSMISSION DATE: 2023-11-15",
      avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMyMjIiLz48Y2lyY2xlIGN4PSI0MCIgY3k9IjMwIiByPSIxNSIgZmlsbD0iIzQ0NCIvPjxwYXRoIGQ9Ik0xNSA3MCBRNDAgOTAgNjUgNzAgUTU1IDQwIDI1IDQwIFExNSA0MCAxNSA3MFoiIGZpbGw9IiM0NDQiLz48L3N2Zz4="
    },
    {
      id: 2,
      name: "Helen Wick",
      position: "Product Director, Tarasov Group",
      message: "I've worked with many developers, but none with the precision and focus of BABA_YAGA. When others said our timeline was impossible, they delivered ahead of schedule. Truly exceptional.",
      date: "TRANSMISSION DATE: 2023-12-03",
      avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMyMjIiLz48Y2lyY2xlIGN4PSI0MCIgY3k9IjI1IiByPSIxMiIgZmlsbD0iIzQ0NCIvPjxwYXRoIGQ9Ik0xNSA4MCBRNDA4MC02NSA4MCBRNTAgNDAgMzAgNDAgUTE1IDQwIDE1IDgwWiIgZmlsbD0iIzQ0NCIvPjwvc3ZnPg=="
    },
    {
      id: 3,
      name: "Marcus Aurelius",
      position: "Security Lead, High Table Inc",
      message: "After three failed attempts with other developers, we brought in BABA_YAGA to fix our critical infrastructure. They didn't just fix it – they rebuilt it from the ground up with such elegance that our entire team was in awe.",
      date: "TRANSMISSION DATE: 2024-01-20",
      avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMyMjIiLz48Y2lyY2xlIGN4PSI0MCIgY3k9IjMwIiByPSIxNCIgZmlsbD0iIzQ0NCIvPjxwYXRoIGQ9Ik0yMCA4MCBRNDA5MDA2MCA4MCBRNTUgNDAgMjUgNDAgUTIwIDQwIDIwIDgwWiIgZmlsbD0iIzQ0NCIvPjwvc3ZnPg=="
    },
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-24 bg-wick-background relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-wick-border to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className={cn(
          "flex items-center mb-16 transform transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="text-xs font-mono text-wick-blue px-3 py-1 border border-wick-border rounded-md mr-4">
            ENCRYPTED
          </div>
          <h2 className="text-3xl font-bold text-wick-foreground mr-4">INTEL REPORTS</h2>
          <div className="h-px flex-grow bg-wick-border"></div>
        </div>
        
        {/* Testimonials slider */}
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className={cn(
                      "card-glass rounded-lg p-6 md:p-8 transform transition-all duration-700",
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}>
                      {/* Testimonial header */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-wick-border">
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h3 className="text-wick-foreground font-medium">{testimonial.name}</h3>
                            <p className="text-wick-gray text-sm">{testimonial.position}</p>
                          </div>
                        </div>
                        <div className="text-xs font-mono text-wick-gray">ID#{testimonial.id}</div>
                      </div>
                      
                      {/* Message */}
                      <div className="relative mb-6">
                        <div className="absolute -left-2 top-0 text-4xl text-wick-blue opacity-30">"</div>
                        <div className="pl-4">
                          <p className="text-wick-foreground italic mb-4">{testimonial.message}</p>
                          <div className="text-xs font-mono text-wick-gray">{testimonial.date}</div>
                        </div>
                      </div>
                      
                      {/* Authentication */}
                      <div className="border-t border-wick-border pt-4 flex justify-between items-center">
                        <div className="text-xs font-mono text-wick-gray">AUTHENTICITY VERIFIED</div>
                        <div className="w-20 h-1 bg-gradient-to-r from-wick-gold/60 to-wick-gold"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className={cn(
            "flex justify-center mt-8 space-x-4 transform transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
            style={{ transitionDelay: "300ms" }}
          >
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-wick-border flex items-center justify-center text-wick-gray hover:text-wick-blue hover:border-wick-blue transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex 
                      ? "bg-wick-blue w-4" 
                      : "bg-wick-gray hover:bg-wick-blue/50"
                  )}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-wick-border flex items-center justify-center text-wick-gray hover:text-wick-blue hover:border-wick-blue transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
