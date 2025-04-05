
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Code, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const [openProject, setOpenProject] = useState<number | null>(null);
  
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
    
    const element = document.getElementById('projects');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Continental CMS",
      type: "Web Application",
      description: "A secure content management system with role-based permissions and encrypted data storage.",
      longDescription: "Built for a global hospitality client, this CMS provides military-grade security while maintaining an intuitive interface. Features real-time collaboration, versioning, and rapid content deployment with zero downtime.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "JWT"],
      outcome: "Increased client content deployment speed by 78% while enhancing security protocols.",
      link: "#",
      code: "#",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzEyMTIxNCIvPjxjaXJjbGUgY3g9IjQwMCIgY3k9IjIwMCIgcj0iMTIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxRUFFREIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW9wYWNpdHk9IjAuMyIvPjxjaXJjbGUgY3g9IjQwMCIgY3k9IjIwMCIgcj0iODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFlYWVkYiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC41Ii8+PHBhdGggZD0iTTM3MCAxNTAgTDQzMCAxNTAgTDQzMCAyNTAgTDM3MCAyNTAgWiIgZmlsbD0iIzFlYWVkYiIgZmlsbC1vcGFjaXR5PSIwLjQiLz48L3N2Zz4="
    },
    {
      id: 2,
      title: "Tarasov Analytics",
      type: "Data Visualization",
      description: "Real-time analytics dashboard for financial performance tracking with predictive capabilities.",
      longDescription: "Developed for a financial institution, this dashboard provides crystal-clear data visualization with military-precision accuracy. Features include anomaly detection, trend forecasting, and automated threat analysis.",
      tech: ["Vue.js", "D3.js", "Python", "Flask", "MongoDB"],
      outcome: "Detected potential fraud worth $2.7M in the first month of deployment.",
      link: "#",
      code: "#",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzEyMTIxNCIvPjxwb2x5bGluZSBwb2ludHM9IjEwMCwzMDAgMjAwLDI4MCAzMDAsMjIwIDQwMCwyMzAgNTAwLDE3MCA2MDAsMTUwIDcwMCw5MCIgc3Ryb2tlPSIjZWEzODRjIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cG9seWxpbmUgcG9pbnRzPSIxMDAsMjUwIDIwMCwyNzAgMzAwLDI0MCA0MDAsMjgwIDUwMCwyMTAgNjAwLDIzMCA3MDAsMTgwIiBzdHJva2U9IiMxRUFFREIiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMDAgMzUwIEw3MDAgMzUwIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg=="
    },
    {
      id: 3,
      title: "Marker's Security",
      type: "Mobile Application",
      description: "Secure messaging platform with end-to-end encryption and self-destructing messages.",
      longDescription: "This covert communications app ensures absolute privacy with zero-knowledge architecture. Features timed message destruction, duress passwords, and secure file transfers with forensic-proof deletion.",
      tech: ["React Native", "Rust", "Signal Protocol", "Firebase"],
      outcome: "Adopted by three Fortune 500 companies for sensitive internal communications.",
      link: "#",
      code: "#",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzEyMTIxNCIvPjxyZWN0IHg9IjI1MCIgeT0iMTAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjU1MCIgcng9IjIwIiByeT0iMjAiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHJlY3QgeD0iMjcwIiB5PSIxMjAiIHdpZHRoPSIyNjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjMjIyIi8+PGNpcmNsZSBjeD0iNDAwIiBjeT0iMzMwIiByPSIyMCIgc3Ryb2tlPSIjZDRhZjM3IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cmVjdCB4PSIzMjAiIHk9IjE0MCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzFlYWVkYiIgZmlsbC1vcGFjaXR5PSIwLjUiLz48cmVjdCB4PSIzNDAiIHk9IjE4MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2Q0YWYzNyIgZmlsbC1vcGFjaXR5PSIwLjUiLz48cmVjdCB4PSIzMDAiIHk9IjIyMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2VhMzg0YyIgZmlsbC1vcGFjaXR5PSIwLjUiLz48L3N2Zz4="
    },
  ];
  
  const toggleProject = (id: number) => {
    setOpenProject(openProject === id ? null : id);
  };
  
  return (
    <section id="projects" className="py-24 bg-wick-background relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-wick-blue/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-wick-blue/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className={cn(
          "flex items-center mb-16 transform transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="text-xs font-mono text-wick-blue px-3 py-1 border border-wick-border rounded-md mr-4">
            CLASSIFIED
          </div>
          <h2 className="text-3xl font-bold text-wick-foreground mr-4">MISSION FILES</h2>
          <div className="h-px flex-grow bg-wick-border"></div>
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "card-glass rounded-lg overflow-hidden transform transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              {/* Project image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wick-dark to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-mono text-wick-gray px-2 py-1 bg-wick-dark/80 rounded">
                      {project.type}
                    </div>
                    <div className="flex space-x-2">
                      {project.link && (
                        <a href={project.link} className="p-1 hover:text-wick-blue transition-colors">
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.code && (
                        <a href={project.code} className="p-1 hover:text-wick-blue transition-colors">
                          <Code size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project details */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-wick-foreground mb-2">{project.title}</h3>
                <p className="text-wick-gray mb-4 text-sm">{project.description}</p>
                
                <button 
                  onClick={() => toggleProject(project.id)}
                  className="w-full flex items-center justify-between text-wick-blue text-sm border border-wick-border rounded-md px-3 py-2 hover:bg-wick-blue/10 transition-colors"
                >
                  <span>MISSION DETAILS</span>
                  {openProject === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                {openProject === project.id && (
                  <div className="mt-4 pt-4 border-t border-wick-border animate-fade-in">
                    <p className="text-wick-foreground text-sm mb-4">{project.longDescription}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs font-mono text-wick-gray mb-2">TECH STACK</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 rounded bg-wick-dark text-wick-blue">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-mono text-wick-gray mb-2">OUTCOME</div>
                      <p className="text-wick-gold text-sm">{project.outcome}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* View more button */}
        <div className="text-center mt-12">
          <button className={cn(
            "inline-flex items-center space-x-2 text-wick-foreground border border-wick-border rounded-md px-6 py-3 hover:bg-wick-blue/10 hover:border-wick-blue transition-all duration-300",
            visible ? "animate-fade-in" : "opacity-0"
          )}
            style={{ animationDelay: "600ms" }}
          >
            <span>ACCESS FULL ARCHIVE</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
