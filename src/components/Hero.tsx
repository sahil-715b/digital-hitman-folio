
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const codename = "BABA_YAGA";
  const motto = "Precision. Elegance. Execution.";
  
  useEffect(() => {
    // Simulate loading time for animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-wick-background">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,174,219,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9Ii4xIj48cGF0aCBkPSJNMTggMGExIDEgMCAwIDEgMSAxdjE2YTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjFhMSAxIDAgMCAxIDEtMWgxNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5"></div>
      </div>
      
      {/* Rain effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-px h-20 bg-wick-blue/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}px`,
              animation: `rainDrop ${1 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={cn(
          "transition-all duration-1000 transform",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {/* Digital terminal border */}
          <div className="relative inline-block border border-wick-border rounded-md p-1 mb-4">
            <div className="text-xs font-mono text-wick-gray px-3 py-1 flex items-center">
              <span className="h-2 w-2 rounded-full bg-wick-red mr-2"></span>
              <span className="h-2 w-2 rounded-full bg-wick-gold mr-2"></span>
              <span className="h-2 w-2 rounded-full bg-wick-blue mr-2"></span>
              TERMINAL ACCESS: GRANTED
            </div>
          </div>
          
          {/* Animated title */}
          <h1 className="mb-6 relative overflow-hidden">
            <div className={cn(
              "overflow-hidden mb-2 inline-block",
              loaded ? "animate-text-reveal" : "invisible"
            )}>
              <span className="font-mono text-sm text-wick-gray">CodeName:</span>
            </div>
            
            <div className="block">
              <span 
                data-text={codename}
                className={cn(
                  "text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-wick-blue text-glow glitch",
                  loaded ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: "0.5s" }}
              >
                {codename}
              </span>
            </div>
          </h1>
          
          {/* Contract/Motto */}
          <div 
            className={cn(
              "mx-auto max-w-md border border-wick-border bg-wick-dark/50 rounded px-6 py-4 mb-8",
              loaded ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "1s" }}
          >
            <p className="text-xl font-light tracking-widest text-wick-foreground">
              {motto.split('').map((char, index) => (
                <span 
                  key={index} 
                  className="inline-block"
                  style={{ 
                    animationDelay: `${1.2 + (index * 0.05)}s`,
                    animation: loaded ? 'fade-in 0.3s forwards' : 'none',
                    opacity: 0
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </p>
          </div>
          
          {/* Digital signature */}
          <div 
            className={cn(
              "mx-auto text-sm font-mono text-wick-gray mb-12",
              loaded ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "1.8s" }}
          >
            <div className="flex justify-center items-center space-x-3">
              <div className="h-px w-12 bg-wick-gray/30"></div>
              <span>DIGITAL_SIGNATURE_VERIFIED</span>
              <div className="h-px w-12 bg-wick-gray/30"></div>
            </div>
          </div>
          
          {/* Call-to-action */}
          <a 
            href="#about"
            className={cn(
              "inline-flex items-center space-x-2 text-wick-foreground border border-wick-border rounded-md px-6 py-3 hover:bg-wick-blue/10 hover:border-wick-blue transition-all duration-300 animate-pulse-glow",
              loaded ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "2s" }}
          >
            <span>VIEW FILE</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
