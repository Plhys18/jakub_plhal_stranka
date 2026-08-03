import { useEffect } from "react";
import EarthHero from "@/components/EarthHero";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
{/*  Dramatic Hero Section  */}
<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
{/*  Background Element (EarthHero)  */}
<div className="absolute inset-0 z-0 opacity-40">
<EarthHero />
<div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none"></div>
<div className="absolute inset-0 hero-gradient pointer-events-none"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-5xl">
<div className="mb-6">
<span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-label tracking-widest uppercase mb-4">
                        Engineering AI that ships
                    </span>
</div>
<h1 className="text-6xl md:text-9xl font-headline font-bold tracking-tighter text-on-surface mb-4 leading-none text-glow">
                    Jakub Plhal
                </h1>
<p className="text-xl md:text-3xl font-headline text-primary-dim mb-2 tracking-tight">
                    Generative AI Engineer &amp; Product Builder
                </p>
<p className="text-lg md:text-xl text-on-surface-variant font-light mb-12 max-w-2xl mx-auto">
                    Building AI document automation at Y Soft
                </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
<a className="w-full md:w-auto px-10 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary-container rounded-full font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95" href="https://www.linkedin.com/in/jakub-plhal18/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                        <span className="material-symbols-outlined text-xl">open_in_new</span>
</a>
<a className="w-full md:w-auto px-10 py-4 glass-panel text-on-surface rounded-full font-bold flex items-center justify-center gap-2 border border-outline-variant/30 hover:bg-surface-variant/40 transition-all" href="https://github.com/Plhys18" target="_blank" rel="noopener noreferrer">
                        GitHub
                        <span className="material-symbols-outlined text-xl">code</span>
</a>
</div>
</div>
</section>
{/*  Who am I Section  */}
<section className="py-32 px-8 max-w-7xl mx-auto" id="expertise">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Card 1  */}
<div className="glass-panel p-10 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
<div className="mb-8 bg-surface-container-high w-14 h-14 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl" data-weight="fill">developer_mode</span>
</div>
<h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">Full-Stack</h3>
<p className="text-on-surface-variant leading-relaxed">
                        From wiring offices and automating small businesses to shipping product features used by thousands worldwide.
                    </p>
</div>
{/*  Card 2  */}
<div className="glass-panel p-10 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
<div className="mb-8 bg-surface-container-high w-14 h-14 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl" data-weight="fill">smart_toy</span>
</div>
<h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">AI Agents</h3>
<p className="text-on-surface-variant leading-relaxed">
                        Architecting autonomous systems including Dev Agents and PR Review Agents to streamline developer workflows and enhance productivity.
                    </p>
</div>
{/*  Card 3  */}
<div className="glass-panel p-10 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
<div className="mb-8 bg-surface-container-high w-14 h-14 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl" data-weight="fill">query_stats</span>
</div>
<h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">Evaluation</h3>
<p className="text-on-surface-variant leading-relaxed">
                        Implementing LLM Eval frameworks with LLM-as-judge methodologies to ensure accuracy, safety, and reliability in AI-driven features.
                    </p>
</div>
</div>
</section>
{/*  Skills & Technologies Section  */}
<section className="py-32 bg-surface-container-low" id="stack">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-20 text-center">
<h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Technical Arsenal</h2>
<div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
{/*  Column 1  */}
<div>
<h4 className="text-xs font-label uppercase tracking-widest text-primary-dim mb-8 flex items-center gap-3">
<span className="w-2 h-2 bg-primary rounded-full"></span>
                            Languages &amp; Frameworks
                        </h4>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">TypeScript</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">JavaScript</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">C#</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">.NET</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">React</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">Python</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">C</span>
</div>
</div>
{/*  Column 2  */}
<div>
<h4 className="text-xs font-label uppercase tracking-widest text-primary-dim mb-8 flex items-center gap-3">
<span className="w-2 h-2 bg-primary rounded-full"></span>
                            AI / LLM
                        </h4>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">Claude API</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">OpenAI Agents SDK</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">LangGraph</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">PydanticAI</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">Arize Phoenix</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">AI Agents</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">Tool Use</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">RAG</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">LLM Evaluation</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">Transformers</span>
</div>
</div>
{/*  Column 3  */}
<div>
<h4 className="text-xs font-label uppercase tracking-widest text-primary-dim mb-8 flex items-center gap-3">
<span className="w-2 h-2 bg-primary rounded-full"></span>
                            Tools &amp; Platforms
                        </h4>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">Git</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">Docker</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">CI/CD</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">GitHub Actions</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">AWS</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">Kubernetes</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">LiteLLM</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">OpenRouter</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">SQL</span>
