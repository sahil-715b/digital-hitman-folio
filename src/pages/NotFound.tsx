
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, FileX } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-wick-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-wick-charcoal border border-wick-border">
            <FileX size={32} className="text-wick-red" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold mb-4 font-mono text-wick-blue text-glow">404</h1>
        <p className="text-xl text-wick-foreground mb-6">TARGET NOT FOUND</p>
        <p className="text-wick-gray mb-8">The file or resource you're looking for has been moved, deleted, or never existed in this database.</p>
        
        <a 
          href="/" 
          className="inline-flex items-center space-x-2 bg-wick-dark text-wick-foreground border border-wick-border rounded-md px-6 py-3 hover:bg-wick-blue/10 hover:border-wick-blue hover:text-wick-blue transition-colors"
        >
          <ArrowLeft size={16} />
          <span>RETURN TO BASE</span>
        </a>
        
        <div className="mt-12">
          <div className="font-mono text-xs text-wick-gray">
            ERROR CODE: {location.pathname.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
