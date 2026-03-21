import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Languages, Code2, Linkedin, Github, Mail, Cpu, Wrench } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "SolarWinds",
      period: "Apr 2024 – Present",
      description: "Ship features end to end across C#/.NET backend and React frontend in a distributed, real-time platform. Integrate AI tooling into daily workflows and prototype LLM-based automation.",
    },
    {
      title: "Teaching Assistant (C & Python)",
      company: "Masaryk University",
      period: "Sep 2022 – Jun 2023",
      description: "Co-designed assignments and automated testing suites for C and Python courses. Mentored students through debugging, memory management, and algorithmic thinking.",
    },
    {
      title: "Engineer Intern",
      company: "RPSnet",
      period: "Jun 2018 – Sep 2019",
      description: "Supported network infrastructure operations, maintenance, and troubleshooting.",
    },
  ];

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code2,
      skills: ["TypeScript", "JavaScript", "C#", ".NET", "React", "Python", "C"],
    },
    {
      title: "AI / LLM",
      icon: Cpu,
      skills: ["Claude API", "OpenAI API", "AI Agents", "Tool Use", "RAG", "LLM Evaluation", "Prompt Engineering", "Transformers", "Agentic Workflows"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "Docker", "CI/CD", "GitHub Actions", "PostgreSQL"],
    },
  ];

  const languages = [
    { name: "Czech", level: "Native" },
    { name: "English", level: "C1-C2" },
    { name: "German", level: "A2" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      
      {/* Background decorations */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="pt-32 pb-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-20 md:mb-32">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">Background & Experience</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tight drop-shadow-lg">About Me</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                Software engineer at <span className="text-white font-medium">SolarWinds</span> shipping full-stack features.
                Building AI agents and LLM tooling in my free time. BSc Informatics, <span className="text-white font-medium">Masaryk University</span>.
              </p>
              
              {/* Contact & Social Links */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full px-6 border-primary/40 text-white bg-white/5 hover:bg-primary/20 hover:text-white backdrop-blur-md transition-all duration-300"
                >
                  <a href="mailto:plhal.jakub18@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Email Me
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full px-6 border-primary/40 text-white bg-white/5 hover:bg-primary/20 hover:text-white backdrop-blur-md transition-all duration-300"
                >
                  <a href="https://linkedin.com/in/jakub-plhal-621992279" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="w-5 h-5 text-primary" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full px-6 border-primary/40 text-white bg-white/5 hover:bg-primary/20 hover:text-white backdrop-blur-md transition-all duration-300"
                >
                  <a href="https://github.com/Plhys18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-primary" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Experience Timeline */}
          <section className="mb-32">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-16">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                  <Briefcase className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(102,252,241,0.6)]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">Work Experience</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-white/10 before:to-transparent">
              {experiences.map((exp, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-background bg-primary/20 shadow-[0_0_15px_rgba(102,252,241,0.4)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                      <div className="w-4 h-4 bg-primary rounded-full" />
                    </div>
                    <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5">
                      <div className="flex flex-col gap-2 mb-4">
                        <span className="text-primary font-medium tracking-wide text-sm">{exp.period}</span>
                        <h3 className="text-2xl font-bold text-white tracking-tight">{exp.title}</h3>
                        <p className="text-xl text-foreground/80 font-medium">{exp.company}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-32">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-16">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(102,252,241,0.6)]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">Education</h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl hover:border-primary/40 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-500" />
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Bachelor of Science in Informatics</h3>
                <p className="text-xl text-primary font-medium mb-4">Masaryk University, Brno</p>
                <p className="text-muted-foreground mb-8">Sep 2021 – Jan 2024 • Grade: A</p>
                <div className="mb-6">
                  <p className="text-white font-semibold mb-3">Key Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {["C# Programming", "Flutter Development", "Software Development Tools", "Algorithms", "Data Structures"].map((course) => (
                      <span key={course} className="px-4 py-2 bg-black/40 border border-white/10 rounded-full text-sm text-gray-200">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-white">Activities:</strong> Hockey team member, Dorm event organizer
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* Technical Skills - Reuse Premium Design */}
          <section className="mb-32">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-16">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                  <Code2 className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(102,252,241,0.6)]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">Technical Skills</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="h-full rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex items-center gap-4 mb-8">
                      <category.icon className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(102,252,241,0.6)]" />
                      <h3 className="text-2xl font-bold text-white tracking-tight">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span key={skill} className="px-5 py-2.5 bg-black/40 border border-white/10 rounded-full text-sm text-gray-200 hover:bg-primary/20 hover:border-primary/50 hover:text-white transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-16">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                  <Languages className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(102,252,241,0.6)]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">Languages</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-primary/40 transition-all duration-500 group">
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{lang.name}</h3>
                    <p className="text-primary/80 font-medium text-lg bg-primary/10 inline-block px-4 py-1 rounded-full">{lang.level}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
