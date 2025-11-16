import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Languages, Code2, Linkedin, Github, Mail } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "SolarWinds",
      period: "Sep 2024 – Present",
      description: "Full-stack development using C#, .NET, and React. Building reliable, maintainable solutions.",
    },
    {
      title: "Software Engineer Intern",
      company: "SolarWinds",
      period: "Jul 2024 – Sep 2024",
      description: "Contributed to development projects and learned modern software engineering practices.",
    },
    {
      title: "Geodetic Engineer",
      company: "Self-Employed",
      period: "Jan 2013 – Present",
      description: "Independent geodetic engineering services with 10+ years of experience.",
    },
    {
      title: "Event Manager",
      company: "College Dorms",
      period: "Sep 2020 – Sep 2024",
      description: "Organized events for 200+ attendees, developing leadership and management skills.",
    },
    {
      title: "Teaching Assistant",
      company: "Masaryk University",
      period: "Sep 2022 – Mar 2023",
      description: "Taught C and Python programming to university students.",
    },
  ];

  const skillCategories = [
    {
      title: "Backend Development",
      icon: Code2,
      skills: ["C#", ".NET", "Python", "Java", "C/C++", "Node.js"],
    },
    {
      title: "Frontend & Mobile",
      icon: Code2,
      skills: ["React", "TypeScript", "Flutter", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Tools & Technologies",
      icon: Code2,
      skills: ["Git", "CI/CD", "Visual Studio", "Linux/Unix", "Docker"],
    },
    {
      title: "Methodologies",
      icon: Code2,
      skills: ["Agile", "Scrum", "TDD", "Code Review", "Version Control"],
    },
  ];

  const languages = [
    { name: "Czech", level: "Native" },
    { name: "English", level: "C1-C2" },
    { name: "German", level: "A2" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <h1 className="text-6xl font-bold mb-6 text-glow">About Me</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Software developer and AI enthusiast with strong academic background from Masaryk University. 
                Fast learner who ships reliable, maintainable code.
              </p>
              
              {/* Contact & Social Links */}
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant="outline"
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a 
                    href="mailto:plhaljakub18@gmail.com"
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email Me
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a 
                    href="https://linkedin.com/in/jakub-plhal-621992279" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a 
                    href="https://github.com/Plhys18" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Experience Timeline */}
          <section className="mb-24">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-12">
                <Briefcase className="w-10 h-10 text-primary" />
                <h2 className="text-4xl font-bold">Work Experience</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 card-glow-hover">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-1">{exp.title}</h3>
                          <p className="text-lg text-foreground">{exp.company}</p>
                        </div>
                        <span className="text-muted-foreground whitespace-nowrap">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-24">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-12">
                <GraduationCap className="w-10 h-10 text-primary" />
                <h2 className="text-4xl font-bold">Education</h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Card className="bg-card/50 backdrop-blur border-primary/20 card-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Bachelor of Science in Informatics
                  </h3>
                  <p className="text-lg mb-2">Masaryk University, Brno</p>
                  <p className="text-muted-foreground mb-4">Sep 2021 – Jan 2024 • Grade: A</p>
                  <div className="mb-4">
                    <p className="font-semibold mb-2">Key Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {["C# Programming", "Flutter Development", "Software Development Tools", "Algorithms", "Data Structures"].map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>Activities:</strong> Hockey team member, Dorm event organizer
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </section>

          {/* Technical Skills */}
          <section className="mb-24">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-12">
                <Code2 className="w-10 h-10 text-primary" />
                <h2 className="text-4xl font-bold">Technical Skills</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 card-glow-hover">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <category.icon className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm hover:bg-primary/20 hover:scale-105 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-12">
                <Languages className="w-10 h-10 text-primary" />
                <h2 className="text-4xl font-bold">Languages</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 card-glow-hover text-center">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{lang.name}</h3>
                      <p className="text-primary text-lg">{lang.level}</p>
                    </CardContent>
                  </Card>
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
