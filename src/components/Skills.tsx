
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Skills = () => {
  const [visible, setVisible] = useState(false);
  
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
    
    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  // Skill categories
  const skillSets = [
    {
      category: "FRONTEND",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
      ]
    },
    {
      category: "BACKEND",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express", level: 88 },
        { name: "Django", level: 82 },
        { name: "GraphQL", level: 87 },
      ]
    },
    {
      category: "INFRASTRUCTURE",
      skills: [
        { name: "Docker", level: 89 },
        { name: "Kubernetes", level: 80 },
        { name: "AWS", level: 86 },
        { name: "CI/CD", level: 85 },
        { name: "Terraform", level: 78 },
      ]
    }
  ];

  // Technical specialties
  const specialties = [
    { name: "Secure Coding", value: 92 },
    { name: "Performance Optimization", value: 88 },
    { name: "Responsive Design", value: 95 },
    { name: "API Development", value: 90 },
    { name: "Database Design", value: 85 },
  ];
  
  return (
    <section id="skills" className="py-24 bg-wick-dark relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wick-border to-transparent"></div>
        <div className="absolute -left-10 top-10 w-40 h-40 rounded-full bg-wick-blue/5 blur-3xl"></div>
        <div className="absolute -right-10 bottom-10 w-40 h-40 rounded-full bg-wick-red/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className={cn(
          "flex items-center mb-16 transform transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl font-bold text-wick-foreground">ARSENAL</h2>
          <div className="h-px flex-grow bg-wick-border ml-4"></div>
          <div className="text-xs font-mono text-wick-blue px-3 py-1 border border-wick-border rounded-md ml-4">
            WEAPONS & TACTICS
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Skill sets */}
          <div className="md:col-span-2">
            <div className={cn(
              "transform transition-all duration-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <div className="mb-8">
                <div className="font-mono text-sm text-wick-gray mb-4">PRIMARY WEAPONS</div>
                
                <div className="space-y-8">
                  {skillSets.map((skillSet, setIndex) => (
                    <div 
                      key={skillSet.category}
                      className="card-glass rounded-lg p-5"
                      style={{ 
                        animationDelay: `${setIndex * 200}ms`,
                        animation: visible ? 'fade-in 0.5s forwards' : 'none',
                        opacity: 0
                      }}
                    >
                      <div className="font-mono text-xs text-wick-blue mb-4">{skillSet.category}</div>
                      
                      <div className="space-y-4">
                        {skillSet.skills.map((skill, skillIndex) => (
                          <div 
                            key={skill.name}
                            className="transition-all duration-300"
                            style={{ 
                              transitionDelay: `${skillIndex * 100 + setIndex * 200}ms`,
                              opacity: visible ? 1 : 0,
                              transform: visible ? 'translateX(0)' : 'translateX(-20px)'
                            }}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <div className="text-wick-foreground">{skill.name}</div>
                              <div className="text-xs font-mono text-wick-gray">{skill.level}/100</div>
                            </div>
                            <div className="h-1 bg-wick-charcoal rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-wick-blue to-wick-blue/70"
                                style={{ 
                                  width: visible ? `${skill.level}%` : '0%',
                                  transition: 'width 1s ease-out',
                                  transitionDelay: `${skillIndex * 100 + setIndex * 200 + 300}ms`
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Technical specialties */}
          <div>
            <div className={cn(
              "transform transition-all duration-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="font-mono text-sm text-wick-gray mb-4">SPECIALIZED TRAINING</div>
              
              <div className="card-glass rounded-lg p-5 mb-8">
                <div className="space-y-6">
                  {specialties.map((specialty, index) => (
                    <div 
                      key={specialty.name}
                      className="transition-all duration-500"
                      style={{ 
                        transitionDelay: `${index * 150 + 600}ms`,
                        opacity: visible ? 1 : 0
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-wick-foreground">{specialty.name}</div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-14 text-center">
                          <span className="text-lg font-bold text-wick-red">{specialty.value}</span>
                        </div>
                        <div className="flex-grow h-2 bg-wick-charcoal rounded-full ml-3 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-wick-red/80 to-wick-red"
                            style={{ 
                              width: visible ? `${specialty.value}%` : '0%',
                              transition: 'width 1s ease-out',
                              transitionDelay: `${index * 150 + 800}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Equipment section */}
              <div className="card-glass rounded-lg p-5">
                <div className="font-mono text-xs text-wick-blue mb-4">ADDITIONAL EQUIPMENT</div>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Git", "REST APIs", "MongoDB", "PostgreSQL", "Firebase", 
                    "Redux", "Jest", "WebGL", "Three.js"
                  ].map((item, index) => (
                    <div 
                      key={item}
                      className="text-sm py-2 px-3 rounded bg-wick-charcoal flex items-center justify-between"
                      style={{ 
                        animationDelay: `${index * 50 + 1000}ms`,
                        animation: visible ? 'fade-in 0.3s forwards' : 'none',
                        opacity: 0
                      }}
                    >
                      <span>{item}</span>
                      <span className="w-2 h-2 rounded-full bg-wick-gold"></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
