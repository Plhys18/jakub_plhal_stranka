import { Link } from "react-router-dom";

const Navigation = () => {
  return (
<nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl">
<div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
<Link to="/" className="text-2xl font-bold tracking-tighter text-[#5bf3e8] font-headline">JP.DEV</Link>
<div className="hidden md:flex items-center gap-8">
<a className="text-slate-400 hover:text-slate-100 transition-colors duration-300 font-headline tracking-tight" href="#work">Work</a>
<a className="text-slate-400 hover:text-slate-100 transition-colors duration-300 font-headline tracking-tight" href="#expertise">Expertise</a>
<a className="text-slate-400 hover:text-slate-100 transition-colors duration-300 font-headline tracking-tight" href="#stack">Stack</a>
<a className="text-slate-400 hover:text-slate-100 transition-colors duration-300 font-headline tracking-tight" href="#connect">Connect</a>
</div>
<a href="/Jakub_Plhal_CV.pdf" download className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-6 py-2 rounded-full font-medium hover:scale-95 transition-transform duration-300">
                Resume
            </a>
</div>
</nav>
  );
};

export default Navigation;