<span className="px-4 py-2 bg-surface-container-high border border-primary/20 rounded-full text-sm text-primary drop-shadow-[0_0_8px_rgba(91,243,232,0.1)]">Redis</span>
</div>
</div>
</div>
</div>
</section>
{/*  Projects Section  */}
<section className="py-32 px-8" id="work">
<div className="max-w-7xl mx-auto">
<div className="mb-20 text-center">
<h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight">Selected Projects</h2>
<div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Project 1  */}
<div className="glass-panel p-8 rounded-xl project-card-glow transition-all duration-500 flex flex-col h-full border-primary/10">
<div className="flex items-center justify-between mb-6">
<span className="material-symbols-outlined text-primary text-3xl">psychology</span>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full border border-primary/30 text-primary font-label uppercase">Claude 3.5</span>
<span className="text-[10px] px-2 py-0.5 rounded-full border border-primary/30 text-primary font-label uppercase">Python</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold mb-3 text-on-surface">Autonomous Dev Agent</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">
                        An AI agent that writes and refines code independently using Claude 3.5 Sonnet. Capable of understanding complex requirements and delivering production-ready modules.
                    </p>
<a className="flex items-center gap-2 text-primary font-medium group text-sm" href="https://github.com/Plhys18/dev-agent" target="_blank" rel="noopener noreferrer">
                        View Project
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
</a>
</div>
{/*  Project 2  */}
<div className="glass-panel p-8 rounded-xl project-card-glow transition-all duration-500 flex flex-col h-full border-primary/10">
<div className="flex items-center justify-between mb-6">
<span className="material-symbols-outlined text-primary text-3xl">rule_settings</span>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full border border-primary/30 text-primary font-label uppercase">OpenAI</span>
<span className="text-[10px] px-2 py-0.5 rounded-full border border-primary/30 text-primary font-label uppercase">React</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold mb-3 text-on-surface">LLM Evaluation Suite</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">
                        A comprehensive framework for testing LLM outputs using LLM-as-a-judge methodologies. Provides deep insights into model performance, safety, and factual accuracy.
                    </p>
<a className="flex items-center gap-2 text-primary font-medium group text-sm" href="https://github.com/Plhys18/llm-eval" target="_blank" rel="noopener noreferrer">
                        View Project
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
</a>
</div>
{/*  Project 3  */}
<div className="glass-panel p-8 rounded-xl project-card-glow transition-all duration-500 flex flex-col h-full border-primary/10">
<div className="flex items-center justify-between mb-6">
<span className="material-symbols-outlined text-primary text-3xl">playing_cards</span>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full border border-primary/30 text-primary font-label uppercase">PWA</span>
<span className="text-[10px] px-2 py-0.5 rounded-full border border-primary/30 text-primary font-label uppercase">TypeScript</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold mb-3 text-on-surface">Felt Poker</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">
                        A local-first poker night companion with live tracking, P2P spectating, optimized settlements, statistics, and an AI advisor.
                    </p>
<a className="flex items-center gap-2 text-primary font-medium group text-sm" href="https://plhys18.github.io/felt-poker/" target="_blank" rel="noopener noreferrer">
                        View Project
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
</a>
</div>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="py-40 relative overflow-hidden" id="connect">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-8 text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-headline font-bold mb-8 tracking-tighter">Let's Work Together</h2>
<p className="text-xl text-on-surface-variant mb-16 max-w-2xl mx-auto leading-relaxed">
                    Available for collaborations on applied AI, product engineering, and ambitious systems that need to work beyond the demo.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="glass-panel p-6 rounded-xl hover:bg-surface-container transition-all group flex flex-col items-center" href="mailto:plhal.jakub18@gmail.com">
<span className="material-symbols-outlined text-primary mb-4 text-3xl group-hover:scale-110 transition-transform">alternate_email</span>
<span className="font-headline font-medium">Email</span>
</a>
<a className="glass-panel p-6 rounded-xl hover:bg-surface-container transition-all group flex flex-col items-center" href="https://www.linkedin.com/in/jakub-plhal18/" target="_blank" rel="noopener noreferrer">
<span className="material-symbols-outlined text-primary mb-4 text-3xl group-hover:scale-110 transition-transform">share</span>
<span className="font-headline font-medium">LinkedIn</span>
</a>
<a className="glass-panel p-6 rounded-xl hover:bg-surface-container transition-all group flex flex-col items-center" href="https://github.com/Plhys18" target="_blank" rel="noopener noreferrer">
<span className="material-symbols-outlined text-primary mb-4 text-3xl group-hover:scale-110 transition-transform">terminal</span>
<span className="font-headline font-medium">GitHub</span>
</a>
</div>
</div>
</section>
</main>
      <footer className="w-full py-12 border-t border-slate-800/20 bg-[#0d0e12]">
<div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
<div className="text-lg font-bold text-slate-100 font-headline">JP.DEV</div>
<p className="text-slate-500 font-body text-sm uppercase tracking-widest text-center">
                © 2026 Jakub Plhal. Built with curiosity. Shipped with intent.
            </p>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-[#5bf3e8] transition-colors font-body text-sm uppercase tracking-widest" href="https://www.linkedin.com/in/jakub-plhal18/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
<a className="text-slate-500 hover:text-[#5bf3e8] transition-colors font-body text-sm uppercase tracking-widest" href="https://github.com/Plhys18" target="_blank" rel="noopener noreferrer">GitHub</a>
<a className="text-slate-500 hover:text-[#5bf3e8] transition-colors font-body text-sm uppercase tracking-widest" href="mailto:plhal.jakub18@gmail.com">Email</a>
</div>
</div>
</footer>
    </>
  );
};

export default Home;
