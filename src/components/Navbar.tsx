
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled 
        ? 'bg-wick-dark/90 backdrop-blur-md border-b border-wick-border' 
        : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="text-wick-blue text-2xl font-bold font-mono tracking-wider">
                <span className="text-wick-gold">{'{{'}</span>
                <span className="text-glow">BABA_YAGA</span>
                <span className="text-wick-gold">}}</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-wick-foreground hover:text-wick-blue text-sm tracking-widest transition-colors duration-300 uppercase font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-wick-blue hover:text-wick-gold focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        'md:hidden',
        isOpen ? 'block' : 'hidden'
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-wick-dark/95 backdrop-blur-md border-b border-wick-border">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-wick-foreground hover:text-wick-blue"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
