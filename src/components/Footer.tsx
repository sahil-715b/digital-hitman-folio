
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-wick-background relative overflow-hidden">
      {/* Border top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-wick-border to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Top section with logo and social links */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="text-wick-blue text-2xl font-bold font-mono tracking-wider mb-6 md:mb-0">
              <a href="#" className="flex items-center space-x-2">
                <span className="text-wick-gold">{'{{'}</span>
                <span className="text-glow">BABA_YAGA</span>
                <span className="text-wick-gold">}}</span>
              </a>
            </div>
            
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-wick-border flex items-center justify-center text-wick-gray hover:text-wick-blue hover:border-wick-blue transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Bottom section with copyright and links */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-wick-border">
            <div className="text-wick-gray text-sm mb-4 md:mb-0">
              &copy; {currentYear} BABA_YAGA. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center space-x-6">
              {[
                { name: "Privacy", href: "#" },
                { name: "Terms", href: "#" },
                { name: "Cookies", href: "#" },
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-sm text-wick-gray hover:text-wick-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Easter egg */}
          <div className="text-center mt-10">
            <p className="text-xs font-mono text-wick-gray opacity-40">
              FORTIS FORTUNA ADIUVAT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
