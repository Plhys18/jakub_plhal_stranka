import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Bot, Search, FlaskConical, Calculator, Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { LucideIcon } from "lucide-react";

const Portfolio = () => {
  const projects: {
    icon: LucideIcon;
    title: string;
    description: string;
    tags: string[];
    link?: string;
  }[] = [
    {
      icon: Bot,
      title: "Dev Agent",
      description: "Autonomous coding agent with a tool-use loop, AST-based repo understanding, and self-correcting edits via syntax validation.",
      tags: ["Python", "Claude API", "AI Agents", "Tool Use"],
      link: "https://github.com/Plhys18/dev-agent",
    },
    {
      icon: Search,
      title: "PR Review Agent",
      description: "AI code review bot that fetches PR diffs, analyzes them in a multi-step agent loop, and posts structured findings to GitHub.",
      tags: ["Python", "Claude API", "GitHub API", "Orchestration"],
      link: "https://github.com/Plhys18/pr-review-agent",
    },
    {
      icon: FlaskConical,
      title: "LLM Eval",
      description: "Evaluation framework for testing LLM outputs with pluggable scorers, multi-provider comparison, and LLM-as-judge.",
      tags: ["Python", "Anthropic SDK", "OpenAI SDK", "Evaluation"],
      link: "https://github.com/Plhys18/llm-eval",
    },
    {
      icon: Calculator,
      title: "Investment Calculator",
      description: "Interactive financial calculator with compound interest modeling, PDF export, and responsive charting.",
      tags: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
      link: "https://github.com/Plhys18/agentic-investicni-kalkulacka",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      
      {/* Background decorations */}
      <div className="fixed top-20 left-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="pt-32 pb-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-24 md:mb-32">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">Open Source Work</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tight drop-shadow-lg">Portfolio</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                AI agents, evaluation frameworks, and robust tools I've built. <br />
                All open source and available on <span className="text-white font-medium">GitHub</span>.
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full outline-none group">
                  <div className="h-full rounded-3xl bg-white/5 border border-white/10 p-10 backdrop-blur-xl relative overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(102,252,241,0.15)] hover:-translate-y-2">
                    
                    {/* Hover Top Glow */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Background glow behind icon */}
                    <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-500" />

                    <div className="flex justify-between items-start mb-8">
                      <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors duration-500">
                        <project.icon className="w-10 h-10 text-primary drop-shadow-[0_0_10px_rgba(102,252,241,0.6)] group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <ExternalLink className="w-6 h-6 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-white tracking-tight group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-black/40 border border-white/10 rounded-full text-sm text-gray-200 group-hover:border-white/20 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollReveal>
            <div className="relative text-center rounded-3xl p-12 md:p-20 overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              
              <div className="inline-block p-6 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md mb-8 shadow-2xl">
                <Mail className="w-16 h-16 text-primary drop-shadow-[0_0_20px_rgba(102,252,241,0.8)]" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">Interested in Working Together?</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to contribute to exciting visions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl py-8 px-10 rounded-full shadow-[0_0_40px_rgba(102,252,241,0.4)] transition-all hover:scale-105" asChild>
                  <a href="mailto:plhal.jakub18@gmail.com">Get In Touch</a>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/10">
                <Button variant="ghost" asChild className="text-muted-foreground hover:text-primary hover:bg-white/5 rounded-full px-6 py-6 transition-all text-lg">
                  <a href="https://www.linkedin.com/in/jakub-plhal18/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <Linkedin className="w-6 h-6" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="ghost" asChild className="text-muted-foreground hover:text-primary hover:bg-white/5 rounded-full px-6 py-6 transition-all text-lg">
                  <a href="https://github.com/Plhys18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <Github className="w-6 h-6" />
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
