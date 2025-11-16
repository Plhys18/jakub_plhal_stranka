import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Users, Ruler, GraduationCap, Network, Mail, Linkedin, Github } from "lucide-react";
import { LucideIcon } from "lucide-react";

const Portfolio = () => {
  const projects: {
    icon: LucideIcon;
    title: string;
    description: string;
    tags: string[];
  }[] = [
    {
      icon: Code2,
      title: "SolarWinds Engineering",
      description: "Full-stack development using C#, .NET, and React. Building scalable enterprise solutions with modern development practices.",
      tags: ["C#", ".NET", "React", "TypeScript", "CI/CD"],
    },
    {
      icon: Ruler,
      title: "Geodetic Engineering Business",
      description: "Self-employed geodetic engineer for 10+ years. Providing professional surveying and mapping services.",
      tags: ["Business", "Engineering", "Management"],
    },
    {
      icon: Users,
      title: "Event Management",
      description: "Organized and managed college dorm events for 200+ attendees. Developed leadership and organizational skills.",
      tags: ["Leadership", "Planning", "Communication"],
    },
    {
      icon: GraduationCap,
      title: "Teaching Assistant",
      description: "Taught C and Python programming to university students. Created educational materials and mentored students.",
      tags: ["C", "Python", "Education", "Mentoring"],
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Worked on various network infrastructure projects. Experience with system administration and Linux/Unix environments.",
      tags: ["Linux", "Unix", "Networking", "Systems"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <h1 className="text-6xl font-bold mb-6 text-glow">Portfolio</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A collection of my professional work, projects, and contributions across software development, 
                engineering, and education.
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 card-glow-hover h-full group">
                  <CardContent className="p-8">
                    <project.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollReveal>
            <div className="text-center bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl p-12">
              <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Interested in Working Together?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to contribute to your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button size="lg" asChild className="text-lg">
                  <a href="mailto:plhaljakub18@gmail.com">Get In Touch</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="tel:+420724407454">Call Me</a>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="ghost"
                  asChild
                  className="text-primary hover:text-primary hover:bg-primary/10"
                >
                  <a 
                    href="https://linkedin.com/in/jakub-plhal-621992279" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="text-primary hover:text-primary hover:bg-primary/10"
                >
                  <a 
                    href="https://github.com/Plhys18" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
