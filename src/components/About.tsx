
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const About = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  // Profile data
  const profile = {
    codename: "BABA_YAGA",
    realName: "John Developer",
    age: 32,
    location: "New York, NY",
    status: "Active",
    experience: 8,
    projectsCompleted: 47,
    successRate: "98.6%"
  };
  
  return (
    <section id="about" className="py-24 bg-wick-dark relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-wick-border to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-wick-border to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <div className={cn(
            "flex items-center mb-12 transform transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h2 className="text-3xl font-bold text-wick-foreground">PERSONNEL FILE</h2>
            <div className="h-px flex-grow bg-wick-border ml-4"></div>
            <div className="text-xs font-mono text-wick-blue px-3 py-1 border border-wick-border rounded-md ml-4">
              CLEARANCE: LEVEL 5
            </div>
          </div>
          
          {/* Profile card */}
          <div className={cn(
            "card-glass rounded-lg overflow-hidden mb-12 transform transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left panel */}
              <div className="md:col-span-2 bg-wick-background/50 p-6 flex flex-col">
                <div className="font-mono text-xs text-wick-gray mb-2">CODENAME</div>
                <div className="text-2xl font-bold text-wick-blue mb-4">{profile.codename}</div>
                
                <div className="font-mono text-xs text-wick-gray mb-2">IDENTITY</div>
                <div className="text-xl text-wick-foreground mb-6">{profile.realName}</div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="font-mono text-xs text-wick-gray mb-1">AGE</div>
                    <div className="text-wick-foreground">{profile.age}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-wick-gray mb-1">STATUS</div>
                    <div className="text-wick-gold">{profile.status}</div>
                  </div>
                </div>
                
                <div className="font-mono text-xs text-wick-gray mb-2">LOCATION</div>
                <div className="text-wick-foreground">{profile.location}</div>
                
                <div className="mt-auto">
                  <div className="h-10 w-40 mt-6 border border-wick-border rounded-md overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-wick-blue/20 to-transparent" style={{ width: '80%' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-xs">
                      AUTHENTICITY VERIFIED
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right panel */}
              <div className="md:col-span-3 p-6">
                <div className="border-b border-wick-border pb-4 mb-6">
                  <div className="font-mono text-xs text-wick-gray mb-2">PROFILE</div>
                  <p className="text-wick-foreground mb-4">
                    Full-stack developer specializing in creating sleek, high-performance digital solutions with precision and attention to detail. Known for elegant, clean code and the ability to execute complex projects efficiently.
                  </p>
                  <p className="text-wick-foreground">
                    Works best under pressure with a reputation for meeting impossible deadlines and handling critical missions with consistent success.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-wick-blue">{profile.experience}</div>
                    <div className="font-mono text-xs text-wick-gray mt-1">YEARS ACTIVE</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-wick-red">{profile.projectsCompleted}</div>
                    <div className="font-mono text-xs text-wick-gray mt-1">CONFIRMED KILLS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-wick-gold">{profile.successRate}</div>
                    <div className="font-mono text-xs text-wick-gray mt-1">SUCCESS RATE</div>
                  </div>
                </div>
                
                <div className="border-t border-wick-border pt-4">
                  <div className="font-mono text-xs text-wick-gray mb-2">DIGITAL SIGNATURE</div>
                  <div className="font-mono text-wick-blue">/signature/d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592/</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quote */}
          <div 
            className={cn(
              "text-center max-w-2xl mx-auto transform transition-all duration-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <p className="text-xl text-wick-foreground italic mb-4">
              "I'm not afraid of the man who practices 10,000 languages once, but I fear the man who has practiced one language 10,000 times."
            </p>
            <div className="font-mono text-xs text-wick-gray">
              <span className="text-wick-blue">*</span> ADAPTED FROM BRUCE LEE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
