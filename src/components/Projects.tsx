import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Didi Storefront",
      description: "A modern e-commerce web app featuring product cards, advanced filters, and localStorage-based cart system. Built with React and styled with Tailwind CSS.",
      tags: ["React", "Tailwind", "LocalStorage"],
      demo: "#",
      github: "#"
    },
    {
      title: "SBAW Education Platform",
      description: "A sleek educational website featuring multi-language support and a clean dashboard UI. Focused on delivering an intuitive learning experience.",
      tags: ["React", "i18n", "Dashboard"],
      demo: "#",
      github: "#"
    },
    {
      title: "AI Text Refiner",
      description: "A web tool that rewrites AI-generated content to sound more human and natural. Integrates with AI APIs to provide instant refinements.",
      tags: ["React", "AI API", "NLP"],
      demo: "#",
      github: "#"
    },
    {
      title: "Portfolio Builder",
      description: "A responsive portfolio template generator built with HTML, CSS, and JavaScript. Allows users to customize and export their portfolios.",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section-spacing bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Projects</h2>
          <p className="text-muted-foreground text-lg">Things I've built</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden card-glow hover:scale-[1.02] transition-all group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary flex items-center justify-center text-6xl font-bold text-primary/30 group-hover:scale-105 transition-transform">
                {project.title.charAt(0)}
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="flex-1 group/btn" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1 group/btn" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
