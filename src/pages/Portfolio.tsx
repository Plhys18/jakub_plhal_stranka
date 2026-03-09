import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Search, FlaskConical, Calculator, Code2, Mail, Linkedin, Github } from "lucide-react";
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
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <h1 className="text-6xl font-bold mb-6 text-glow">Portfolio</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                AI agents, evaluation frameworks, and tools I've built. All open source on GitHub.
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 card-glow-hover h-full group cursor-pointer">
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
                </a>
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
                  <a href="mailto:plhal.jakub18@gmail.com">Get In Touch</a>
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
