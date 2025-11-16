import { motion } from "framer-motion";
import { ChevronDown, Briefcase, Target, Ruler, Mail, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import EarthHero from "@/components/EarthHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const stats = [
    { icon: Briefcase, label: "3+ Years at SolarWinds", value: "Experience" },
    { icon: Target, label: "200+ Attendees at Events", value: "Leadership" },
    { icon: Ruler, label: "10+ Years Geodetic Engineering", value: "Expertise" },
  ];

  const skillCategories = [
    {
      title: "Backend & Systems",
      skills: ["C#", ".NET", "Python", "Java", "C/C++", "Node.js"],
    },
    {
      title: "Frontend & Mobile",
      skills: ["React", "TypeScript", "Flutter", "JavaScript"],
    },
    {
      title: "Tools & Practices",
      skills: ["Git", "CI/CD", "Visual Studio", "Linux/Unix", "Agile"],
    },
  ];

  return (
    <div className="min-h-screen">
      <EarthHero />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center z-10"
        >
          <h1 className="text-7xl md:text-9xl font-bold mb-6 text-glow">
            Jakub Plhal
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-4">
            Software Developer & AI Enthusiast
          </p>
          <p className="text-xl text-muted-foreground mb-8">
            Software Engineer at SolarWinds
          </p>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <Button
              size="lg"
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
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
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
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-8 h-8 text-primary animate-bounce-slow" />
        </motion.div>
      </section>

      {/* Who am I Section */}
      <section className="relative bg-tech-darker py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-5xl font-bold text-center mb-8">Who am I</h2>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              Software developer and AI enthusiast with strong academic background from Masaryk University. 
              Software Engineer at SolarWinds, experienced in C#/.NET/React and modern development practices. 
              Fast learner who ships reliable, maintainable code.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 card-glow-hover">
                  <CardContent className="p-8 text-center">
                    <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="text-lg">
                <Link to="/portfolio">View My Work</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/about">About Me</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="mailto:plhaljakub18@gmail.com">Contact</a>
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                <a 
                  href="https://linkedin.com/in/jakub-plhal-621992279" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                <a 
                  href="https://github.com/Plhys18" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative bg-background py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-5xl font-bold text-center mb-16">Skills & Technologies</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 card-glow-hover h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-secondary/20 to-primary/20 py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" asChild className="text-lg">
                <a href="mailto:plhaljakub18@gmail.com">plhaljakub18@gmail.com</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="tel:+420724407454">+420 724 407 454</a>
              </Button>
            </div>
            <div className="flex justify-center gap-4">
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
                  Connect on LinkedIn
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
                  View GitHub
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
