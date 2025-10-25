import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-spacing bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities,
            creative ideas, or potential collaborations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-8">
            <a
              href="mailto:gharib.s.dev@gmail.com"
              className="bg-card border border-border rounded-xl p-6 card-glow hover:scale-105 transition-all group"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-foreground mb-1">Email</p>
              <p className="text-sm text-muted-foreground">gharib.s.dev@gmail.com</p>
            </a>

            <a
              href="https://github.com/gharibshaaban"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 card-glow hover:scale-105 transition-all group"
            >
              <Github className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-foreground mb-1">GitHub</p>
              <p className="text-sm text-muted-foreground">github.com/gharibshaaban</p>
            </a>

            <a
              href="https://linkedin.com/in/gharibshaaban"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 card-glow hover:scale-105 transition-all group"
            >
              <Linkedin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-foreground mb-1">LinkedIn</p>
              <p className="text-sm text-muted-foreground">linkedin.com/in/gharibshaaban</p>
            </a>

            <div className="bg-card border border-border rounded-xl p-6 card-glow">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-semibold text-foreground mb-1">Location</p>
              <p className="text-sm text-muted-foreground">Cairo, Egypt</p>
            </div>
          </div>

          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 shadow-lg shadow-primary/30"
              asChild
            >
              <a href="mailto:gharib.s.dev@gmail.com">
                Send me a message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
